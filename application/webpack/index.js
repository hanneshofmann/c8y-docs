const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const merge = require('webpack-merge');

const loaderHtml = {
    loader: 'html-loader'
};
const loaderMarkdown = {
    loader: 'markdown-loader'
};
const loaderFrontMatter = path.join(__dirname, 'loader-frontmatter.js');
const loaderTemplateCode = path.join(__dirname, 'loader-template-code.js');

module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.md$/,
                    use: [loaderHtml, loaderMarkdown, loaderFrontMatter, loaderTemplateCode]
                }
            ]
        }
    };
};

module.exports.mergeFn = function (finalConfig, current) {
    const htmlRule = finalConfig.module.rules.find(r => r.test.test('.html'));
    htmlRule.oneOf.unshift({
        test: /packages.styleguide/,
        use: [loaderHtml, loaderFrontMatter]
    });
    return merge(finalConfig, current);
};
