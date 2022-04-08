import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OverviewService } from '../overview.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'overview-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  overview:any;
  ImagePreview!:string;
  constructor(private service:OverviewService, public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { 
      this.overview = data;
      console.log(data);
    }
    updateOverviewForm=new FormGroup({
      title: new FormControl(''),
      overViewIcon: new FormControl('')
    });
  ngOnInit(): void {
    this.updateOverview();
  }
  updateOverview(): void 
  {
    this.ImagePreview=this.overview.overViewIcon;
    this.updateOverviewForm.patchValue({
    title: this.overview.title
    })
  }
  uploadFiles(event: any) : void {
    const file = event.target.files[0];
    console.log(file);

    this.updateOverviewForm.patchValue({
      overViewIcon: file,
    });
    const reader = new FileReader();
    reader.onload = () => {
      this.ImagePreview = reader.result as string;
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  updateOverviewFun(){
    // console.log('update');
    
    // const formValue = this.updateAmenities.getRawValue();
    // console.log(formValue);
    //   this.service.updateAmenties(this.amenities._id,this.updateAmenities.value).subscribe((res)=>{
    //     console.log(res);
    //   })
    console.log(this.updateOverviewForm);
    if (this.updateOverviewForm.invalid) {
      Object.keys(this.updateOverviewForm.controls).forEach((key) => {
        this.updateOverviewForm.controls[key].markAsTouched();
      });
      return;
    }
    const UserForm = this.updateOverviewForm.value;
    let formData = new FormData();
    for (let x in UserForm) {
      formData.append(`${x}`, UserForm[x]);
    }
    this.service.updateOverview(this.overview._id,formData).subscribe({
      next: (res) => {
        console.log(res);
        this.overview= res.data;
        Swal.fire(`${res.message}`);
      },
      error: (error) => {
        console.log(error);
        Swal.fire(`${error.error.message}`);
      }
    });
  }
}
