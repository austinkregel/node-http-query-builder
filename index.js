/**
 * @param url
 * @param parts
 * @returns {string}
 */
const formatUrlWithParts = (url, parts) => {
    if (url.indexOf('?') === -1 && parts.length > 0) {
        return url + '?'  + parts
    }
    return url + parts;
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
            if (possiblyNested.length === 0) {
                continue;
            }
            parts += encodeURI(key) + '=' + possiblyNested.join(',');
        } else if (options[key] !== null && options[key] !== undefined && options[key] !== '') {
            parts += (parts !== '' ? '&' : '') + (encodeURI(key) + '=' + encodeURI(options[key]));
        }
    }

    return formatUrlWithParts(base, parts);
};

module.exports = {
    buildUrl
}