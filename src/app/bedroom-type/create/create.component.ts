import { MatDialogRef } from '@angular/material/dialog';
import { BedroomTypeService } from './../bedroom-type.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'bedroom-type-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  bedForm!: FormGroup;
  constructor(private bedService:BedroomTypeService, private fb:FormBuilder, private spinner:LoaderService, private dialogRef:MatDialogRef<CreateComponent>) { }

  ngOnInit(): void {
    this.bedForm = this.fb.group({
      title :[null, Validators.required]
    })
  }
  addBedroom(){
    console.log(this.bedForm);
    if (this.bedForm.invalid) {
      Object.keys(this.bedForm.controls).forEach((key) => {
        this.bedForm.controls[key].markAsTouched();
      });
      return;
    }
    const UserForm = this.bedForm.value;
    let formData = new FormData();
    for (let x in UserForm) {
      formData.append(`${x}`, UserForm[x]);
    }
    // this.bedService.createbedroom(UserForm).subscribe((res)=>{
    //     console.log(res);  
    // });
    this.spinner.showSpinner();
    this.bedService.createbedroom(UserForm).subscribe({
      next: (res) => {
        console.log(res);
        this.bedForm=res.data;
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
    return this.bedForm.controls;
  }
}
