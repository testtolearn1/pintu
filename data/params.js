module.exports = {
    opts : {
    path: "/wd/hub",
    port: 4723,
    capabilities: {
      platformName: "Android",
      "appium:deviceName": "emulator-5554", 
      "appium:appPackage": "com.loginmodule.learning", 
      "appium:automationName": "UIAutomator2",
      "appium:noReset": "true",
      "appium:appActivity": ".activities.LoginActivity", 
    }
  }
}