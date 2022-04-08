import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { TagService } from '../tag.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
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

  constructor(private service:TagService, private route:ActivatedRoute, 
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
 
 this.service.updateTag(this.tag._id, {title:formValue.title,description:formValue.description}).subscribe((res)=>{
   console.log(res);
   
 })
}  
get userFormControl() 
{
    return this.updateTag.controls;
  }
}
