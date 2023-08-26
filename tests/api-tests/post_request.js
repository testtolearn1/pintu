const { expect } = require('chai');
const apiData = require('../../data/apiData.js');
const { postApiRequest, verifyResponseAgainstPayload } = require('../../utility/apiUtils.js');
const {assert} = require('chai');

describe("POST API Test", () => {

  it("should post data and verify response is correct as per inputted payload ", async () => {
    const response = await postApiRequest(apiData.apiUrl, apiData.payload);
    verifyResponseAgainstPayload(response, apiData.payload);
  });

});
