import { Component, OnInit,Inject } from '@angular/core';
import { PropertyCategoriesService } from '../property-categories.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  proCatg:any;
  updateProCat = new FormGroup({
    title:new FormControl(''),
    filter: new FormControl('')
  });
  constructor(private service:PropertyCategoriesService,public dialogRef: MatDialogRef<UpdateComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any, ) { 
    this.proCatg=data;
    console.log(data);
  }
  ngOnInit(): void {
    this.updateProCatForm();
  }
  updateProCatForm(): void 
  {
    this.updateProCat.patchValue({
  title: this.proCatg.title,
  filter: this.proCatg.filter
    })
  }
  updateProCategory(): void 
{
 const formValue = this.updateProCat.getRawValue();
 console.log(formValue);
 
 this.service.updateProCat(this.proCatg._id, {title:formValue.title,filter:formValue.filter}).subscribe((res)=>{
   console.log(res);
   
 })
} 
}
