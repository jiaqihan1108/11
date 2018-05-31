var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

driver.get('http://localhost:5000/');
driver.findElement(webdriver.By.linkText('Sign up')).click();
driver.findElement(webdriver.By.id('username')).sendKeys('111')
driver.findElement(webdiver.By.name('name')).sendKeys('group1');
driver.findElement(webdiver.By.name('password')).sendKeys('111');
driver.findElement(webdiver.By.name('password2')).sendKeys('111');
driver.findElement(webdiver.By.name('email')).sendKeys('qwe@gmail.com');
driver.findElement(webdriver.By.id('signreg')).click();

driver.findElement(webdiver.By.name('username')).sendKeys('111');
driver.findElement(webdiver.By.name('password')).sendKeys('111');
driver.findElement(webdriver.By.id('indexlogin')).click();
assert(driver.findElement(webdriver.By.css('h1')),"Welcome!");
