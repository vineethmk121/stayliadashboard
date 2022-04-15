import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';
import { UpdateComponent } from '../update/update.component';
import { BedroomTypeService } from '../bedroom-type.service';
import Swal from 'sweetalert2';
import { LoaderService } from 'src/app/services/loader.service';
@Component({
  selector: 'bedroom-type-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  bedRoom: any[] = [];
  term:any;
  constructor(public dialog: MatDialog, private bedService:BedroomTypeService, private spinner:LoaderService) { }

  ngOnInit(): void {
    this.getAllRecords();
  }
  getAllRecords(){
    this.spinner.showSpinner();
    this.bedService.getbedroom().subscribe({
      next: (res) => {
        console.log(res);
        this.bedRoom= res.data;
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
  openUpdateDialog(br:any){
    const dialogRef = this.dialog.open(UpdateComponent,{data:br});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result?.status){
        this.getAllRecords();
      }
    });
  }
  deleteBed(bed_id:any){
      this.bedService.deletebedroom(bed_id).subscribe({
        next: (res) => {
          console.log(res);
          Swal.fire(`${res.message}`);
        },
        error: (error) => {
          console.log(error);
          Swal.fire(`${error.error.message}`);
        },
      })
      this.bedService.getbedroom().subscribe({
        next: (res) => {
          console.log(res);
          this.bedRoom= res.data;
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
