'use strict';

const { expect, assert, should } = require('chai');
const requestService = require('../request.service');
const jsonConfig = require('../../../configs/default.json');

const updateRecord = async() => {
    const responseResult = await requestService.makeRequest({
        url: `${jsonConfig.services.reqResService.baseUrl}users/2`,
        method: 'PUT',
        reqPayload: {
            'job': ' senior software Engineer'
        },
        headers: {
            Accept: 'application/json'
        }
    });
    return responseResult;
};

describe('PUT-Update /userdata', () => {
    // eslint-disable-next-line no-unused-expressions
    it('should verify response of  a created new user with provided request payload', async() => {
        const res = await updateRecord();
        res.should.be.an('object');
        console.log(res);
    });
});

