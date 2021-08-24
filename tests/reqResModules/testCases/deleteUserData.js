'use strict';

const { expect, assert, should } = require('chai');
const requestService = require('../request.service');
const jsonConfig = require('../../../configs/default.json');

const deleteUserDataResponse = async() => {
    const responseResult = await requestService.makeRequest({
        url: `${jsonConfig.services.reqResService.baseUrl}users/5`,
        method: 'DELETE'
    });
    return responseResult;
};

describe('DELETE /userdata', () => {
    it('should verify delete user data id 5 from list', async() => {
        const res = await deleteUserDataResponse();
        expect(res).equals.toString(200);
        console.log(res);
    });
});

