import { Component, OnInit, Input, SimpleChange } from "@angular/core";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";
import { Settings, AppSettings } from "../../app.settings";
import { CartOverviewComponent } from "../cart-overview/cart-overview.component";
import { MenuItem } from "src/app/app.models";
import { AppService } from "src/app/app.service";

@Component({
  selector: "app-header-carousel",
  templateUrl: "./header-carousel.component.html",
  styleUrls: ["./header-carousel.component.scss"],
})
export class HeaderCarouselComponent implements OnInit {
  @Input() menuItem!: MenuItem;
  @Input("slides") slides: Array<any> = [];
  public column: number = 4;
  @Input() viewType: string = "grid";
  @Input() viewColChanged: any;
  @Input("contentOffsetToTop") contentOffsetToTop: boolean = false;
  @Input("fullscreen") fullscreen: boolean = true;
  public config: SwiperConfigInterface = {};
  public currentSlide: any;
  public settings: Settings;
  constructor(public appSettings: AppSettings, public appService: AppService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    if (this.contentOffsetToTop) {
      setTimeout(() => {
        this.settings.contentOffsetToTop = this.contentOffsetToTop;
      });
    }
  }

  ngAfterViewInit() {
    this.initCarousel();
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (this.slides.length > 0) {
      this.currentSlide = this.slides[0];
    }
    if (changes.viewColChanged) {
      this.getColumnCount(changes.viewColChanged.currentValue);
    }
  }

  public getColumnCount(value: number) {
    if (value == 25) {
      this.column = 4;
    } else if (value == 33.3) {
      this.column = 3;
    } else if (value == 50) {
      this.column = 2;
    } else {
      this.column = 1;
    }
  }
  public addToCart() {
    this.appService.addToCart(this.currentSlide, CartOverviewComponent);
  }

  public onCart() {
    if (
      this.appService.Data.cartList.find(
        (item) => item.id == this.currentSlide.id
      )
    ) {
      return true;
    }
    return false;
  }
  public initCarousel() {
    this.config = {
      slidesPerView: 1,
      spaceBetween: 0,
      keyboard: true,
      navigation: true,
      pagination: false,
      grabCursor: true,
      loop: true,
      preloadImages: false,
      lazy: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      speed: 500,
      effect: "slide",
    };
  }

  ngOnDestroy() {
    setTimeout(() => {
      this.settings.contentOffsetToTop = false;
    });
  }

  public onIndexChange(index: number) {
    this.currentSlide = this.slides[index];
  }
}
