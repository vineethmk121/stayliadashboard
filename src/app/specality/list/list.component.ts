import { LoginComponent } from './../../auth/login/login.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';
import { UpdateComponent } from '../update/update.component';
import { SpecalityService } from '../specality.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'specality-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  specialities:any[]=[];
  constructor(public dialog: MatDialog, private service:SpecalityService) { }

  ngOnInit(): void {
    this.service.getAllSpecialities().subscribe({
      next: (res) => {
        console.log(res);
        this.specialities= res.data;
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
  openUpdateDialog(spec:any){
    const dialogRef = this.dialog.open(UpdateComponent,
      {data:spec});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  deleteSPecialities(sId:any){
    console.log(sId);
    this.service.deleteSpecialities(sId).subscribe({
      next: (res) => {
        console.log(res);
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
}