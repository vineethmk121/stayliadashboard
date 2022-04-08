import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { PropertyCategoriesService } from '../property-categories.service';
import Swal from 'sweetalert2';
export interface Filter {
  name: string;
}
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  proCatForm! : FormGroup;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  filters: Filter[] = [];

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
  
  constructor(private fb:FormBuilder, private service :PropertyCategoriesService) { }

  ngOnInit(): void {
    this.proCatForm=this.fb.group({
      title:[null,Validators.required],
      filter:[null,Validators.required]
    })
  }
  addProCat(){
    console.log(this.proCatForm);
    const UserForm = this.proCatForm.value;
    let formData = new FormData();
    for (let x in UserForm) {
      formData.append(`${x}`, UserForm[x]);
    }
    this.service.addPropertyCat(UserForm).subscribe({
      next: (res) => {
        console.log(res);
        this.proCatForm= res.data;
        Swal.fire(`${res.message}`);
      },
      error: (error) => {
        console.log(error);
        Swal.fire(`${error.error.message}`);
      }
    });
  }
  get userFormControl() {
    return this.proCatForm.controls;
  }
}
