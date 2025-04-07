import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import jwtDecode from "jwt-decode";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private url = "https://menu-backend.d-menus.com";
  userData = new BehaviorSubject(null);
  constructor(private _HttpClient: HttpClient,private _Router:Router) {
    if(localStorage.getItem('userToken') !=null){
      this.setUserData();
    }else{
      this._Router.navigate(['/login'])
    }
  }

  setUserData(): void {
    let encodedToken = JSON.stringify(localStorage.getItem("userToken"));
    let decodedToken = jwtDecode(<string>encodedToken);
    this.userData.next(decodedToken)
  }
  login(userData: object): Observable<any> {
    return this._HttpClient.post(this.url + "/signin", userData);
  }

  logOut():void{
    localStorage.removeItem("userToken")
    this._Router.navigate(['/login'])
    this.userData.next(null)
  }

}
