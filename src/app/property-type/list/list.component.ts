import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';
import { UpdateComponent } from '../update/update.component';
import { PropertyTypeService } from '../property-type.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'property-type-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
 proType:any[] = [];
  constructor(public dialog: MatDialog, private service:PropertyTypeService) { }

  ngOnInit(): void {
    this.service.propertyType().subscribe({
      next: (res) => {
        console.log(res);
        this.proType= res.data;
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
  openUpdateDialog(pro:any){
    const dialogRef = this.dialog.open(UpdateComponent,{
      data:pro
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  deletePtype(id:any){
          this.service.deletePtype(id).subscribe((res)=>{
            console.log(res);
          });
          this.service.propertyType().subscribe({
            next: (res) => {
              console.log(res);
              this.proType= res.data;
              Swal.fire(`${res.message}`);
            },
            error: (error) => {
              console.log(error);
              Swal.fire(`${error.error.message}`);
            },
          });
  }
}
