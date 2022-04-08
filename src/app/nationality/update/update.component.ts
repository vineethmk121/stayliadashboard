import { Component, OnInit ,Inject} from '@angular/core';
import { NationalityService } from '../nationality.service';
import { FormGroup, FormControl } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
@Component({
  selector: 'nationality-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  country:any;
  updateCountryForm = new FormGroup({
    title:new FormControl('')
  });
  constructor(private service:NationalityService,  public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { 
      this.country = data;
      console.log(data);
    }
  ngOnInit(): void {
    this.updateCountry();
  }
  updateCountry(): void 
{
  this.updateCountryForm.patchValue({
title: this.country.title
  })
}
uCountry(){
  const formValue = this.updateCountryForm.getRawValue();
 console.log(formValue);
 
 this.service.updateCountry(this.country._id, {title:formValue.title}).subscribe((res)=>{
   console.log(res);
 })
}
}
