/// <reference types="webdriverio" />

import { Given, When } from 'cucumber';

Given(/^I enter to the Carnival cruise page$/, () => {
  let url: string;
  url = `https://www.carnival.com`;
  browser.url(url);
  browser.windowHandleFullscreen();
  browser.pause(1000);
});

