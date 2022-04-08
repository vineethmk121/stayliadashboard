import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';
import { UpdateComponent } from '../update/update.component';
import { AmenitiesService } from '../amenities.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'amenities-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  amenities: any[] = [];
  constructor(public dialog: MatDialog , private aservice:AmenitiesService) { }

  ngOnInit(): void {
    this.aservice.getAmenities().subscribe({
      next: (res) => {
        console.log(res);
        this.amenities= res.data;
        Swal.fire(`${res.message}`);
      },
      error: (error) => {
        console.log(error);
        Swal.fire(`${error.error.message}`);
      },
    });
  }
  openCreateDialog(){
    const dialogRef = this.dialog.open(CreateComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openUpdateDialog(am:any){
    const dialogRef = this.dialog.open(UpdateComponent,
      {data:am}
      );
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  deleteAmenities(amen_id:any){
      console.log(amen_id);
      this.aservice.deleteAmenities(amen_id).subscribe({
        next: (res) => {
          console.log(res);
          Swal.fire(`${res.message}`);
        },
        error: (error) => {
          console.log(error);
          Swal.fire(`${error.error.message}`);
        },
      })
      this.aservice.getAmenities().subscribe({
        next: (res) => {
          console.log(res);
          this.amenities= res.data;
      },
        error: (error) => {
          console.log(error);
          Swal.fire(`${error.error.message}`);
        },
      })
  }
}
