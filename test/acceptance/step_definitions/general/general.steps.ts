/// <reference types="webdriverio" />

import { Given, When, Then } from 'cucumber';
import { expect } from 'chai';
import MainPage from '../../pages/main.pages';

const mainPage = new MainPage();

Given(/^I enter to the Carnival cruise page$/, () => {
  let url: string;
  url = `https://www.carnival.com`;
  browser.url(url);
  browser.windowHandleFullscreen();
  browser.pause(1000);  
  mainPage.signPopUp.leftClick(0,0);      
});

When(/^I search cruises to "(.*)" with duration of "(.*)"$/, (sailTo: string, duration: string) => {    
  mainPage.setSailTo(sailTo);
  browser.pause(1000);
  mainPage.setDuration(duration);
  browser.pause(1000);
  mainPage.searchCruises();  
});

Then(/^Results are displayed$/, () => {    
  browser.waitUntil(mainPage.resultsLabel["isVisible"], 3000);
  expect(mainPage.resultsLabel.getText()).to.contain('Results');    
  expect(mainPage.resultWidgets.value.length).to.be.at.least(1,'No results to display');
  browser.pause(1000);
});
