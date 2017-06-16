"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var ItemsComponent = (function () {
    function ItemsComponent(itemService) {
        this.itemService = itemService;
        this.id = 'neonbot';
        this.isPreview = true;
        // Simulate array of messages, just to make 2 list items
        this.messages = [
            'one',
            'two'
        ];
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
    };
    ItemsComponent.prototype.onTap = function (args) {
        console.log('ontap');
        this.isPreview = !this.isPreview;
    };
    ItemsComponent.prototype.templateSelector = function (msg, index, items) {
        return 'Grid';
    };
    return ItemsComponent;
}());
ItemsComponent = __decorate([
    core_1.Component({
        selector: 'ns-items',
        moduleId: module.id,
        templateUrl: './items.component.html',
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService])
], ItemsComponent);
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdEO0FBR2hELCtDQUEyQztBQU8zQyxJQUFhLGNBQWM7SUFVdkIsd0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBUjVDLE9BQUUsR0FBRyxTQUFTLENBQUM7UUFDZixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLHdEQUF3RDtRQUN4RCxhQUFRLEdBQUc7WUFDUCxLQUFLO1lBQ0wsS0FBSztTQUNSLENBQUM7SUFHRixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsOEJBQUssR0FBTCxVQUFNLElBQUk7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFFRCx5Q0FBZ0IsR0FBaEIsVUFBaUIsR0FBUSxFQUFFLEtBQWEsRUFBRSxLQUFVO1FBQ2hELE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQztBQXpCWSxjQUFjO0lBTDFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtLQUN4QyxDQUFDO3FDQVdtQywwQkFBVztHQVZuQyxjQUFjLENBeUIxQjtBQXpCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0l0ZW19IGZyb20gJy4vaXRlbSc7XG5pbXBvcnQge0l0ZW1TZXJ2aWNlfSBmcm9tICcuL2l0ZW0uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbnMtaXRlbXMnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2l0ZW1zLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW1zOiBJdGVtW107XG4gICAgaWQgPSAnbmVvbmJvdCc7XG4gICAgaXNQcmV2aWV3ID0gdHJ1ZTtcbiAgICAvLyBTaW11bGF0ZSBhcnJheSBvZiBtZXNzYWdlcywganVzdCB0byBtYWtlIDIgbGlzdCBpdGVtc1xuICAgIG1lc3NhZ2VzID0gW1xuICAgICAgICAnb25lJyxcbiAgICAgICAgJ3R3bydcbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbXMoKTtcbiAgICB9XG5cbiAgICBvblRhcChhcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbnRhcCcpO1xuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICF0aGlzLmlzUHJldmlldztcbiAgICB9XG5cbiAgICB0ZW1wbGF0ZVNlbGVjdG9yKG1zZzogYW55LCBpbmRleDogbnVtYmVyLCBpdGVtczogYW55KSB7XG4gICAgICAgIHJldHVybiAnR3JpZCc7XG4gICAgfVxufVxuIl19