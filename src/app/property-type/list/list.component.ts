import { LoaderService } from './../../services/loader.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';
import { UpdateComponent } from '../update/update.component';
import { PropertyTypeService } from '../property-type.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'property-type-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
 proType:any[] = [];
 page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  term: any;
  constructor(public dialog: MatDialog, private service:PropertyTypeService, private spinner:LoaderService) { }

  ngOnInit(): void {
    this.spinner.showSpinner();
    this.getAllRecords();
  }
  getAllRecords(){
    this.spinner.showSpinner();
    this.service.propertyType().subscribe({
      next: (res) => {
        console.log(res);
        this.proType= res.data;
        this.spinner.hideSpinner();
        // Swal.fire(`${res.message}`);
      },
      error: (error) => {
        console.log(error);
        this.spinner.hideSpinner();
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
  openUpdateDialog(pro:any){
    const dialogRef = this.dialog.open(UpdateComponent,{
      data:pro
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result?.status){
        this.getAllRecords();
      }
    });
  }
  deletePtype(id:any){
    this.spinner.showSpinner();
          this.service.deletePtype(id).subscribe((res)=>{
            console.log(res);
            this.service.propertyType().subscribe({
              next: (res) => {
                console.log(res);
                this.proType= res.data;
                this.spinner.hideSpinner();
                Swal.fire(`${res.message}`);
              },
              error: (error) => {
                console.log(error);
                Swal.fire(`${error.error.message}`);
              },
            });
          });
  }
  fetch(){
    this.service.propertyType().subscribe({
      next: (res) => {
        console.log(res);
        this.proType= res.data;
      
      },
      error: (error) => {
        console.log(error);
       
      },
    });
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetch();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetch();
  }
}
