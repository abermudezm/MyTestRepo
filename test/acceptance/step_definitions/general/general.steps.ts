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

When(/^I choose one sail to learn more about the trip$/, () => {    
  mainPage.openSail();  
  browser.pause(1000);
});

Then(/^The Itinerary page is displayed$/, () => {      
  browser.waitUntil(mainPage.itineraryLink["isVisible"], 1000);
  browser.waitUntil(mainPage.activitiesLink["isVisible"], 1000);
  browser.waitUntil(mainPage.roomsLink["isVisible"], 1000);
  browser.waitUntil(mainPage.moreDatesLink["isVisible"], 1000);        
  browser.pause(1000);
});

Then(/^The "(.*)" button is displayed$/, (bookButtonText: string) => {        
  browser.waitUntil(mainPage.bookingButton["isVisible"], 1000);
  expect(mainPage.bookingButton.getText()).to.contain(bookButtonText);    
  mainPage.bookingButton.click();
  browser.pause(3000);
});