PINTU tech asssesment

1. API test
2. Mobile Android Test

Structure :
--data
-apiData.js : contains the api data used as payload in post request for API Tests
-appData.js : contains Android app Test data e.g. email, password, messages on layouts
-params.js : contains capabilities and server/port details for appium

--tests - api-tests: tests for part 1 of assignment - e2e-tests: tests for part 2 of assignment for android automation .

--utility - apiUtils.js : Utility/customs functions created for modularity
-elementLocators.js : paths for element locators on android app

    I have used axios and mocha for API Tests
    Appium and webdriverio for Android Tests. The video of successfull execution are attached
    I have used appium2.X.X version on Mac 12.1 (M1 pro chip)

    Steps to execute :
    1. Clone the repo
    2. cd repo
    3. run `npm i` on terminal
    3. run  -> npm run script-name from package.json to run the desired script . Example :   $ npm run getApiTest

Notes :1. For appium test , please install appium globally and run startappiumserver script before running any andoid tests scripts 2. Since Sample android app download from https://apkpure.com/sample-android-app-login-test/com.loginmodule.learning/download?from=details is not a react native app I have used appium. The tests might be flaky.

Thanks
