let chai = require('chai');
let chaiHTTP = require('chai-http');
let server = require('../app');

// Assertion Style
chai.should();

chai.use(chaiHTTP);
