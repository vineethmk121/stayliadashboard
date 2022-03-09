import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'property-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  propertyForm: any;


  constructor(private fb :FormBuilder) { }

  ngOnInit(): void {
    this.propertyForm= this.fb.group({
      title:[null,Validators.required ],
      description:[null,Validators.required ],
    })
  }
  onFieldChange(){
    console.log(this.propertyForm.value);
    
    
  }

}
