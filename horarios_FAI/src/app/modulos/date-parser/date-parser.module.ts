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
   * @returns 03
   */
  substractHour(stringDate:string):number{
    return parseInt(stringDate.slice(0,2));
  }



 }
