import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropertyService } from '../property.service';
import { Router } from "@angular/router";
import Swal from 'sweetalert2'
import { LoaderService } from 'src/app/services/loader.service';
@Component({
  selector: 'property-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  filterForm!: FormGroup;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  term:any;
  property: any[] = [];
  constructor(private fb: FormBuilder, private service :PropertyService,private router:Router, private spinner:LoaderService) {}

  ngOnInit(): void {
    this.getallData();
  }
  getallData(){
    this.spinner.showSpinner();
    this.service.getAllProperties().subscribe((res)=>{
      console.log(res);
      this.property=res.data;
      this.spinner.hideSpinner();
      console.log(this.property);
      
    })
    this.filterForm = this.fb.group({
      mainFilter: [null, Validators.required],
    });
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }
  areaformatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'ft';
    }
    return value;
  }
  onChangeMainFilter() {
    let mianFilter = this.filterForm.get('mainFilter');
    console.log(mianFilter?.value);
  }
  deletePropertyList(Pid:any){
    this.service.deleteProperty(Pid).subscribe((res)=>{
      console.log(res);  
      this.spinner.showSpinner();
      this.service.getAllProperties().subscribe({
        next: (res) => {
          console.log(res);
          this.property= res.data;
          this.spinner.hideSpinner();
          this.getallData();
          Swal.fire(`${res.message}`);
        },
        error: (error) => {
          console.log(error);
          Swal.fire(`${error.error.message}`);
        },
      });
  });
 
  }

  updateProperty(propertyId:string){
    this.router.navigate(['property/update',propertyId]);
  }
  onTableDataChange(event: any) {
    this.page = event;
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }
}
