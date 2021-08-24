'use strict';

const { expect, assert, should } = require('chai');
const requestService = require('../request.service');
const testData = require('../userDataSchema/userData_schema');
const jsonConfig = require('../../../configs/default.json');
const _ = require('lodash');

const getUserDataRecord = async() => {
    const responseResult = await requestService.makeRequest({
        url: `${jsonConfig.services.reqResService.baseUrl}users/1`,
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    });
    return responseResult;
};

describe('GET /userdata', () => {
    it('should return user data of id 1', async() => {
        const res = await getUserDataRecord();
        try {
            expect(res.statusCode).to.equal(200);
            res.should.be.an('object');
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    });

    it('should validate json schema of user data', async() => {
        const res = await getUserDataRecord();
        expect(res).to.be.jsonSchema(testData.schema);
        assert.jsonSchema(res, testData.schema);
    // expect(res).to.not.be.jsonSchema(schema);
    });
});
