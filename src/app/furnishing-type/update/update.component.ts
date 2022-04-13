import { LoaderService } from './../../services/loader.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit,Inject } from '@angular/core';
import { FurnishingTypeService } from '../furnishing-type.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
@Component({
  selector: 'furnishing-type-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  furnishing: any;
  updateFurnishingForm = new FormGroup({
    title:new FormControl('')
  });
  constructor(private spinner:LoaderService,
    private service:FurnishingTypeService,public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { 
      this.furnishing = data;
      console.log(data);
    }

  ngOnInit(): void {
    this.updateFurForm();
  }
  updateFurForm(): void 
  {
    this.updateFurnishingForm.patchValue({
  title: this.furnishing.title
    })
  }
  furTypeUpdateFun(): void{
    const formValue = this.updateFurnishingForm.getRawValue();
 console.log(formValue);
 this.spinner.showSpinner();
 this.service.updateFurnishing(this.furnishing._id, {title:formValue.title}).subscribe((res)=>{
   console.log(res);
   this.updateFurnishingForm=res.data;
   this.dialogRef.close({status:true});
   this.spinner.hideSpinner();
 })
  }
}
