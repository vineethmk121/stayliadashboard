import { MatDialogRef } from '@angular/material/dialog';
import { LoaderService } from './../../services/loader.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NationalityService } from './../nationality.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'nationality-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  nationalityForm! : FormGroup;
  constructor(private service:NationalityService, private fb:FormBuilder, private spinner:LoaderService,  private dialogRef:MatDialogRef<CreateComponent>) { }

  ngOnInit(): void {
    this.nationalityForm=this.fb.group({
      title:[null,Validators.required],
      state:['pak']
    })
  }
  addCountry(){
    console.log(this.nationalityForm);
    if (this.nationalityForm.invalid) {
      // Object.keys(this.amenForm.controls).forEach((key) => {
      //   this.amenForm.controls[key].markAsTouched();
      // });
      this.nationalityForm.markAllAsTouched();
      return;
    }
    const UserForm = this.nationalityForm.value;
    let formData = new FormData();
    for (let x in UserForm) {
      formData.append(`${x}`, UserForm[x]);
    }
    this.spinner.showSpinner();
    this.service.createCountry(UserForm).subscribe({
      next: (res) => {
        console.log(res);
        this.nationalityForm= res.data;
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
    return this.nationalityForm.controls;
  }
}
