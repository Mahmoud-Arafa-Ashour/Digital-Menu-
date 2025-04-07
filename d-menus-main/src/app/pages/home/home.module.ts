import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { HomeComponent } from "./home.component";
import { AboutComponent } from "../about/about.component";

export const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
];

@NgModule({
  declarations: [HomeComponent, AboutComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class HomeModule {}
