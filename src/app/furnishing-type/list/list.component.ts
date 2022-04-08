import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';
import { UpdateComponent } from '../update/update.component';
import { FurnishingTypeService } from '../furnishing-type.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'furnishing-type-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
furType :any[] = [];
  constructor(public dialog: MatDialog, private service:FurnishingTypeService) { }

  ngOnInit(): void {
    this.service.furnishingType().subscribe({
      next: (res) => {
        console.log(res);
        this.furType= res.data;
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
  openUpdateDialog(fur:any){
    const dialogRef = this.dialog.open(UpdateComponent, {
      data:fur
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  deleteFur(furId:any){
    this.service.deletefurnishing(furId).subscribe((res)=>{
      console.log(res);  
  });
  this.service.furnishingType().subscribe({
    next: (res) => {
      console.log(res);
      this.furType= res.data;
      Swal.fire(`${res.message}`);
    },
    error: (error) => {
      console.log(error);
      Swal.fire(`${error.error.message}`);
    },
  });
  }
}
