import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';
import { UpdateComponent } from '../update/update.component';
import { NationalityService } from '../nationality.service';
import Swal from 'sweetalert2';
import { LoaderService } from 'src/app/services/loader.service';
@Component({
  selector: 'nationality-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  country:any[]=[];
  constructor(public dialog: MatDialog, private service:NationalityService, private spinner:LoaderService) { }

  ngOnInit(): void {
this.getAllRecords();
  }
  getAllRecords(){
    this.spinner.showSpinner();
    this.service.getCountries().subscribe({
      next: (res) => {
        console.log(res);
        this.country= res.data;
        this.spinner.hideSpinner();
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
  openUpdateDialog(count:any){
    const dialogRef = this.dialog.open(UpdateComponent,{
      data:count
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result?.status){
        this.getAllRecords();
      }
    });
  }
  deleteNational(cId:any){
    this.spinner.showSpinner();
    this.service.deleteNationalities(cId).subscribe((res)=>{
      console.log(res);  
      this.spinner.hideSpinner();
      this.getAllRecords();
  });
  this.service.getCountries().subscribe({
    next: (res) => {
      console.log(res);
      this.country= res.data;
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
