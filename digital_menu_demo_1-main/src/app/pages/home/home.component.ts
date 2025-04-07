import {
  Component,
  HostListener,
  Inject,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Settings, AppSettings } from "src/app/app.settings";
import { AppService } from "src/app/app.service";
import { MenuItem } from "src/app/app.models";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public categories: any[] = [];
  public slides: any = [];
  public product: any = [];
  dataSource!: MatTableDataSource<MenuItem>;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  public fixed: boolean = false;

  public settings: Settings;
  router: any;
  menuItem: any;
  constructor(
    @Inject(DOCUMENT) private doc: Document,
    public appSettings: AppSettings,
    public appService: AppService
  ) {
    this.settings = this.appSettings.settings;
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let num = this.doc.body.scrollTop;
    if (num > 50) {
      this.fixed = true;
    } else if (this.fixed && num < 5) {
      this.fixed = false;
    }
  }
  ngOnInit(): void {
    this.getMenuItems();
    this.getOffers();
  }

  public getOffers() {
    this.appService.getOffers().subscribe((offers: any) => {
      console.log(offers);
      this.initDataSource(offers.allOffers);
      this.slides = offers.allOffers;
    });
  }

  public getMenuItems() {
    this.appService.getMenuItemsForUser().subscribe(
      (menuItems: any) => {
        this.product = menuItems.allProducts;
        console.log(this.product);

        if (document.getElementById("preloader")) {
          document.getElementById("preloader")?.classList.add("hide");
        }
        console.log(this.product);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  public initDataSource(data: any) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth"})
    }
  }

}
