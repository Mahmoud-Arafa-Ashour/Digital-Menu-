import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/auth.service";


@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  public userImage = 'assets/images/others/admin.jpg';
  constructor(private _AuthService: AuthService) { }

  ngOnInit(): void {
  }

  callLogOut(){
    this._AuthService.logOut()
  }

}
