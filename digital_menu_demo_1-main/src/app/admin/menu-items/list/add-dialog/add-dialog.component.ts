import {
  Component,
  EventEmitter,
  Inject,
  OnInit,
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
  selector: "app-add-dialog",
  templateUrl: "./add-dialog.component.html",
  styleUrls: ["./add-dialog.component.scss"],
})
export class AddDialogComponent implements OnInit {
  public form!: UntypedFormGroup;
  private sub: any;
  public id: any;
  public showImage: boolean = false;
  @Output() onFileChange: EventEmitter<any> = new EventEmitter();
  @Output() onFileUploadClick: EventEmitter<any> = new EventEmitter();
  // file: any;
  // fileSize: any;
  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public menuItem: MenuItem,
    public appService: AppService,
    public formBuilder: UntypedFormBuilder,
   
    private activatedRoute: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      product_name: [
        null,
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      product_description:'',
      product_price: [null, Validators.required],
      image: null,
      categoryId: [null, Validators.required],
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
        product_name: this.menuItem.name,
        product_description: this.menuItem.description,
        product_price: this.menuItem.price,
        image: this.menuItem.image,
        categoryId: this.menuItem.categoryId,
      });
    }
    this.getCategories();
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
  public getCategories() {
    this.appService.getCategories().subscribe((categories) => {
      this.appService.Data.categories = categories.allCategories;
    });
  }

  public onSubmit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value)
      console.log(this.form.value)
    }
  }
}
