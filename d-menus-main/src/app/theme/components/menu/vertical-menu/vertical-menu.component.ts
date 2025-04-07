import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menu } from '../menu.model';

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.scss'],
  providers: [ MenuService ]
})
export class VerticalMenuComponent implements OnInit {
  @Input('menuParentId') menuParentId = 0;
  public menuItems: Array<Menu> = [];
  activeSection: string = "";
  constructor(public menuService:MenuService) { 
    this.activeSection = "1001"; // Initialize activeSection with default section ID
    if (!this.menuParentId) {
      this.menuParentId = 1001; // Set default value if menuParentId is not provided
    }
  }

  ngOnInit() {
    this.menuItems = this.menuService.getVerticalMenuItems();
    this.menuItems = this.menuItems.filter(item => item.parentId == this.menuParentId);
  }

  onClick(menuId:number){
    console.log(menuId)
    this.menuService.toggleMenuItem(menuId);
    this.menuService.closeAllSubMenus();   
  }
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      this.setActiveSection(sectionId);
    }
  }
  
  setActiveSection(sectionId: string) {
    this.activeSection = sectionId;
  }
}
