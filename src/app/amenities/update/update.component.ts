import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit ,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AmenitiesService } from '../amenities.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'amenities-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  ImagePreview!:string;
  amenities:any;
  constructor(private service:AmenitiesService, public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { 
      this.amenities = data;
      console.log(data);
    }
    updateAmenities=new FormGroup({
      title: new FormControl(''),
      amenitiesIcon: new FormControl('')
    });
  ngOnInit(): void {
    this.updateAmenForm();
  }
  updateAmenForm(): void 
  {
    this.ImagePreview=this.amenities.amenitiesIcon;
    this.updateAmenities.patchValue({
    title: this.amenities.title
    })
  }
  uploadFiles(event: any) : void {
    const file = event.target.files[0];
    console.log(file);

    this.updateAmenities.patchValue({
      amenitiesIcon: file,
    });
    const reader = new FileReader();
    reader.onload = () => {
      this.ImagePreview = reader.result as string;
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  updateAmen(){
    // console.log('update');
    
    // const formValue = this.updateAmenities.getRawValue();
    // console.log(formValue);
    //   this.service.updateAmenties(this.amenities._id,this.updateAmenities.value).subscribe((res)=>{
    //     console.log(res);
    //   })
    console.log(this.updateAmenities);
    if (this.updateAmenities.invalid) {
      Object.keys(this.updateAmenities.controls).forEach((key) => {
        this.updateAmenities.controls[key].markAsTouched();
      });
      return;
    }
    const UserForm = this.updateAmenities.value;
    let formData = new FormData();
    for (let x in UserForm) {
      formData.append(`${x}`, UserForm[x]);
    }
    this.service.updateAmenties(this.amenities._id,formData).subscribe({
      next: (res) => {
        console.log(res);
        this.updateAmenities= res.data;
        Swal.fire(`${res.message}`);
      },
      error: (error) => {
        console.log(error);
        Swal.fire(`${error.error.message}`);
      }
    });
  }
}
