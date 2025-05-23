import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MenuItem } from "src/app/app.models";
import { AppService } from "src/app/app.service";
import { UntypedFormGroup, UntypedFormBuilder } from "@angular/forms";
import { AddDialogComponent } from "./add-dialog/add-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AuthService } from "src/app/auth.service";
@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  public form!: UntypedFormGroup;
  // file: any;
  displayedColumns: string[] = [
    "id",
    "image",
    "categoryId",
    "name",
    "price",
    "actions",
  ];
  dataSource!: MatTableDataSource<MenuItem>;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  constructor(
    public appService: AppService,
    public formBuilder: UntypedFormBuilder,
    public snackBar: MatSnackBar,
    private _AuthService: AuthService
  ) {}
  ngOnInit(): void {
    this.getMenuItems();
  }
  getAllCategories() {
    this.appService.getCategories().subscribe(
      (categories: any) => {
        this.appService.Data.categories = categories.allCategories;
      },
      (err) => {
        console.log("error", err);
      }
    );
  }

  public getMenuItems() {
    this.appService.getMenuItems().subscribe((menuItems: any) => {
      this.initDataSource(menuItems.allProducts);
      this.appService.Data.categories = menuItems.allProducts;
    });
  }
  public initDataSource(data: any) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  public openAddItemDialog(menuItem: any | null) {
    const dialogRef = this.appService.openDialog(
      AddDialogComponent,
      menuItem,
      "theme-dialog"
    );
    dialogRef.afterClosed().subscribe((item) => {
      console.log("Add", item);

      let message = "";
      if (item) {
        this.appService.addItem(item).subscribe(
          (res) => {
            message = "New Item " + item.product_name + " added successfully!";
            this.snackBar.open(message, "×", {
              panelClass: "success",
              verticalPosition: "top",
              duration: 3000,
            });
            console.log("Res", res);
            this.getMenuItems();
          },
          (serverLoginError:any) => {
            console.log(serverLoginError);
            // if (serverLoginError.status === 401) {
            //   this._AuthService.logOut();
            //   message = "Session expired please login again";
            //   this.snackBar.open(message, "×", {
            //     panelClass: "red",
            //     verticalPosition: "top",
            //     duration: 3000,
            //   });
            // }
          }
        );
        this.paginator.lastPage();
      }
    });
  }
  public openEditItemDialog(menuItem: any | null) {
    console.log(menuItem);

    const dialogRef = this.appService.openDialog(
      AddDialogComponent,
      menuItem,
      "theme-dialog"
    );
    dialogRef.afterClosed().subscribe((item) => {
      let message = "";
      if (item) {
        console.log("Edit item with File", item);
        this.appService.editItem(menuItem.id, item).subscribe(
          (res) => {
            console.log(res);
           
            message = "Edit Item " + menuItem.name + " Edited successfully!";
            this.snackBar.open(message, "×", {
              panelClass: "success",
              verticalPosition: "top",
              duration: 3000,
            });
            this.getMenuItems();
          },
          (serverLoginError: any) => {
            console.log("Session expired please login again (Edit)");
            if (serverLoginError.status === 401) {
              this._AuthService.logOut();
              message = "Session expired please login again";
              this.snackBar.open(message, "×", {
                panelClass: "red",
                verticalPosition: "top",
                duration: 3000,
              });
            }
          }
        );
      }
      this.paginator.lastPage();
      this.initDataSource(this.dataSource.data);
      // }
    });
  }
  public remove(menuItem: any) {
    const index: number = this.dataSource.data.indexOf(menuItem);
    if (index !== -1) {
      const message = this.appService.getTranslateValue("MESSAGE.SURE_DELETE");
      let dialogRef = this.appService.openConfirmDialog("", message!);
      dialogRef.afterClosed().subscribe((dialogResult) => {
        let alarm = "";
        if (dialogResult) {
          this.appService.removeItem(menuItem.id).subscribe(
            (res) => {
              console.log(res);
              this.getMenuItems();
              alarm = menuItem.name + " deleted successfully!";
              this.snackBar.open(alarm, "×", {
                panelClass: "success",
                verticalPosition: "top",
                duration: 3000,
              });
            },
            (serverLoginError: any) => {
              console.log("Session expired please login again (Delete)");
              if (serverLoginError.status === 401) {
                this._AuthService.logOut();
                alarm = "Session expired please login again";
                this.snackBar.open(alarm, "×", {
                  panelClass: "red",
                  verticalPosition: "top",
                  duration: 3000,
                });
              }
            }
          );
          this.initDataSource(this.dataSource.data);
        }
      });
    }
  }
}
