import {
  Component,
  OnInit,
  Input,
  ViewChildren,
  QueryList,
  Directive,
  ElementRef,
  HostListener,
  Output,
  EventEmitter,
} from "@angular/core";

import { MenuService } from "../menu.service";
import { Menu } from "../menu.model";
import { MatMenuTrigger } from "@angular/material/menu";

@Component({
  selector: "app-horizontal-menu",
  templateUrl: "./horizontal-menu.component.html",
  styleUrls: ["./horizontal-menu.component.scss"],
  providers: [MenuService],
})
export class HorizontalMenuComponent implements OnInit {
  @Output() visible = new EventEmitter<void>();

  @Output() active = new EventEmitter<void>();
  private observer: IntersectionObserver;
  activeSection: string = "";
  @Input("menuParentId") menuParentId = 0;
  public menuItems: Array<Menu> = [];
  @ViewChildren(MatMenuTrigger) triggers!: QueryList<MatMenuTrigger>;

  constructor(public menuService: MenuService, private el: ElementRef) {
    this.activeSection = "1001"; // Initialize activeSection with default section ID
    if (!this.menuParentId) {
      this.menuParentId = 1001; // Set default value if menuParentId is not provided
    }
  }

  ngOnInit() {
    this.menuItems = this.menuService.getHorizontalMenuItems();
    this.menuItems = this.menuItems.filter(
      (item) => item.parentId == this.menuParentId
    );
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.visible.emit();
        }
      },
      { threshold: 0.5 } // Adjust as necessary
    );
    this.observer.observe(this.el.nativeElement);
  }

  public closeOthers(trigger: MatMenuTrigger) {
    const currentIndex: number = this.triggers
      .toArray()
      .findIndex((t) => t == trigger);
    this.triggers.forEach((menu, index) => {
      if (index != currentIndex) {
        menu.closeMenu();
      }
    });
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
