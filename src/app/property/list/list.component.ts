import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropertyService } from '../property.service';
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
}
