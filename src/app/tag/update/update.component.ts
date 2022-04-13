import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { TagService } from '../tag.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
import { LoaderService } from 'src/app/services/loader.service';
@Component({
  selector: 'tag-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  tag: any;
  updateTag = new FormGroup({
    title:new FormControl(''),
    description: new FormControl('')
  });

  constructor(private spinner:LoaderService,
    private service:TagService, private route:ActivatedRoute, 
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
      this.tag = data;
      console.log(data);
     }
  
  ngOnInit(): void { 
    this.updateForm(); 
  }

  updateForm(): void 
{
  this.updateTag.patchValue({
title: this.tag.title,
description: this.tag.description
  })
}

updateTags(): void 
{
 const formValue = this.updateTag.getRawValue();
 console.log(formValue);
 this.spinner.showSpinner();
 this.service.updateTag(this.tag._id, {title:formValue.title,description:formValue.description}).subscribe((res)=>{
   console.log(res);
   this.updateTag=res.data;
   this.dialogRef.close({status:true});
   this.spinner.hideSpinner();
 })
}  
get userFormControl() 
{
    return this.updateTag.controls;
  }
}
