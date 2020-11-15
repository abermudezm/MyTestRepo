import { MAIN_PAGE } from '../selectors/main.selectors';
import _ = require('lodash');

export default class MainPage  {

  get signPopUp() { return browser.element(<any>MAIN_PAGE.signPopUp);}
  get destinationsButton() { return browser.element(<any>MAIN_PAGE.destinationsButton);}
  get durationsButton() { return browser.element(<any>MAIN_PAGE.durationsButton);}
  get optionsList() { return browser.elements(<any>MAIN_PAGE.optionsList);}
  get searchCruisesButton() { return browser.element(<any>MAIN_PAGE.searchCruisesButton);}
  get resultsLabel() { return browser.element(<any>MAIN_PAGE.resultsLabel);}  
  get resultWidgets() { return browser.elements(<any>MAIN_PAGE.resultWidgets);}  
  get resultLearnMoreButtons() { return browser.elements(<any>MAIN_PAGE.resultLearnMoreButtons);}  

  private setOption(opt: string){    
      const option = _.find(this.optionsList.value, option => browser.elementIdText(option.ELEMENT).value === opt);
      browser.elementIdClick(option.ELEMENT);
  }

  public setSailTo(destination: string){    
      this.destinationsButton.click();  
      this.setOption(destination);
  }

  public setDuration(duration: string){
      this.durationsButton.click();
      this.setOption(duration);  
  }  

  public searchCruises(){
      this.searchCruisesButton.click();
  } 
  
}