import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { Menu } from "./menu.model";
import { verticalMenuItems, horizontalMenuItems } from "./menu";

@Injectable()
export class MenuService {
  constructor(private location: Location, private router: Router) {}

  public getVerticalMenuItems(): Array<Menu> {
    return verticalMenuItems;
  }

  public getHorizontalMenuItems(): Array<Menu> {
    return horizontalMenuItems;
  }

  public toggleMenuItem(menuId: number) {
    let menuItem = document.getElementById("menu-item-" + menuId);
    let subMenu = document.getElementById("sub-menu-" + menuId);
    if (subMenu) {
      if (subMenu.classList.contains("show")) {
        subMenu.classList.remove("show");
        menuItem?.classList.remove("expanded");
      } else {
        subMenu.classList.add("show");
        menuItem?.classList.add("expanded");
      }
    }
  }

  public closeOtherSubMenus(menu: Array<Menu>, menuId: number) {
    let currentMenuItem = menu.filter((item) => item.id == menuId)[0];
    menu.forEach((item) => {
      if (
        (item.id != menuId && item.parentId == currentMenuItem.parentId) ||
        (currentMenuItem.parentId == 0 && item.id != menuId)
      ) {
        let subMenu = document.getElementById("sub-menu-" + item.id);
        let menuItem = document.getElementById("menu-item-" + item.id);
        if (subMenu) {
          if (subMenu.classList.contains("show")) {
            subMenu.classList.remove("show");
            menuItem?.classList.remove("expanded");
          }
        }
      }
    });
  }

  public closeAllSubMenus() {
    verticalMenuItems.forEach((item) => {
      let subMenu = document.getElementById("sub-menu-" + item.id);
      let menuItem = document.getElementById("menu-item-" + item.id);
      if (subMenu) {
        if (subMenu.classList.contains("show")) {
          subMenu.classList.remove("show");
          menuItem?.classList.remove("expanded");
        }
      }
    });
  }
}
