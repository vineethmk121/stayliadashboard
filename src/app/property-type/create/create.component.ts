import { MatDialogRef } from '@angular/material/dialog';
import { LoaderService } from './../../services/loader.service';
import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropertyTypeService } from '../property-type.service';
import Swal from 'sweetalert2';
export interface Filter {
  name: string;
}

@Component({
  selector: 'property-type-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  filters: Filter[] = [];
  proTypeForm!: FormGroup;
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.filters.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Filter): void {
    const index = this.filters.indexOf(fruit);

    if (index >= 0) {
      this.filters.splice(index, 1);
    }
  }
  constructor(private service:PropertyTypeService, private fb:FormBuilder, private spinner:LoaderService,  private dialogRef:MatDialogRef<CreateComponent>) { }

  ngOnInit(): void {
    this.proTypeForm=this.fb.group({
      title:[null,Validators.required],
      filter:[null,Validators.required]
    })
  }
  SaveProType(){
    console.log(this.proTypeForm);
    if (this.proTypeForm.invalid) {
      // Object.keys(this.amenForm.controls).forEach((key) => {
      //   this.amenForm.controls[key].markAsTouched();
      // });
      this.proTypeForm.markAllAsTouched();
      return;
    }
    const UserForm = this.proTypeForm.value;
    let formData = new FormData();
    for (let x in UserForm) {
      formData.append(`${x}`, UserForm[x]);
    }
    this.spinner.showSpinner();
    this.service.addPropertyType(UserForm).subscribe({
      next: (res) => {
        console.log(res);
        this.proTypeForm= res.data;
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
    return this.proTypeForm.controls;
  }
}
