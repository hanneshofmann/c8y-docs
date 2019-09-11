const frontMatterParse = require('front-matter');

module.exports = function (content) {
    return frontMatterParse(content).body;
};
