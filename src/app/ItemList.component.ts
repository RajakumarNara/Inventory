import {Component} from '@angular/core';
import {ItemListService} from './item-list.service';

@Component({
    selector:'item-list',
    template:`<h3>Item List</h3>
            <ul *ngFor="let item of _itemList">
            <li>{{item.ItemName}}</li>
            </ul>`
})
export class ItemList{
    public _itemList=[];
    constructor(private _itmLst:ItemListService){}

    ngOnInit()
    {
      this._itemList=this._itmLst.getItems();
    }
}