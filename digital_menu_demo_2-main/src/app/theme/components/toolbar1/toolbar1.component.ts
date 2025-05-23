import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service'; 
import { CartOverviewComponent } from 'src/app/shared/cart-overview/cart-overview.component'; 

@Component({
  selector: 'app-toolbar1',
  styleUrls: ["./toolbar1.component.scss"],
  templateUrl: './toolbar1.component.html' 
})
export class Toolbar1Component implements OnInit {
  @Output() onMenuIconClick: EventEmitter<any> = new EventEmitter<any>(); 
  constructor(public appService:AppService) { }

  ngOnInit() { }

  public sidenavToggle(){
    this.onMenuIconClick.emit();
  }
  public openCart(){ 
    this.appService.openCart(CartOverviewComponent)
  }

}