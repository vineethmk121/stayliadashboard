import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';
import { UpdateComponent } from '../update/update.component';
import { OverviewService } from '../overview.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'overview-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public dialog: MatDialog, private service:OverviewService) { }
  overview:any[]=[];
  ngOnInit(): void {
    this.service.getAllOverview().subscribe((res)=>{
      console.log(res);
      this.overview=res.data;
    })
  }
  openCreateDialog(){
    const dialogRef = this.dialog.open(CreateComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openUpdateDialog(overViewObj:any){
    const dialogRef = this.dialog.open(UpdateComponent,{
      data:overViewObj
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  deleteOverView(overView_id:any){
    console.log(overView_id);
    this.service.deleteOverview(overView_id).subscribe({
      next: (res) => {
        console.log(res);
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
}