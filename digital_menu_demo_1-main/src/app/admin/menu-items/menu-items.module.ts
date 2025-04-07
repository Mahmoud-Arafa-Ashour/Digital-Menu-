import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { CategoriesComponent } from "./categories/categories.component";
import { ListComponent } from "./list/list.component";
import { CategoryDialogComponent } from "./categories/category-dialog/category-dialog.component";
import { AddDialogComponent } from './list/add-dialog/add-dialog.component';
import { OffersComponent } from './offers/offers.component';
import { OffersDialogComponent } from './offers/offers-dialog/offers-dialog.component';

export const routes: Routes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  {
    path: "categories",
    component: CategoriesComponent,
    data: { breadcrumb: "Categories" },
  },
  {
    path: "list",
    component: ListComponent,
    data: { breadcrumb: "Menu Items" },
  },

  {
    path: "offers",
    component: OffersComponent,
    data: { breadcrumb: "Offers" },
  },

];

@NgModule({
  declarations: [
    CategoriesComponent,
    ListComponent,
    CategoryDialogComponent,
    AddDialogComponent,
    OffersComponent,
    OffersDialogComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class MenuItemsModule {}
