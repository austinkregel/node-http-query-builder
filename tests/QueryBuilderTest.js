const assert = require('assert');
const { buildUrl } = require('../index')

const testData = [
    {
        url: '/api/users?filter[name]=Austin',
        baseUrl: '/api/users',
        queryObject: {
            filter: {
                name: 'Austin'
            }
        }
    },
    {
        url: '/api/users?includes=posts',
        baseUrl: '/api/users',
        queryObject: {
            includes: ['posts']
        }
    },
    {
        url: '/api/users?includes=postsFromAString',
        baseUrl: '/api/users',
        queryObject: {
            includes: 'postsFromAString'
        }
    },
    {
        url: '/api/users?includes=posts,stories',
        baseUrl: '/api/users',
        queryObject: {
            includes: ['posts', 'stories']
        }
    },
    {
        url: '/api/users?page=12',
        baseUrl: '/api/users',
        queryObject: {
            page: 12
        }
    },
    {
        url: '/api/users?page=0',
        baseUrl: '/api/users',
        queryObject: {
            page: 0
        }
    },
    {
        url: '/api/empty-object',
        baseUrl: '/api/empty-object',
        queryObject: {}
    },
    {
        url: '/api/users?filter[posts.is_published]=true',
        baseUrl: '/api/users',
        queryObject: {
            filter: {
                'posts.is_published': 'true',
            }
        }
    },
    {
        url: '/api/empty-includes',
        baseUrl: '/api/empty-includes',
        queryObject: {
            include: []
        }
    },
    {
        url: '/api/users?filter[posts.tags]=%7B%22name%22:%22cool%22%7D',
        baseUrl: '/api/users',
        queryObject: {
            filter: {
                'posts.tags': {
                    name: 'cool'
                }
            }
        }
    },
    {
        url: '/your-route-to-build-a-query-for?option=do%20build%20something%20for&objectThing[a%20key-value%20pair]=of%20valuesarrayThing=array,of,values',
        baseUrl: '/your-route-to-build-a-query-for',
        queryObject: {
            option: 'do build something for',
            objectThing: {
                'a key-value pair': 'of values'
            },
            arrayThing: ['array', 'of', 'values'],

        }
    }
]

describe('buildUrl can build urls from arrays and objects',  () => {
    testData.forEach(function (run) {
        it('does build the url ' + run.url, function (done) {
            assert.equal(run.url, buildUrl(run.baseUrl, run.queryObject));
            done()
        });
    });
})