import {
  Component,
  Inject,
  OnInit,
  ViewChild,
  ChangeDetectionStrategy,
  ChangeDetectorRef
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
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    public appService: AppService,

    private cdr: ChangeDetectorRef
  ) {
    this.settings = this.appSettings.settings;
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
      this.cdr.detectChanges();
    });
  }

  public getMenuItems() {
    this.appService.getMenuItemsForUser().subscribe(
      (menuItems: any) => {
        this.product = menuItems.allProducts;
        if (document.getElementById("preloader")) {
          document.getElementById("preloader")?.classList.add("hide");
        }
        this.cdr.detectChanges();
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
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  mapStyles: any = [
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [
        {
          saturation: 36,
        },
        {
          color: "#000000",
        },
        {
          lightness: 40,
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "on",
        },
        {
          color: "#000000",
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 17,
        },
        {
          weight: 1.2,
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8b9198",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#323336",
        },
      ],
    },
    {
      featureType: "landscape.man_made",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#414954",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 21,
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#2e2f31",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#7a7c80",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#242427",
        },
        {
          lightness: 17,
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#202022",
        },
        {
          lightness: 29,
        },
        {
          weight: 0.2,
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 18,
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#393a3f",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#202022",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#393a3f",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#202022",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 19,
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 17,
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#202124",
        },
      ],
    },
  ];

}

