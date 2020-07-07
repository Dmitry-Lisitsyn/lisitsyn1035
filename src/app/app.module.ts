import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ItemEditComponent } from './items/item-edit/item-edit.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyfilterPipe } from './shared/pipes/myfilter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    ItemEditComponent,
    ItemListComponent,
    MyfilterPipe,
   
 
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
