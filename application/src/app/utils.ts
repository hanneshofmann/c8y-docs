export function getBreadcrumbs(page) {
    const breadcrumbs = [];
    let breadcrumbPage = page;

    while (breadcrumbPage) {
        breadcrumbs.unshift({
            path: breadcrumbPage.path,
            label: breadcrumbPage.data.title,
            icon: breadcrumbPage.data.icon || 'folder'
        });
        breadcrumbPage = breadcrumbPage.parent
    }
    return breadcrumbs;
}

export function getTopTitle(page) {
    let title = page.data.title;
    while (page) {
        title = page.data.title;
        page = page.parent;
    }
    return title;
}