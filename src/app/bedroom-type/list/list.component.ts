import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';
import { UpdateComponent } from '../update/update.component';
import { BedroomTypeService } from '../bedroom-type.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'bedroom-type-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  bedRoom: any[] = [];
  constructor(public dialog: MatDialog, private bedService:BedroomTypeService) { }

  ngOnInit(): void {
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
  openCreateDialog(){
    const dialogRef = this.dialog.open(CreateComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openUpdateDialog(br:any){
    const dialogRef = this.dialog.open(UpdateComponent,{data:br});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  deleteBed(bed_id:any){
      this.bedService.deletebedroom(bed_id).subscribe((res)=>{
          console.log(res);  
      });
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
}
