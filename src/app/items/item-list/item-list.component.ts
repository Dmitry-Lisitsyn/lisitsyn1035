import { Component, OnInit } from '@angular/core';
import { Mitem } from 'src/app/shared/models/mitems.model';
import { MitemService } from 'src/app/shared/services/mitem.service';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';
import {Tablesort}   from 'src/app/shared/models//tablesort';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

items: Mitem[];

searchCat = "";

  constructor(private mitemsService:MitemService, private router: Router) { }



  ngOnInit(): void {
    this.getData();
    new Tablesort(document.getElementById('table'));
  }


async getData(){
  try{
  let items = this.mitemsService.getAll();
  this.items = isNullOrUndefined(await items) ? [] : await items;
  }catch(err){
    console.error(err);
  }

}

onLinkProfile(id: number) {
  this.router.navigate([this.router.url, 'profile', id]);
}

onAddProfile() {
  this.router.navigate([this.router.url, 'profile']);
}

async onDelete(item) {
  try {
    await this.mitemsService.deleteOneById(item.id);

  } catch (err) {
    console.error(err);
  } finally {
    this.getData();

  }
}


async onPlus(num:number){
  try {
    this.items[num-1].number = this.items[num-1].number +1;
    await this.mitemsService.putOneById(num,this.items[num-1]);
    this.getData();
  //  await this.mitemsService.putOneById(this.id, this.itemForm.value);
  } catch (err) {
    console.error(err);
  } 
 

}
async onMinus(num:number){
  try {
    this.items[num-1].number = this.items[num-1].number -1;
    if(this.items[num-1].number < 0){
      this.items[num-1].number = 0;
    } 
    await this.mitemsService.putOneById(num,this.items[num-1]);
    
    this.getData();
 
}catch (err) {
  console.error(err);
  } 
}

 }



