import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';
import { UpdateComponent } from '../update/update.component';
import { AdditionalInformationService } from '../additional-information.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'additional-information-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  info:any[]=[];
  constructor(public dialog: MatDialog, private service:AdditionalInformationService) { }

  ngOnInit(): void {
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
  openCreateDialog(){
    const dialogRef = this.dialog.open(CreateComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openUpdateDialog(add_info:any){
    const dialogRef = this.dialog.open(UpdateComponent,{
      data:add_info
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  deleteInfo(id:any){
      this.service.deleteadInfo(id).subscribe((res)=>{
        console.log(res);
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
}
