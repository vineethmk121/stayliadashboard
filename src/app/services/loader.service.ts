import { Injectable } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(private spinner: NgxSpinnerService) { }

  showSpinner(){
    setTimeout(() => {
      this.spinner.show();  
    },0 );    
  }

  hideSpinner(){
    setTimeout(() => {
      this.spinner.hide();  
    },0 );
  }

}
