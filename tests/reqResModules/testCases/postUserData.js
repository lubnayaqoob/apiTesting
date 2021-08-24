'use strict';

const { expect, assert, should } = require('chai');
const requestService = require('../request.service');
const constant = require('../utils/constant');
const jsonConfig = require('../../../configs/default.json');


const createUserDataRecord = async() => {
    const responseResult = await requestService.makeRequest({
        url: `${jsonConfig.services.reqResService.baseUrl}users`,
        method: 'POST',
        reqPayload: {
            'name': 'Lubna Yaqoob',
            'job': 'QA Engineer'
        },
        headers: {
            Accept: 'application/json'
        }
    });
    return responseResult;
};

describe('POST /userdata', () => {
    it('should verify response of  a creatednew user with provided request payload', async() => {
        try {
            const res = await createUserDataRecord();
            expect(res).equals.toString(200);
            res.should.be.an('object');
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    });
});

