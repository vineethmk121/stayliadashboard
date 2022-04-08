import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';
import { UpdateComponent } from '../update/update.component';
import { TagService } from '../tag.service'; 
import Swal from 'sweetalert2';
@Component({
  selector: 'tag-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  tags:any[] = [];
  constructor(public dialog: MatDialog, private service:TagService) { }

  ngOnInit(): void {
    this.service.getAlltags().subscribe({
      next: (res) => {
        console.log(res);
        this.tags= res.data;
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
  openUpdateDialog(tag:any){
    const dialogRef = this.dialog.open(UpdateComponent,{
      data:tag  
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  deleteTags(id:any){
    this.service.deleteTags(id).subscribe({
      next: (res) => {
        console.log(res);
        this.tags= res.data;
        Swal.fire(`${res.message}`);
      },
      error: (error) => {
        console.log(error);
        Swal.fire(`${error.error.message}`);
      },
    });
    this.service.getAlltags().subscribe({
      next: (res) => {
        console.log(res);
        this.tags= res.data;
        Swal.fire(`${res.message}`);
      },
      error: (error) => {
        console.log(error);
        Swal.fire(`${error.error.message}`);
      },
    });
  }
}
