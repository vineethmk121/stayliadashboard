import { Component, OnInit } from '@angular/core';
import { CreateComponent } from '../create/create.component';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { PropertyCategoriesService } from '../property-categories.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  proCat:any;
  propertyCat:any[]=[];
  constructor(public dialog: MatDialog, private service:PropertyCategoriesService) { }

  ngOnInit(): void {
    this.service.getPropertyCat().subscribe({
      next: (res) => {
        console.log(res);
        this.propertyCat= res.data;
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
  openUpdateDialog(proCat:any){
    const dialogRef = this.dialog.open(UpdateComponent, {
      data:proCat
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  deleteCat(id:any){
      this.service.deletePCat(id).subscribe({
        next: (res) => {
          console.log(res);
          this.propertyCat= res.data;
          Swal.fire(`${res.message}`);
        },
        error: (error) => {
          console.log(error);
          Swal.fire(`${error.error.message}`);
        },
      });
      this.service.getPropertyCat().subscribe((res)=>{
        console.log(res);
        this.propertyCat=res.data;
      });
  }
}
