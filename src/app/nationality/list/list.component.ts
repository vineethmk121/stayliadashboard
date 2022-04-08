import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';
import { UpdateComponent } from '../update/update.component';
import { NationalityService } from '../nationality.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'nationality-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  country:any[]=[];
  constructor(public dialog: MatDialog, private service:NationalityService) { }

  ngOnInit(): void {
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
  openCreateDialog(){
    const dialogRef = this.dialog.open(CreateComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openUpdateDialog(count:any){
    const dialogRef = this.dialog.open(UpdateComponent,{
      data:count
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  deleteNational(cId:any){
    this.service.deleteNationalities(cId).subscribe((res)=>{
      console.log(res);  
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
}
