import { LoginComponent } from './../../auth/login/login.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';
import { UpdateComponent } from '../update/update.component';
import { SpecalityService } from '../specality.service';
import Swal from 'sweetalert2';
import { LoaderService } from 'src/app/services/loader.service';
@Component({
  selector: 'specality-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  specialities:any[]=[];
  constructor(public dialog: MatDialog, private service:SpecalityService, private spinner:LoaderService) { }

  ngOnInit(): void {
    this.getAllRecords();
  }
  getAllRecords(){
    this.spinner.showSpinner();
    this.service.getAllSpecialities().subscribe({
      next: (res) => {
        console.log(res);
        this.specialities= res.data;
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
  openUpdateDialog(spec:any){
    const dialogRef = this.dialog.open(UpdateComponent,
      {data:spec});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result?.status){
        this.getAllRecords();
      }
    });
  }
  deleteSPecialities(sId:any){
    console.log(sId);
    this.spinner.showSpinner();
    this.service.deleteSpecialities(sId).subscribe({
      next: (res) => {
        console.log(res);
        this.spinner.hideSpinner();
        this.getAllRecords();
        Swal.fire(`${res.message}`);
      },
      error: (error) => {
        console.log(error);
        Swal.fire(`${error.error.message}`);
      },
    });
    this.service.getAllSpecialities().subscribe({
      next: (res) => {
        console.log(res);
        this.specialities= res.data;
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