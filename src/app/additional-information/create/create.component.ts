import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdditionalInformationService } from '../additional-information.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'additional-information-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit {
  infoForm! : FormGroup;
  constructor(private service:AdditionalInformationService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.infoForm=this.fb.group({
      title:[null,Validators.required],
      description:[null,Validators.required]
    })
  }
  addAdditionalinfo(){
    console.log(this.infoForm);
    const UserForm = this.infoForm.value;
    let formData = new FormData();
    for (let x in UserForm) {
      formData.append(`${x}`, UserForm[x]);
    }
    this.service.addPropertyType(UserForm).subscribe({
      next: (res) => {
        console.log(res);
        this.infoForm= res.data;
        Swal.fire(`${res.message}`);
      },
      error: (error) => {
        console.log(error);
        Swal.fire(`${error.error.message}`);
      }
    });
  }
  get userFormControl() {
    return this.infoForm.controls;
  }
}
