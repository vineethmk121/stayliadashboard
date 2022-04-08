import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { OverviewService } from '../overview.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'overview-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  OverViewForm!: FormGroup;
  ImagePreview!: string;
  constructor(private fb:FormBuilder, private service:OverviewService) { }

  ngOnInit(): void {
    this.OverViewForm = this.fb.group({
      title:[null, Validators.required],
      overViewIcon: [null, Validators.required],
    });
  }
  uploadFiles(event: any) : void {
    const file = event.target.files[0];
    console.log(file);

    this.OverViewForm.patchValue({
      overViewIcon: file,
    });
    const reader = new FileReader();
    reader.onload = () => {
      this.ImagePreview = reader.result as string;
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  addOverview(){
    console.log(this.OverViewForm);
    if (this.OverViewForm.invalid) {
      Object.keys(this.OverViewForm.controls).forEach((key) => {
        this.OverViewForm.controls[key].markAsTouched();
      });
      return;
    }
    const UserForm = this.OverViewForm.value;
    let formData = new FormData();
    for (let x in UserForm) {
      formData.append(`${x}`, UserForm[x]);
    }
    this.service.createOverview(formData).subscribe({
      next: (res) => {
        console.log(res);
        this.OverViewForm= res.data;
        Swal.fire(`${res.message}`);
      },
      error: (error) => {
        console.log(error);
        Swal.fire(`${error.error.message}`);
      }
    });
}
  get userFormControl() {
    return this.OverViewForm.controls;
  }
}
