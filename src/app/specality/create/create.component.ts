import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SpecalityService } from '../specality.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'specality-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  specForm!: FormGroup;
  ImagePreview!: string;
  constructor(private fb:FormBuilder, private service:SpecalityService) { }

  ngOnInit(): void {
    this.specForm = this.fb.group({
      title:[null, Validators.required],
      specialtyIcon: [null, Validators.required],
    });
  }
  uploadFiles(event: any) : void {
    const file = event.target.files[0];
    console.log(file);

    this.specForm.patchValue({
      specialtyIcon: file,
    });
    const reader = new FileReader();
    reader.onload = () => {
      this.ImagePreview = reader.result as string;
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  addSpecialities(){
    console.log(this.specForm);
    if (this.specForm.invalid) {
      Object.keys(this.specForm.controls).forEach((key) => {
        this.specForm.controls[key].markAsTouched();
      });
      return;
    }
    const UserForm = this.specForm.value;
    let formData = new FormData();
    for (let x in UserForm) {
      formData.append(`${x}`, UserForm[x]);
    }
    this.service.createSpecialities(formData).subscribe({
      next: (res) => {
        console.log(res);
        this.specForm= res.data;
        Swal.fire(`${res.message}`);
      },
      error: (error) => {
        console.log(error);
        Swal.fire(`${error.error.message}`);
      }
    });
}
get userFormControl() {
  return this.specForm.controls;
}
}
