import { Component, OnInit , ElementRef, ViewChild, ViewEncapsulation } from "@angular/core";
import { Settings, AppSettings } from "src/app/app.settings";
import { AppService } from "src/app/app.service";
import { MenuItem } from "src/app/app.models";
import { TranslateService } from "@ngx-translate/core";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  activeSection: string = "";
  public slides = [];
  public specialMenuItems: Array<MenuItem> = [];
  public bestMenuItems: Array<MenuItem> = [];
  public todayMenu!: MenuItem;
  @ViewChild('aboutSection') aboutSection: ElementRef;
  public settings: Settings;
  HEADDER: any;
  constructor(
    public appSettings: AppSettings,
    public appService: AppService,
    private translate: TranslateService
  ) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
  }
}
