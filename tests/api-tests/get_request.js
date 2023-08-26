const axios = require('axios');
const { expect } = require('chai');
const {assert} = require('chai');
const apiData = require('../../data/apiData.js');
const { verifyResponseDataType } = require('../../utility/apiUtils.js');


describe("API Test", () => {

  it("positive case : should fetch response and verify data types are correct", async () => {
    const response = await axios.get(apiData.apiUrl);
    expect(response.status).to.equal(200);

    const responseData = response.data;

    responseData.forEach((post) => {
      context(`Checking post with id ${post.id}`, () => {
        verifyResponseDataType(post, "userId", "number");
        verifyResponseDataType(post, "id", "number");
        verifyResponseDataType(post, "title", "string");
        verifyResponseDataType(post, "body", "string");
      });
    });
  });


  it("negative case : should handle incorrect data types", async () => {
    // Mock a response with incorrect data types
    // For example, change "userId" data type to String

    try {
      const response = await axios.get(apiData.apiUrl);
      // Validate data types for specific fields
      assert.strictEqual(typeof response.data[0].userId, 'number');
    } catch (error) {
      assert.fail("Data types in response do not match the expected types");
    }
  });


});

/***** We can mock API responses with different scenarios to simulate more negative cases.  */