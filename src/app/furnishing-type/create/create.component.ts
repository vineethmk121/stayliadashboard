import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FurnishingTypeService } from '../furnishing-type.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import  Swal  from 'sweetalert2';
import { LoaderService } from 'src/app/services/loader.service';
@Component({
  selector: 'furnishing-type-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  furnishingForm! : FormGroup;
  constructor(private service:FurnishingTypeService, private fb:FormBuilder, private spinner:LoaderService,private dialogRef:MatDialogRef<CreateComponent>) { }
      
  ngOnInit(): void {
    this.furnishingForm=this.fb.group({
      title:[null,Validators.required]
    })
  }
  addFurnishing(){
    console.log(this.furnishingForm);
    if (this.furnishingForm.invalid) {
      // Object.keys(this.amenForm.controls).forEach((key) => {
      //   this.amenForm.controls[key].markAsTouched();
      // });
      this.furnishingForm.markAllAsTouched();
      return;
    }
    const UserForm = this.furnishingForm.value;
    let formData = new FormData();
    for (let x in UserForm) {
      formData.append(`${x}`, UserForm[x]);
    }
    this.spinner.showSpinner();
    this.service.createfurnishing(UserForm).subscribe({
      next: (res) => {
        console.log(res);
        this.furnishingForm= res.data;
        this.dialogRef.close({status:true});
        this.spinner.hideSpinner();
        Swal.fire(`${res.message}`);
      },
      error: (error) => {
        console.log(error);
        Swal.fire(`${error.error.message}`);
      }
    });
  }
  get userFormControl() {
    return this.furnishingForm.controls;
  }
}
