import {Component} from '@angular/core';
import {ItemListService} from './item-list.service';

@Component({
    selector:'item-details',
    template:`<h3>Item List</h3>
            <ul *ngFor="let item of _itemDetails">
            <li>{{item.ItemName}}</li>
            </ul>`
})
export class ItemDetails{
    public _itemDetails=[];
    constructor(private _itmDtl:ItemListService){}

    ngOnInit()
    {
      this._itemDetails=this._itmDtl.getItems();
    }
}