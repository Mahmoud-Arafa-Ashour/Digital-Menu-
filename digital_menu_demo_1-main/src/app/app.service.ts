import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DatePipe } from "@angular/common";
import { Observable } from "rxjs";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";
import { TranslateService } from "@ngx-translate/core";
import { MenuItem, Order, Category } from "src/app/app.models";
import { AppSettings } from "src/app/app.settings";
import {
  ConfirmDialogComponent,
  ConfirmDialogModel,
} from "./shared/confirm-dialog/confirm-dialog.component";
import { AlertDialogComponent } from "./shared/alert-dialog/alert-dialog.component";
export class Data {
  constructor(
    public categories: Category[],
    public cartList: MenuItem[],
    public orderList: Order[],
    public favorites: MenuItem[],
    public totalPrice: number,
    public totalCartCount: number
  ) {}
}
@Injectable({
  providedIn: "root",
})
export class AppService {
  convertImgToBase64(medium: string, arg1: (dataUrl: string) => void) {
    throw new Error("Method not implemented.");
  }
  public Data = new Data(
    [], // categories
    [], // cartList
    [], // orderList
    [], // favorites
    0, // totalPrice
    0 //totalCartCount
  );
  public url = "https://menu-backend.d-menus.com";
  constructor(
    public http: HttpClient,
    private datePipe: DatePipe,
    private bottomSheet: MatBottomSheet,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    public appSettings: AppSettings,
    public translateService: TranslateService
  ) {}
  public getMenuItems(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.url + "/product");
  }
  public getMenuItemsForUser(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.url + "/product/cat-items");
  }
  public getMenuItemById(id: number): Observable<MenuItem> {
    return this.http.get<MenuItem>(this.url + "menu-item-" + id + ".json");
  }
  public getCategories(): Observable<any> {
    let token = localStorage.getItem("userToken");
    let headers = {
      "x-access-token": JSON.parse(token),
    };
    return this.http.get<Category[]>(this.url + "/category", {
      headers: headers,
    });
  }
  public addCatogery(obj: any): Observable<any> {
    let token = localStorage.getItem("userToken");
    let headers = {
      "x-access-token": JSON.parse(token),
    };
    return this.http.post(`${this.url}/category/add-category`, obj, {
      headers: headers,
    });
  }
  public addItem(obj: any): Observable<any> {
    let token = localStorage.getItem("userToken");
    let headers = {
      "x-access-token": JSON.parse(token),
    };
    return this.http.post(`${this.url}/product/add-product-v2`, obj, {
      headers: headers,
    });
  }
  public editItem(id: any, obj: any): Observable<any> {
    let token = localStorage.getItem("userToken");
    let headers = {
      "x-access-token": JSON.parse(token),
    };
    return this.http.patch(`${this.url}/product/edit-product-v2/${id}`, obj, {
      headers: headers,
    });
  }
  public removeItem(id: any): Observable<any> {
    let token = localStorage.getItem("userToken");
    let headers = {
      "x-access-token": JSON.parse(token),
    };
    return this.http.delete(`${this.url}/product/delete-product/${id}`, {
      headers,
    });
  }
  public removeCatogery(id: any): Observable<any> {
    let token = localStorage.getItem("userToken");
    let headers = {
      "x-access-token": JSON.parse(token),
    };
    return this.http.delete(`${this.url}/category/delete-category/${id}`, {
      headers,
    });
  }
  public editCatogery(id: any, obj: any): Observable<any> {
    let token = localStorage.getItem("userToken");
    let headers = {
      "x-access-token": JSON.parse(token),
    };
    return this.http.patch(`${this.url}/category/edit-category/${id}`, obj, {
      headers,
    });
  }
  public getOffers() {
    return this.http.get<MenuItem[]>(this.url + "/offer");
  }
  public addOffer(obj: any) {
    let token = localStorage.getItem("userToken");
    let headers = {
      "x-access-token": JSON.parse(token),
    };
    return this.http.post(`${this.url}/offer/add-offer-v2`, obj, {
      headers: headers,
    });
  }
  public editOffer(id: any, obj: any): Observable<any> {
    let token = localStorage.getItem("userToken");
    let headers = {
      "x-access-token": JSON.parse(token),
    };
    return this.http.patch(`${this.url}/offer/edit-offer-v2/${id}`, obj, {
      headers: headers,
    });
  }
  public removeOffer(id: any) {
    let token = localStorage.getItem("userToken");
    let headers = {
      "x-access-token": JSON.parse(token),
    };
    return this.http.delete(`${this.url}/offer/delete-offer/${id}`, {
      headers,
    });
  }
  public getGUID() {
    let guid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
      .replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      })
      .toLowerCase();
    return guid;
  }
  public openDialog(component: any, data: any, panelClass: any) {
    return this.dialog.open(component, {
      data: data,
      panelClass: panelClass,
      autoFocus: false,
      direction: this.appSettings.settings.rtl ? "rtl" : "ltr",
    });
  }
  public openConfirmDialog(title: string, message: string) {
    const dialogData = new ConfirmDialogModel(title, message);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData,
    });
    return dialogRef;
  }
  public openAlertDialog(message: string) {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: message,
    });
    return dialogRef;
  }
  public getTranslateValue(key: string, param: string = "") {
    let value = null;
    this.translateService
      .get(key, { param: param })
      .subscribe((res: string) => {
        value = res;
      });
    return value;
  }
  public addToCart(menuItem: MenuItem, component: any) {
    if (!this.Data.cartList.find((item) => item.id == menuItem.id)) {
      menuItem.cartCount = menuItem.cartCount ? menuItem.cartCount : 1;
      this.Data.cartList.push(menuItem);
      this.calculateCartTotal();
      if (component) {
        this.openCart(component);
      } else {
        this.snackBar.open(
          'The menu item "' +
            menuItem.category_name +
            '" has been added to cart.',
          "×",
          {
            verticalPosition: "top",
            duration: 3000,
            direction: this.appSettings.settings.rtl ? "rtl" : "ltr",
            panelClass: ["success"],
          }
        );
      }
    }
  }
  public openCart(component: any) {
    this.bottomSheet
      .open(component, {
        direction: this.appSettings.settings.rtl ? "rtl" : "ltr",
      })
      .afterDismissed()
      .subscribe((isRedirect) => {
        if (isRedirect) {
          window.scrollTo(0, 0);
        }
      });
  }
  public calculateCartTotal() {
    this.Data.totalPrice = 0;
    this.Data.totalCartCount = 0;
    this.Data.cartList.forEach((item) => {
      let price = 0;
      if (item) {
        price = item.price;
      } else {
        price = item.price;
      }
      this.Data.totalPrice = this.Data.totalPrice + price * item.cartCount;
      this.Data.totalCartCount = this.Data.totalCartCount + item.cartCount;
    });
  }
  public filterData(
    data: any,
    category_name: string,
    sort?: string,
    page?: number,
    perPage?: number
  ) {
    if (category_name) {
      data = data.filter((item: any) => item.category_name == category_name);
    }

    this.sortData(sort, data);
    return this.paginator(data, page, perPage);
  }
  public getChefs(){
    return [ 
          { 
            id: 1,
            fullName: 'Andy Warhol',
            position: 'Head of Chef',
            desc: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus.',            
            organization: 'Restaurant',
            email: 'andy.w@mox.com',
            phone: '(212) 457-2308',
            social: {
              facebook: 'andy.warhol',
              twitter: 'andy.warhol',
              linkedin: 'andy.warhol',
              instagram: 'andy.warhol',
              website: 'https://andy.warhol.com'
            },
            ratingsCount: 4,
            ratingsValue: 400,
            image: 'assets/images/chefs/1.jpg' 
        },        
        { 
            id: 2,
            fullName: 'Lusia Manuel',
            position: 'Assistant Chef',
            desc: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus.',            
            organization: 'Restaurant',
            email: 'lusia.m@mox.com',
            phone: '(224) 267-1346',
            social: {
              facebook: 'lusia.manuel',
              twitter: 'lusia.manuel',
              linkedin: 'lusia.manuel',
              instagram: 'lusia.manuel',
              website: 'https://lusia.manuel.com'
            },
            ratingsCount: 6,
            ratingsValue: 480,
            image: 'assets/images/chefs/2.jpg' 
        },
        { 
            id: 3,
            fullName: 'Michael Blair',
            position: 'Intern Chef',
            desc: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus.',            
            organization: 'Restaurant',
            email: 'michael.b@mox.com',
            phone: '(267) 388-1637',
            social: {
              facebook: 'michael.blair',
              twitter: 'michael.blair',
              linkedin: 'michael.blair',
              instagram: 'michael.blair',
              website: 'https://michael.blair.com'
            },
            ratingsCount: 4,
            ratingsValue: 400,
            image: 'assets/images/chefs/3.jpg' 
        },        
        { 
            id: 4,
            fullName: 'Tereza Stiles',
            position: 'Assistant Chef',
            desc: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus.',            
            organization: 'Restaurant',
            email: 'tereza.s@mox.com',
            phone: '(214) 617-2614',
            social: {
              facebook: 'tereza.stiles',
              twitter: 'tereza.stiles',
              linkedin: 'tereza.stiles',
              instagram: 'tereza.stiles',
              website: 'https://tereza.stiles.com'
            },
            ratingsCount: 4,
            ratingsValue: 380,
            image: 'assets/images/chefs/4.jpg' 
        }, 
        { 
            id: 5,
            fullName: 'Michelle Ormond',
            position: 'Head of Chef',
            desc: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus.',            
            organization: 'Restaurant',
            email: 'michelle.o@mox.com',
            phone: '(267) 388-1637',
            social: {
              facebook: 'michelle.ormond',
              twitter: 'michelle.ormond',
              linkedin: 'michelle.ormond',
              instagram: 'michelle.ormond',
              website: 'https://michelle.ormond.com'
            },
            ratingsCount: 6,
            ratingsValue: 480, 
            image: 'assets/images/chefs/5.jpg'  
        }
    ];
  } 

  public getAwards(){
    return [  
        { name: 'award-1', image: 'assets/images/awards/1.png' },
        { name: 'award-2', image: 'assets/images/awards/2.png' },
        { name: 'award-3', image: 'assets/images/awards/3.png' },
        { name: 'award-4', image: 'assets/images/awards/4.png' },
        { name: 'award-5', image: 'assets/images/awards/5.png' },
        { name: 'award-6', image: 'assets/images/awards/6.png' },
        { name: 'award-7', image: 'assets/images/awards/7.png' } 
    ];
  }
  public sortData(sort?: string, data?: any) {
    if (sort) {
      switch (sort) {
        case "Popular":
          data = data.sort((a: any, b: any) => {
            if (
              a.ratingsValue / a.ratingsCount <
              b.ratingsValue / b.ratingsCount
            ) {
              return 1;
            }
            if (
              a.ratingsValue / a.ratingsCount >
              b.ratingsValue / b.ratingsCount
            ) {
              return -1;
            }
            return 0;
          });
          break;
        case "Price (Low to High)":
          data = data.sort((a: any, b: any) => {
            if (a.price > b.price) {
              return 1;
            }
            if (a.price < b.price) {
              return -1;
            }
            return 0;
          });
          break;
        case "Price (High to Low)":
          data = data.sort((a: any, b: any) => {
            if (a.price < b.price) {
              return 1;
            }
            if (a.price > b.price) {
              return -1;
            }
            return 0;
          });
          break;
        default:
          break;
      }
    }
    return data;
  }
  public paginator(items: any, page?: any, perPage?: any) {
    var page = page || 1,
      perPage = perPage || 4,
      offset = (page - 1) * perPage,
      paginatedItems = items.slice(offset).slice(0, perPage),
      totalPages = Math.ceil(items.length / perPage);
    return {
      data: paginatedItems,
      pagination: {
        page: page,
        perPage: perPage,
        prePage: page - 1 ? page - 1 : null,
        nextPage: totalPages > page ? page + 1 : null,
        total: items.length,
        totalPages: totalPages,
      },
    };
  }
  public shuffleArray(array: any) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
}