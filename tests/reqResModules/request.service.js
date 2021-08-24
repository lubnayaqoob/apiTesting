'use strict';

const got = require('got');
const _ = require('lodash');

class RequestService {
    async makeRequest({
        url,
        method = 'GET',
        queryParams = {},
        headers = {},
        reqPayload = {}
    }) {
        const makeRequestObj = {
            method: method,
            responseType: 'json',
            headers: headers,
            searchParams: new URLSearchParams(queryParams)
        };
        const makeRequestObjPOST = {
            json: reqPayload
        };
        if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
            _.assign(makeRequestObj, makeRequestObjPOST);
        }
        const response = await got(url, makeRequestObj);
        return response.body;
    }
}

module.exports = new RequestService();
