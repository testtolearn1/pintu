const axios = require('axios');
const { expect } = require('chai');


const verifyResponseDataType = (data, field, expectedType) => {
    expect(data).to.have.property(field);
    expect(data[field]).to.be.a(expectedType);
}

const postApiRequest = async (url, payload) => {
  try {
    const response = await axios.post(url, payload);
    return response;
  } catch (error) {
    throw new Error(`POST request failed: ${error.message}`);
  }
};

const verifyResponseAgainstPayload = (response, payload) => {
  expect(response.status).to.equal(201);

  const responseData = response.data;
  expect(responseData.userId).to.equal(payload.userId);
  expect(responseData.id).to.equal(payload.id);
  expect(responseData.title).to.equal(payload.title);
  expect(responseData.body).to.equal(payload.body);
};


module.exports = {
  verifyResponseDataType,
  postApiRequest,
  verifyResponseAgainstPayload
};
