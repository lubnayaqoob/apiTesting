'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiAsPromised = require('chai-as-promised');
const chaiJSONSchema = require('chai-json-schema');
const deepEqualInAnyOrder = require('deep-equal-in-any-order');

chai.use(chaiHttp);
chai.use(chaiAsPromised);
chai.use(chaiJSONSchema);
chai.use(deepEqualInAnyOrder);

global.chai = chai;
global.sinon = require('sinon');
global.assert = require('assert');
global.expect = require('chai').expect;
global.should = chai.should();
