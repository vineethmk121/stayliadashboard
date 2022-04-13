import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TagService } from '../tag.service';
import Swal from 'sweetalert2';
import { LoaderService } from 'src/app/services/loader.service';
@Component({
  selector: 'tag-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
    tagForm!:FormGroup;
  constructor(private service:TagService, private fb:FormBuilder, private spinner:LoaderService,private dialogRef:MatDialogRef<CreateComponent>) { }

  ngOnInit(): void {
    this.tagForm=this.fb.group({
      title:[null, Validators.required],
      description:[null,Validators.required]
    })
  }
    addTag(){
      console.log(this.tagForm);
        if (this.tagForm.invalid) {
      Object.keys(this.tagForm.controls).forEach((key) => {
        this.tagForm.controls[key].markAsTouched();
      });
      return;
    }
      const UserForm = this.tagForm.value;
      let formData = new FormData();
      for (let x in UserForm) {
        formData.append(`${x}`, UserForm[x]);
      }
      this.spinner.showSpinner();
      this.service.addTags(UserForm).subscribe({
        next: (res) => {
          console.log(res);
          this.tagForm= res.data;
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
      return this.tagForm.controls;
    }
}
