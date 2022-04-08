import { Component, OnInit } from '@angular/core';
import { AmenitiesService } from '../amenities.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'amenities-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  amenForm!: FormGroup;
  ImagePreview!: string;
  constructor(private service:AmenitiesService , private fb:FormBuilder) { }

  ngOnInit(): void {
    this.amenForm = this.fb.group({
      title:[null, Validators.required],
      amenitiesIcon: [null, Validators.required],
    });
  }
  uploadFiles(event: any) : void {
    const file = event.target.files[0];
    console.log(file);

    this.amenForm.patchValue({
      amenitiesIcon: file,
    });
    const reader = new FileReader();
    reader.onload = () => {
      this.ImagePreview = reader.result as string;
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }
addAmenties(){
    console.log(this.amenForm);
    if (this.amenForm.invalid) {
      Object.keys(this.amenForm.controls).forEach((key) => {
        this.amenForm.controls[key].markAsTouched();
      });
      return;
    }
    const UserForm = this.amenForm.value;
    let formData = new FormData();
    for (let x in UserForm) {
      formData.append(`${x}`, UserForm[x]);
    }
    this.service.createAmenities(formData).subscribe({
      next: (res) => {
        console.log(res);
        this.amenForm= res.data;
        Swal.fire(`${res.message}`);
      },
      error: (error) => {
        console.log(error);
        Swal.fire(`${error.error.message}`);
      }
    });
}
get userFormControl() {
  return this.amenForm.controls;
}
}
