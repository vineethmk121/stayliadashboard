import { LoaderService } from './../../services/loader.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';
import { UpdateComponent } from '../update/update.component';
import { FurnishingTypeService } from '../furnishing-type.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'furnishing-type-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
furType :any[] = [];
term:any;
  constructor(public dialog: MatDialog, private service:FurnishingTypeService, private spinner:LoaderService) { }

  ngOnInit(): void {
  this.getAllRecords();
  }
  getAllRecords(){
    this.spinner.showSpinner();
    this.service.furnishingType().subscribe({
      next: (res) => {
        console.log(res);
        this.furType= res.data;
        this.spinner.hideSpinner();
        // Swal.fire(`${res.message}`);
      },
      error: (error) => {
        console.log(error);
        // Swal.fire(`${error.error.message}`);
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
  openUpdateDialog(fur:any){
    const dialogRef = this.dialog.open(UpdateComponent, {
      data:fur
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result?.status){
        this.getAllRecords();
      }
    });
  }
  deleteFur(furId:any){
    this.spinner.showSpinner();
    this.service.deletefurnishing(furId).subscribe((res)=>{
      console.log(res);  
      this.spinner.hideSpinner();
      this.getAllRecords();
  })
  this.service.furnishingType().subscribe({
    next: (res) => {
      console.log(res);
      this.furType= res.data;
      Swal.fire(`${res.message}`);
    },
    error: (error) => {
      console.log(error);
      Swal.fire(`${error.error.message}`);
    },
  });
  }
  onTableDataChange(event: any) {
    this.page = event;
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }
}
