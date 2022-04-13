import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';
import { UpdateComponent } from '../update/update.component';
import { OverviewService } from '../overview.service';
import Swal from 'sweetalert2';
import { LoaderService } from 'src/app/services/loader.service';
@Component({
  selector: 'overview-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public dialog: MatDialog, private service:OverviewService, private spinner:LoaderService) { }
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  overview:any[]=[];
  ngOnInit(): void {
   this.getAllRecords();
  }
  getAllRecords(){
    this.spinner.showSpinner();
    this.service.getAllOverview().subscribe((res)=>{
      console.log(res);
      this.overview=res.data;
      this.spinner.hideSpinner();
    })
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
  openUpdateDialog(overViewObj:any){
    const dialogRef = this.dialog.open(UpdateComponent,{
      data:overViewObj
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result?.status){
        this.getAllRecords();
      }
    });
  }
  deleteOverView(overView_id:any){
    console.log(overView_id);
    this.spinner.showSpinner();
    this.service.deleteOverview(overView_id).subscribe({
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
    this.service.getAllOverview().subscribe({
      next: (res) => {
        console.log(res);
        this.overview= res.data;
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