/* eslint-disable no-param-reassign */
module.exports = function (content) {
    const matches = content.match(/```/g);
    const split = content.split(/```/);

    return split.reduce((out, chunk, index) => {
        if (index % 2) {
            out += chunk.replace(/\}|\{/g, (matched, offset) => (chunk[offset - 1] !== matched && chunk[offset + 1] !== matched
                ? `{{'${matched}'}}` : matched));
        } else {
            out += chunk;
        }
        if (matches && matches[index]) {
            out += matches[index];
        }
        return out;
    }, '');
};
