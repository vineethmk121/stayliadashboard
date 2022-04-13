import { LoaderService } from './../../services/loader.service';
import { Component, OnInit, Inject } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { PropertyTypeService } from '../property-type.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
export interface Filter {
  name: string;
}

@Component({
  selector: 'property-type-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  pro:any;
  pro_type_form = new FormGroup({
    title: new FormControl(''),
    filter : new FormControl('')
  });
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
  constructor(private service:PropertyTypeService, 
    public dialogRef:MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any, private spinner:LoaderService) {
      this.pro = data;
      console.log(data);
     }

  ngOnInit(): void {
    this.updateForm();
  }
  updateForm(): void 
  {
    this.pro_type_form.patchValue({
  title: this.pro.title,
  filter: this.pro.filter
    })
  }
      updateProType(): void 
        {
        const formValue = this.pro_type_form.getRawValue();
        console.log(formValue);
        this.spinner.showSpinner();
        this.service.updateProType(this.pro._id, {title:formValue.title,filter:formValue.filter}).subscribe({
          next: (res) => {
            console.log(res);
            this.dialogRef.close({status:true});
            this.spinner.hideSpinner();
            Swal.fire(`${res.message}`);
          },
          error: (error) => {
            console.log(error);
            Swal.fire(`${error.error.message}`);
          },
        });
    }
    getpTypeFun(){
      this.service.propertyType().subscribe({
        next: (res) => {
          console.log(res);
          Swal.fire(`${res.message}`);
        },
        error: (error) => {
          console.log(error);
          Swal.fire(`${error.error.message}`);
        },
      });
    }
    get userFormControl() 
  {
      return this.pro_type_form.controls;
  }
}

