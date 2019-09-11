export function buildPath(page) {
    const parts = [];
    while (page) {
        parts.push(page.path);
        page = page.parent;
    }
    return parts.reverse().join('/');
}

export function getBreadcrumbs(page) {
    const breadcrumbs = [];
    while (page) {
        breadcrumbs.push({
            path: buildPath(page),
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