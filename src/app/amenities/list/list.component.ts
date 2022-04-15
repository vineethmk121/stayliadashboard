import { LoaderService } from './../../services/loader.service';
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
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  amenities: any[] = [];
  term: any;
  constructor(public dialog: MatDialog , private aservice:AmenitiesService,private spinner:LoaderService) { }

  ngOnInit(): void {
    this.spinner.showSpinner();
    this.getAllRecords();
  }
  getAllRecords(){
    this.aservice.getAmenities().subscribe({
      next: (res) => {
        console.log(res);
        this.amenities= res.data;
        this.spinner.hideSpinner();
      },
      error: (error) => {
        console.log(error);
        this.spinner.hideSpinner();
     
      },
    });
  }
  openCreateDialog(){
    const dialogRef = this.dialog.open(CreateComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result?.status){
        this.getAllRecords();
      }
    });
  }
  openUpdateDialog(am:any){
    const dialogRef = this.dialog.open(UpdateComponent,
      {data:am}
      );
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result?.status){
        this.getAllRecords();
      }
    });
  }
  deleteAmenities(amen_id:any){
      console.log(amen_id);
      this.spinner.showSpinner();
      this.aservice.deleteAmenities(amen_id).subscribe({
        next: (res) => {
          console.log(res);
          this.spinner.hideSpinner();
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
  onTableDataChange(event: any) {
    this.page = event;
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }
}
