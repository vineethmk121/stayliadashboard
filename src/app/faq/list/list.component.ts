import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';
import { UpdateComponent } from '../update/update.component';
import { FaqService } from '../faq.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'FAQ-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
Faq:any[]=[];
  constructor(public dialog: MatDialog, private service:FaqService) { }

  ngOnInit(): void {
    this.service.getFaq().subscribe({
      next: (res) => {
        console.log(res);
        this.Faq= res.data;
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
  openUpdateDialog(){
    const dialogRef = this.dialog.open(UpdateComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  deleteFAQ(Fid:any){
    console.log(Fid);
    this.service.deleteFaq(Fid).subscribe({
      next: (res) => {
        console.log(res);
        Swal.fire(`${res.message}`);
      },
      error: (error) => {
        console.log(error);
        Swal.fire(`${error.error.message}`);
      },
    });
    this.service.getFaq().subscribe({
      next: (res) => {
        console.log(res);
        this.Faq= res.data;
      },
      error: (error) => {
        console.log(error);
        Swal.fire(`${error.error.message}`);
      },
    });
  }
}
