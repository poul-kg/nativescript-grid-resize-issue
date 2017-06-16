import {Component, OnInit} from '@angular/core';

import {Item} from './item';
import {ItemService} from './item.service';

@Component({
    selector: 'ns-items',
    moduleId: module.id,
    templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
    items: Item[];
    id = 'neonbot';
    isPreview = true;
    // Simulate array of messages, just to make 2 list items
    messages = [
        'one',
        'two'
    ];

    constructor(private itemService: ItemService) {
    }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    onTap(args) {
        console.log('ontap');
        this.isPreview = !this.isPreview;
    }

    templateSelector(msg: any, index: number, items: any) {
        return 'Grid';
    }
}
