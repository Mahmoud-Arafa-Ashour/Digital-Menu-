import { Component, Inject } from "@angular/core";
import {MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AppService } from "src/app/app.service";
import { MenuItem } from "src/app/app.models";

@Component({
  selector: "app-item-dialog",
  templateUrl: "./item-dialog.component.html",
  styleUrls: ["./item-dialog.component.scss"],
})
export class ItemDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ItemDialogComponent>,

    @Inject(MAT_DIALOG_DATA) public menuItem: MenuItem,
    public appService: AppService
  ) {}
  ngOnInit(): void {}
  onClose() {
    this.dialogRef.close();
  }
}
