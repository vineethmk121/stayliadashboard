import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropertyService } from '../property.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'property-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  filterForm!: FormGroup;
  property: any[] = [];
  constructor(private fb: FormBuilder, private service :PropertyService) {}

  ngOnInit(): void {
    this.service.getAllProperties().subscribe((res)=>{
      console.log(res);
      this.property=res.data;
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
      this.service.getAllProperties().subscribe({
        next: (res) => {
          console.log(res);
          this.property= res.data;
          Swal.fire(`${res.message}`);
        },
        error: (error) => {
          console.log(error);
          Swal.fire(`${error.error.message}`);
        },
      });
  });
 
  }
}
