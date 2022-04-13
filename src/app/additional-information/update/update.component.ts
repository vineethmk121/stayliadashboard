import { Component, OnInit, Inject } from '@angular/core';
import { AdditionalInformationService } from '../additional-information.service';
import { FormControl, FormGroup } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
import { LoaderService } from 'src/app/services/loader.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'additional-information-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  add:any;
  addInfoForm = new FormGroup({
    title:new FormControl(''),
    description: new FormControl('')
  });
  constructor(private service:AdditionalInformationService,
    private spinner:LoaderService, 
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { 
      this.add=data;
      console.log(data);
      
    }

  ngOnInit(): void {
    this.updateForm();
  }
  updateForm(): void 
{
  this.addInfoForm.patchValue({
title: this.add.title,
description: this.add.description
  })
}
updateAddInfo(): void 
{
            const formValue = this.addInfoForm.getRawValue();
            console.log(formValue);
            this.spinner.showSpinner();
            this.service.updateAddInfo(this.add._id, {title:formValue.title,description:formValue.description}).subscribe((res)=>{
              console.log(res);
              this.dialogRef.close({status:true});
              Swal.fire(`${res.message}`);
   this.spinner.hideSpinner();
 })
}
}
