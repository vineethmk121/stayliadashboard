import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdditionalInformationService } from '../additional-information.service';
import Swal from 'sweetalert2';
import { LoaderService } from 'src/app/services/loader.service';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'additional-information-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit {
  info:any[]=[];
  infoForm! : FormGroup;
  constructor(private service:AdditionalInformationService, private fb:FormBuilder, private spinner:LoaderService, private dialogRef:MatDialogRef<CreateComponent>) { }

  ngOnInit(): void {
    this.infoForm=this.fb.group({
      title:[null,Validators.required],
      description:[null,Validators.required]
    })
  }
  addAdditionalinfo(){
    console.log(this.infoForm);
    if (this.infoForm.invalid) {
      // Object.keys(this.amenForm.controls).forEach((key) => {
      //   this.amenForm.controls[key].markAsTouched();
      // });
      this.infoForm.markAllAsTouched();
      return;
    }
    const UserForm = this.infoForm.value;
    let formData = new FormData();
    for (let x in UserForm) {
      formData.append(`${x}`, UserForm[x]);
    }
    this.spinner.showSpinner();
    this.service.addPropertyType(UserForm).subscribe({
      next: (res) => {
        console.log(res);
        this.infoForm= res.data;
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

  // getupdatedData(){
  //   this.service.getInfo().subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       this.info= res.data;
  //       Swal.fire(`${res.message}`);
  //     },
  //     error: (error) => {
  //       console.log(error);
  //       Swal.fire(`${error.error.message}`);
  //     },
  //   });
  // }
  get userFormControl() {
    return this.infoForm.controls;
  }
}
