import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ItemListService} from './item-list.service';
import { AppComponent } from './app.component';
import {ItemDetails} from './ItemDetails.component';
import {ItemList} from './ItemList.component';
@NgModule({
  declarations: [
    AppComponent,ItemDetails,ItemList
  ],
  imports: [
    BrowserModule
  ],
  providers: [ItemListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
