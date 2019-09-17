export const pathToContent = 'assets/content.json';

export async function getAppStructure() {
    const content = (await fetch(pathToContent)
        .then((res) => res.text()));
    return JSON.parse(content);
}

export function getBreadcrumbs(page) {
    const breadcrumbs = [];
    while (page) {
        breadcrumbs.push({
            path: page.path,
            label: page.data.title,
            icon: page.data.icon || 'folder'
        });
        page = page.parent;
    }
    return breadcrumbs.reverse();
}

export function getTopTitle(page) {
    let title = page.data.title;
    while (page) {
        title = page.data.title;
        page = page.parent;
    }
    return title;
}