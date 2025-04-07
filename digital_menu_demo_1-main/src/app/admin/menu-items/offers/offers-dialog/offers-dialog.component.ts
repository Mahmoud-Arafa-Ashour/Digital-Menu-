import {
  Component,
  EventEmitter,
  Inject,
  Output,
  PLATFORM_ID,
} from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AppService } from "src/app/app.service";
import { MenuItem } from "src/app/app.models";
import { ActivatedRoute } from "@angular/router";
import { isPlatformBrowser } from "@angular/common";
@Component({
  selector: "app-offers-dialog",
  templateUrl: "./offers-dialog.component.html",
  styleUrls: ["./offers-dialog.component.scss"],
})
export class OffersDialogComponent {
  public form!: UntypedFormGroup;
  private sub: any;
  public id: any;
  public showImage: boolean = false;
  @Output() onFileChange: EventEmitter<any> = new EventEmitter();
  @Output() onFileUploadClick: EventEmitter<any> = new EventEmitter();
  constructor(
    public dialogRef: MatDialogRef<OffersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public menuItem: MenuItem,
    public appService: AppService,
    public formBuilder: UntypedFormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object,
    private activatedRoute: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      offer_name:"",
      offer_description: "",
      price: 0,
      image: [null ,Validators.required],
    });
    this.sub = this.activatedRoute.params.subscribe((params) => {
      if (params["id"]) {
        this.id = params["id"];
        this.getMenuItemById();
      } else {
        this.showImage = true;
      }
    });
    if (this.menuItem) {
      this.form.patchValue({
        offer_name: this.menuItem.name,
        offer_description: this.menuItem.description,
        price: this.menuItem.price,
        image: this.menuItem.image,
      });
 
    }
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  public getMenuItemById() {
    this.appService.getMenuItemById(this.id).subscribe((menuItem: MenuItem) => {
      this.form.patchValue(menuItem);
      if (isPlatformBrowser(this.platformId)) {
        this.appService.convertImgToBase64(
          menuItem.image.medium,
          (dataUrl: string) => {
            this.showImage = true;
            this.form.controls.image.patchValue(dataUrl.toString());
          }
        );
      }
    });
  }

  public fileUploadClick() {
    this.onFileUploadClick.emit();
  }
  public fileChange(files: any) {
    console.log(files);
    if (files.length) {
      this.form.controls.image.patchValue(files[0].content);
    } else {
      this.form.controls.image.patchValue(null);
    }
  }

  public onSubmit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value)
      console.log(this.form.value);
    }
  }
}
