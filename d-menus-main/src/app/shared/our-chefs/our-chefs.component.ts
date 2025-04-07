import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { MenuItem } from 'src/app/app.models';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-our-chefs',
  templateUrl: './our-chefs.component.html',
  styleUrls: ['./our-chefs.component.scss']
})
export class OurChefsComponent implements OnInit {
  public todayMenu!: MenuItem;
  public chefs:any[] = [];
  public config: SwiperConfigInterface = { };
  constructor(public appService:AppService) { }

  ngOnInit(): void {
    this.chefs = this.appService.getChefs();
    this.getTodayMenu();
  }

  ngAfterViewInit(){
    this.config = {
      observer: true,
      slidesPerView: 4,
      spaceBetween: 16,       
      keyboard: true,
      navigation: true,
      pagination: false,
      grabCursor: true,        
      loop: false,
      preloadImages: false,
      lazy: true,  
      breakpoints: {
        280: {
          slidesPerView: 1
        },
        600: {
          slidesPerView: 2
        },
        960: {
          slidesPerView: 3
        },
        1280: {
          slidesPerView: 4
        }
      }
    }
  }
  public getTodayMenu() {
    this.appService.getMenuItemById(23).subscribe((data) => {
      this.todayMenu = data;
    });
  }
}
