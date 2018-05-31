var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

driver.get('http://localhost:5000/users/startgame');
driver.findElement(webdriver.By.id('starname')).sendKeys('hello')
driver.findElement(webdiver.By.id('starve')).sendKeys('gym');
driver.findElement(webdiver.By.id('stardesc')).sendKeys('The best event for pingpong beginers');
driver.findElement(webdiver.By.id('start1')).sendKeys('20180531');
driver.findElement(webdiver.By.id('start2')).sendKeys('20180528');
driver.findElement(webdriver.By.id('start3')).sendKeys('20180602');
driver.findElement(webdriver.By.id('starsubmit')).click();

Assert(driver.getCurrentUrl(),"http://localhost:5000/users/mygame");
