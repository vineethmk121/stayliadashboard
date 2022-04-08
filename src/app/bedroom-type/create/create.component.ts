import { BedroomTypeService } from './../bedroom-type.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'bedroom-type-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  bedForm!: FormGroup;
  constructor(private bedService:BedroomTypeService, private fb:FormBuilder) { }

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
    this.bedService.createbedroom(UserForm).subscribe((res)=>{
        console.log(res);  
    });
  }
  get userFormControl() {
    return this.bedForm.controls;
  }
}
