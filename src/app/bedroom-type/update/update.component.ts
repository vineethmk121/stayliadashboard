import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BedroomTypeService } from '../bedroom-type.service';
import { ActivatedRoute } from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
@Component({
  selector: 'bedroom-type-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  proType:any;
  constructor(private service:BedroomTypeService , private router:ActivatedRoute,public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
      this.proType = data;
      console.log(data);
     }
  updateBed=new FormGroup({
    title: new FormControl('')
  });
  ngOnInit(): void {  
    this.updateForm();
  }
  updateForm(): void 
  {
    this.updateBed.patchValue({
    title: this.proType.title
    })
  }
  updateBdroomType(): void 
{
 const formValue = this.updateBed.getRawValue();
 console.log(formValue);
 
 this.service.updateBedRoomtype(this.proType._id, {title:formValue.title,description:formValue.description}).subscribe((res)=>{
   console.log(res);
   
 })
}  
get userFormControl() 
{
    return this.updateBed.controls;
  }
}
