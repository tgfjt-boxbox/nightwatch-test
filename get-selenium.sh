#!/bin/sh

wget http://selenium-release.storage.googleapis.com/2.41/selenium-server-standalone-2.41.0.jar -P selenium/
wget http://chromedriver.storage.googleapis.com/2.9/chromedriver_mac32.zip -P selenium/
unzip selenium/chromedriver_mac32.zip -d selenium/
