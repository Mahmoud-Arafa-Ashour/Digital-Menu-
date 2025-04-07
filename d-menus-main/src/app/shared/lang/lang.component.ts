import { TranslateService } from "@ngx-translate/core";
import { Component, OnInit } from "@angular/core";

import { AppSettings, Settings } from "src/app/app.settings";
@Component({
  selector: "app-lang",
  templateUrl: "./lang.component.html",
  styleUrls: ["./lang.component.scss"],
})
export class LangComponent implements OnInit {
  selectedLanguage = "en";
  public settings: Settings;

  constructor(
    private translate: TranslateService,
    public appSettings: AppSettings
  ) {
    this.settings = this.appSettings.settings;
    this.translate.setDefaultLang("en");
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|ar/) ? browserLang : "en");
    this.appSettings.setRtl(this.selectedLanguage === "ar");
  }
  ngOnInit() {}
  public changeTheme(theme: string) {
    this.settings.theme = theme;
  }
  switchLanguage(language: string) {
    this.translate.use(language);
    this.selectedLanguage = language;
    this.appSettings.setRtl(language === "ar");
  }
}
