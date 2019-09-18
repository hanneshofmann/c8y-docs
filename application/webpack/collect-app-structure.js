const glob = require('fast-glob');
const path = require('path');
const fs = require('fs-extra');
const frontMatterParse = require('front-matter');

const pathToContent = '../content';
const contentFile = 'content.json';

try {
    main();
} catch (e) {
    console.log(e);
}

async function main() {
    const rootFiles = (await glob('*.md', {cwd: pathToContent}))
        .map(file => path.resolve(pathToContent, file));

    const routes = (await readFiles(rootFiles))
        .map(frontMatterToRoute);

    for (let i = 0; i < rootFiles.length; i++) {
        routes[i].children = await collectChildren(path.dirname(rootFiles[i]) + '/' + routes[i].path);
    }
    await fs.writeFile(contentFile, JSON.stringify(routes));
}

async function collectChildren(directory) {
    const files = (await glob('*.md', {cwd: directory, onlyFiles: true}))
        .map(file => path.join(directory, file));

    const routes = (await readFiles(files))
        .map(frontMatterToRoute);

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const folderWithSameName = path.join(path.dirname(file), path.basename(file, path.extname(file)));
        if (await fs.exists(folderWithSameName)) {
            routes[i].children = await collectChildren(folderWithSameName);
        }
    }
    return routes;
}

async function readFiles(files) {
    return (await Promise.all(files.map(file => fs.readFile(file, {encoding: 'utf8'}))))
        .map((c, ix) => ({ ...(frontMatterParse(c).attributes), filePath: path.relative(pathToContent, files[ix]) }));
}

function frontMatterToRoute(fm) {
    let filePath = '';
    if(fm.slug) {
        const splitFilePath = fm.filePath.split('/');
        splitFilePath.pop();
        filePath = splitFilePath.join('/') + '/' + fm.slug;
    } else {
        filePath = fm.filePath.replace(/.md$/, '');
    }
    return {
        path: fm.bundle || filePath,
        data: {
            title: fm.title || '',
            icon: fm.icon || 'no-icon',
            priority: -fm.weight + 100,
            filePath: fm.filePath
        }
    };
}