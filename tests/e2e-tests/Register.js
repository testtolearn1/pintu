const expect = require('chai').expect;
const { remote } = require("webdriverio");
const optsd = require("../../data/params.js")
const locators = require("../../utility/elementLocators.js");
const data = require("../../data/appData.js");


async function testSuccessfulRegistration() {

          // Appium server connection 

          const driver = await remote(optsd.opts);
          await driver.launchApp();
      
            // Navigate to registration screen
          driver.touchAction([ {action: 'press', x: 300, y: 1000}, {action: 'moveTo', x: 300, y: 100}, 'release' ]);

          const register_Link = await driver.findElement('id', locators.registerLinkID);
          driver.elementClick(register_Link.ELEMENT);

          //Enter details on registration screen
          const usernameInput = await driver.findElement('id', locators.usernameInputID);
          driver.elementSendKeys(usernameInput.ELEMENT, data.registerName);


          const emailInput = await driver.findElement('id', locators.emailRegisterInputID);
          driver.elementSendKeys(emailInput.ELEMENT, data.registerNewEmail);


          const passwordInput = await driver.findElement('id', locators.passwordRegisterInputID);
          driver.elementSendKeys(passwordInput.ELEMENT, data.registerNewPassword);


          const confirmPasswordInput = await driver.findElement('id', locators.confirmPasswordInputID);
          driver.elementSendKeys(confirmPasswordInput.ELEMENT, data.registerConfirmPassword);


          // scroll
          driver.touchAction([ {action: 'press', x: 300, y: 1100}, {action: 'moveTo', x: 300, y: 100}, 'release' ]);

          // Click the register button

          const registerButton = await driver.findElement('id',locators.registerButtonID);
          await driver.elementClick(registerButton.ELEMENT);

        
          // // Verify successful registration by checking for a success message

          const successMessage = await driver.findElement('id', locators.registrationMessageID)
          await expect(successMessage).to.equal(data.registrationSuccessMessage);
          await expect(successMessage).toBeDisplayed();

          await driver.quit();
  }
  
  

async function testRegistrationWithExistingEmail() {
   
        // Appium server connection 

        const driver = await remote(optsd.opts);
        await driver.launchApp();
    
          // Navigate to registration screen
        driver.touchAction([ {action: 'press', x: 300, y: 1000}, {action: 'moveTo', x: 300, y: 100}, 'release' ]);

        const register_Link = await driver.findElement('id', locators.registerLinkID);
        driver.elementClick(register_Link.ELEMENT);

        //Enter details on registration screen
        const usernameInput = await driver.findElement('id', locators.usernameInputID);
        driver.elementSendKeys(usernameInput.ELEMENT, data.registerExistingName);


        const emailInput = await driver.findElement('id', locators.emailRegisterInputID);
        driver.elementSendKeys(emailInput.ELEMENT, data.registerExistingEmail);


        const passwordInput = await driver.findElement('id', locators.passwordRegisterInputID);
        driver.elementSendKeys(passwordInput.ELEMENT, data.registerExistingPassword);


        const confirmPasswordInput = await driver.findElement('id', locators.confirmPasswordInputID);
        driver.elementSendKeys(confirmPasswordInput.ELEMENT, data.registerExistingConfirmPassword);


        // scroll
        driver.touchAction([ {action: 'press', x: 300, y: 1100}, {action: 'moveTo', x: 300, y: 100}, 'release' ]);

        // Click the register button

        const registerButton = await driver.findElement('id',locators.registerButtonID);
        await driver.elementClick(registerButton.ELEMENT);

      
        // Verify error message for existing email 
      
        const error_already_Message = await driver.findElement('id', locators.registrationMessageID)
        await expect(error_already_Message).to.equal(data.emailAlreadyExistsMessage);
        await expect(error_already_Message).toBeDisplayed();

        await driver.quit();
  }
  

async function testRegistrationPasswordMismatch(){

          const driver = await remote(optsd.opts);
          await driver.launchApp();

          // Navigate to registration screen
        driver.touchAction([ {action: 'press', x: 300, y: 1000}, {action: 'moveTo', x: 300, y: 100}, 'release' ]);

        const register_Link = await driver.findElement('id', locators.registerLinkID);
        driver.elementClick(register_Link.ELEMENT);

        //Enter details on registration screen
        const usernameInput = await driver.findElement('id', locators.usernameInputID);
        driver.elementSendKeys(usernameInput.ELEMENT, data.registerExistingName);


        const emailInput = await driver.findElement('id', locators.emailRegisterInputID);
        driver.elementSendKeys(emailInput.ELEMENT, data.registerExistingEmail);


        const passwordInput = await driver.findElement('id', locators.passwordRegisterInputID);
        driver.elementSendKeys(passwordInput.ELEMENT, data.passwordMismatchOne);


        const confirmPasswordInput = await driver.findElement('id', locators.confirmPasswordInputID);
        driver.elementSendKeys(confirmPasswordInput.ELEMENT, data.passwordMismatchTwo);


        // scroll
        driver.touchAction([ {action: 'press', x: 300, y: 1100}, {action: 'moveTo', x: 300, y: 100}, 'release' ]);

        // Click the register button

        const registerButton = await driver.findElement('id',locators.registerButtonID);
        await driver.elementClick(registerButton.ELEMENT);
        


        // Verify error message for password mismatch  

        const mismatch_Message = await driver.findElement('xpath', locators.passwordNotMatchMsgXPath)
        await expect(mismatch_Message).to.equal(data.passwordmismatchMessage);

        await driver.quit();
}



  testRegistrationWithExistingEmail().catch(console.error);
  testSuccessfulRegistration().catch(console.error);
  testRegistrationPasswordMismatch().catch(console.error);