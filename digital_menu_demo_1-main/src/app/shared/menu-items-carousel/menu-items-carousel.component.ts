import { Component, Input, OnInit } from "@angular/core";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";
import { MenuItem } from "src/app/app.models";

@Component({
  selector: "app-menu-items-carousel",
  templateUrl: "./menu-items-carousel.component.html",
  styleUrls: ["./menu-items-carousel.component.scss"],
})
export class MenuItemsCarouselComponent implements OnInit {
  @Input("menuItems") menuItems: Array<MenuItem> = [];
  public config: SwiperConfigInterface = {};

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.config = {
      observer: true,
      slidesPerView: 4,
      spaceBetween: 16,
      keyboard: true,
      navigation: { nextEl: ".prop-next", prevEl: ".prop-prev" },
      pagination: true,
      grabCursor: true,
      loop: false,
      preloadImages: true,
      lazy: true,
      breakpoints: {
        200: {
          slidesPerView: 1.5,
        },
        600: {
          slidesPerView: 3,
        },
        960: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 4,
        },
      },
    };
  }
}
