import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'specality-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
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
}