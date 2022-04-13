import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';
import { UpdateComponent } from '../update/update.component';
import { AdditionalInformationService } from '../additional-information.service';
import Swal from 'sweetalert2';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'additional-information-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  info:any[]=[];
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  constructor(public dialog: MatDialog, private service:AdditionalInformationService, private spinner:LoaderService) { }

  ngOnInit(): void {
  this.getAllRecords();
  }
  getAllRecords(){
    this.spinner.showSpinner();
    this.service.getInfo().subscribe({
      next: (res) => {
        console.log(res);
        this.info= res.data;
        this.spinner.hideSpinner();
      },
      error: (error) => {
        console.log(error);
    
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
  openUpdateDialog(add_info:any){
    const dialogRef = this.dialog.open(UpdateComponent,{
      data:add_info
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result?.status){
        this.getAllRecords();
      }
    });
  }
  deleteInfo(id:any){
    this.spinner.showSpinner();
      this.service.deleteadInfo(id).subscribe({
        next: (res) => {
          console.log(res);
          this.info= res.data;
          this.spinner.hideSpinner();
          this.getAllRecords();
          Swal.fire(`${res.message}`);
        },
        error: (error) => {
          console.log(error);
          Swal.fire(`${error.error.message}`);
        },
      });
      this.service.getInfo().subscribe({
        next: (res) => {
          console.log(res);
          this.info= res.data;
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
