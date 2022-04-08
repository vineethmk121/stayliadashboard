import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { SpecalityService } from '../specality.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'specality-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  specialities:any;
  ImagePreview!:string;
  constructor(private service : SpecalityService, public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { 
      this.specialities = data;
      console.log(data);
    }
    updateSpecialitiesForm=new FormGroup({
      title: new FormControl(''),
      specialtyIcon: new FormControl('')
    });
  ngOnInit(): void {
    this.updateSpec();
  }
  updateSpec(): void 
  {
    this.ImagePreview=this.specialities.specialtyIcon;
    this.updateSpecialitiesForm.patchValue({
    title: this.specialities.title
    })
  }
  uploadFiles(event: any) : void {
    const file = event.target.files[0];
    console.log(file);

    this.updateSpecialitiesForm.patchValue({
      specialtyIcon: file,
    });
    const reader = new FileReader();
    reader.onload = () => {
      this.ImagePreview = reader.result as string;
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  updateSpecFun(){
    // console.log('update');
    
    // const formValue = this.updateAmenities.getRawValue();
    // console.log(formValue);
    //   this.service.updateAmenties(this.amenities._id,this.updateAmenities.value).subscribe((res)=>{
    //     console.log(res);
    //   })
    console.log(this.updateSpecialitiesForm);
    if (this.updateSpecialitiesForm.invalid) {
      Object.keys(this.updateSpecialitiesForm.controls).forEach((key) => {
        this.updateSpecialitiesForm.controls[key].markAsTouched();
      });
      return;
    }
    const UserForm = this.updateSpecialitiesForm.value;
    let formData = new FormData();
    for (let x in UserForm) {
      formData.append(`${x}`, UserForm[x]);
    }
    this.service.updateSpec(this.specialities._id,formData).subscribe({
      next: (res) => {
        console.log(res);
        this.specialities= res.data;
        Swal.fire(`${res.message}`);
      },
      error: (error) => {
        console.log(error);
        Swal.fire(`${error.error.message}`);
      }
    });
  }
}
