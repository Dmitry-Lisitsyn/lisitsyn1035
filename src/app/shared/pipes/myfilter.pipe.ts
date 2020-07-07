import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(items:any[], searchCat:string): any {
    
let filterCat = searchCat;
let filteredValues = [];


if((filterCat != "" || filterCat != null)) {

  return filteredValues ? items.filter(item => (item.category+" "+item.number).toLowerCase().indexOf(filterCat.toLowerCase()) !== -1) : items;
   
};
  }

}
