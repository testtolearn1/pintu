const expect = require('chai').expect;
const { remote } = require("webdriverio");
const optsd = require("../../data/params.js");
const data = require("../../data/appData.js");
const locators = require("../../utility/elementLocators.js");


async function testSuccessfulLogin() {

    // Appium server connection 

    const driver = await remote(optsd.opts);
    await driver.launchApp();

      // Find and enter valid login credentials

      const useremailInput = await driver.findElement('id', locators.useremailInputID);
      driver.elementSendKeys(useremailInput.ELEMENT, data.loginEmail);


      const passwordInput = await driver.findElement('id', locators.passwordInputID);
      driver.elementSendKeys(passwordInput.ELEMENT, data.loginPassword);


      // Click the login button
      const loginButton = await driver.findElement('id', locators.loginButtonID);
      driver.elementClick(loginButton.ELEMENT);

      const welcomeText = await driver.findElement('xpath', locators.loginWelcomeTextXPath)
        await expect(welcomeText).to.equal(data.welcomeMessage);
        await expect(welcomeText).toBeDisplayed();

      await driver.quit();
}


async function testInvalidLogin() {
  // Appium server connection 

    const driver = await remote(optsd.opts);
    await driver.launchApp();

    // Find and enter invalid login credentials

      const useremailInput = await driver.findElement('id', locators.useremailInputID);
      driver.elementSendKeys(useremailInput.ELEMENT, data.loginIncorrectEmail);


      const passwordInput = await driver.findElement('id', locators.passwordInputID);
      driver.elementSendKeys(passwordInput.ELEMENT, data.loginPassword);


      // Click the login button
      const loginButton = await driver.findElement('id', locators.loginButtonID);
      driver.elementClick(loginButton.ELEMENT);


      const errorText = await driver.findElement('id', locators.loginErrorTextID);
      await expect(errorText).to.equal(data.errorTextLogin);

      await driver.quit();
}

testInvalidLogin().catch(console.error);
testSuccessfulLogin().catch(console.error);


/************ 
 * Testcase 1 :testSuccessfulLogin() : Verify user is able to successfuly login by entering correct email and password
 * Testcase 2: testInvalidLogin() : Verify user is not able to login annd received a error if incorrect email or password is entered
other tests could be :
Testcase 3 : Check the email entered should be in email format 
Testcase 4: Verify password entered should not be visible and shown in encrypted form
*/