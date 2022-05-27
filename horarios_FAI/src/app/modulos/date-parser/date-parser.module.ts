import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DateParserModule {

  /**
   * @param stringDate 03:34:00
   * @returns 334
   */
  substractHour(stringDate:string):number{
    return parseInt(stringDate.slice(0,2)+stringDate.slice(4,6));
  }

  formatFilter(hour:number,minute:number){
    return this.substractHour(hour+":"+minute);
  }


 }
