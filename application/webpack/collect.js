/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-await-in-loop */
const glob = require('fast-glob');
const path = require('path');
const fs = require('fs-extra');
const frontMatterParse = require('front-matter');
const _ = require('lodash');

try {
    main();
} catch (e) {
    console.log(e);
}

async function collectChildren(directory) {
    const files = (await glob('*.{html,md}', { cwd: directory, ignore: ['index.html', '_index.html'], onlyFiles: true })).map(f => path.join(directory, f));
    const routes = (await readFiles(files)).map(frontMatterToRoute);

    for (let i = 0, t = files.length; i < t; i++) {
        const file = files[i];

        const folderWithSameName = path.join(path.dirname(file), path.basename(file, path.extname(file)));
        if (await fs.exists(folderWithSameName)) {
            routes[i].children = await collectChildren(folderWithSameName);
        }
    }
    return routes;
}

async function readFiles(files) {
    return (await Promise.all(files.map(f => fs.readFile(f, { encoding: 'utf8' }))))
        .map((c, ix) => ({ ...(frontMatterParse(c).attributes), filePath: path.relative('./content', files[ix]) }));
}

async function main() {
    const rootFiles = (await glob('*.{html,md}', { cwd: '../content/' })).map(f => path.resolve('../content', f));
    const routes = (await readFiles(rootFiles)).map(frontMatterToRoute);
    for (let i = 0, t = rootFiles.length; i < t; i++) {
        routes[i].children = await collectChildren(path.dirname(rootFiles[i]) + '/' + routes[i].path);
    }
    await fs.writeFile('content.json', JSON.stringify(routes));
}

function frontMatterToRoute(fm) {
    const data = _.pick(fm, ['title', 'icon', 'description']);
    data.priority = -fm.weight + 100;
    return {
        path: fm.bundle || fm.collection,
        data
    };
}
