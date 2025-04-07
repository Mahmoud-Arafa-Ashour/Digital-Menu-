import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MenuItem } from "src/app/app.models";
import { AppService } from "src/app/app.service";
import { UntypedFormGroup, UntypedFormBuilder } from "@angular/forms";
import { OffersDialogComponent } from "./offers-dialog/offers-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AuthService } from "src/app/auth.service";

@Component({
  selector: "app-offers",
  templateUrl: "./offers.component.html",
  styleUrls: ["./offers.component.scss"],
})
export class OffersComponent {
  public form!: UntypedFormGroup;
  // file: any;
  displayedColumns: string[] = ["id", "image", "name", "price", "actions"];
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
    this.getOffers();
  }



  public getOffers() {
    this.appService.getOffers().subscribe((offers: any) => {
      console.log(offers);
      this.initDataSource(offers.allOffers);
      
      this.appService.Data.categories = offers.allOffers;
    });
  }
  public initDataSource(data: any) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  public openAddOfferDialog(offer: any | null) {
    const dialogRef = this.appService.openDialog(
      OffersDialogComponent,
      offer,
      "theme-dialog"
    );
    dialogRef.afterClosed().subscribe((offer) => {
      console.log("Add", offer);

      let message = "";
      if (offer) {
        this.appService.addOffer(offer).subscribe(
          (res) => {
            console.log("Res", res);
            this.getOffers();
            message = "New Offer " + " added successfully!";
            this.snackBar.open(message, "×", {
              panelClass: "success",
              verticalPosition: "top",
              duration: 3000,
            });
          },
          (serverLoginError: any) => {
            console.log("Session expired please login again (Add)");
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
        this.paginator.lastPage();
      }
    });
  }
  public openEditOfferDialog(offer: any | null) {
    console.log(offer);

    const dialogRef = this.appService.openDialog(
      OffersDialogComponent,
      offer,
      "theme-dialog"
    );
    dialogRef.afterClosed().subscribe((item) => {
      let message = "";
      if (item) {
        console.log("Edit Offer", item);
        this.appService.editOffer(offer.id, item).subscribe(
          (res) => {
            console.log(res);
            this.getOffers();
            message = "Edit Item " + offer.name + " Edited successfully!";
            this.snackBar.open(message, "×", {
              panelClass: "success",
              verticalPosition: "top",
              duration: 3000,
            });
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
        this.paginator.lastPage();
        this.initDataSource(this.dataSource.data);
      }
    });
  }
  public remove(offer: any) {
    const index: number = this.dataSource.data.indexOf(offer);
    if (index !== -1) {
      const message = this.appService.getTranslateValue("MESSAGE.SURE_DELETE");
      let dialogRef = this.appService.openConfirmDialog("", message!);
      dialogRef.afterClosed().subscribe((dialogResult) => {
        let alarm = "";
        if (dialogResult) {
          this.appService.removeOffer(offer.id).subscribe(
            (res) => {
              console.log(res);
              this.getOffers();
              alarm = offer.name + " deleted successfully!";
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
