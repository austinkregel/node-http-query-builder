/**
 * @param url
 * @param parts
 * @returns {string}
 */
const formatUrlWithParts = (url, parts) => {
    return url + (url.indexOf('?') === -1 ? '?' : '') + parts;
}

/**
 * @param base
 * @param options
 * @returns {string}
 */
const buildUrl = (base, options) => {
    let parts = '';

    for (let key in options) {
        let possiblyNested = options[key];

        if (typeof possiblyNested === 'object' && !Array.isArray(possiblyNested)) {
            for (let value in options[key]) {
                let valueToQuery = options[key][value];

                if (typeof valueToQuery !== 'string') {
                    valueToQuery = JSON.stringify(valueToQuery)
                }

                parts += (parts !== '' ? '&' : '') + (encodeURI(key) + '[' + encodeURI(value) + ']=' + encodeURI(valueToQuery));
            }
        } else if (Array.isArray(possiblyNested)) {
            parts += encodeURI(key) + '=' + possiblyNested.join(',');
        } else if (options[key] !== undefined && options[key].length > 0) {
            parts += (parts !== '' ? '&' : '') + (encodeURI(key) + '=' + encodeURI(options[key]));
        }
    }

    return formatUrlWithParts(base, parts);
};

module.exports = {
    buildUrl
}