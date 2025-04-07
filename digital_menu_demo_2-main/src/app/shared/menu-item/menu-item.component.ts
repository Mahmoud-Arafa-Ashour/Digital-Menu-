import { Component, Input, OnInit, SimpleChange , Pipe, PipeTransform } from '@angular/core';
import { MenuItem } from 'src/app/app.models';
import { AppService } from 'src/app/app.service';
import { CartOverviewComponent } from '../cart-overview/cart-overview.component';
import { ItemDialogComponent } from './item-dialog/item-dialog.component';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})

export class MenuItemComponent implements OnInit {
  @Input() menuItem!: MenuItem;
  @Input() lazyLoad: boolean = false;
  @Input() viewType: string = "grid";
  @Input() viewColChanged: any; 
  public column:number = 4;
  constructor(public appService:AppService) { 

  }
  openDialog(menuItem: any){
    const dialogRef = this.appService.openDialog(
      ItemDialogComponent,
      menuItem,
      "theme-dialog"
    );
  }
  ngOnInit(): void {

  }
}
