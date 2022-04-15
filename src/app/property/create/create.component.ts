import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { HttpClient } from '@angular/common/http';
import { Loader } from '@googlemaps/js-api-loader';
import { PropertyService } from '../property.service';
import { MatDialog } from '@angular/material/dialog';

import Swal from 'sweetalert2'
@Component({
  selector: 'property-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  addImg:any;
  ImagePreview!: string;
  country: any[] = [];
  Property_type: any[] = [];
  overView: any[] = [];
  amenities: any[] = [];
  bedType: any[] = [];
  furType: any[] = [];
  tags: any[] = [];
  proCat: any[] = [];
  agentList: any[] = [];
  additionalInfo: any[] =[];
  propertyForm: any;
  center = { lat: 32.16515, lng: 74.184505 };
  user:any;
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    // uploadUrl: 'v1/image',
    // upload: (file: File) => { ... }
    // uploadWithCredentials: false,
    // sanitize: true,
    // toolbarPosition: 'top',
    toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']],
  };
  editorConfigDes: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: '717px',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    // uploadUrl: 'v1/image',
    // upload: (file: File) => { ... }
    // uploadWithCredentials: false,
    // sanitize: true,
    // toolbarPosition: 'top',
    toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']],
  };
  isAdding: boolean = false;
  Amenties: Array<any> = [
    { name: 'Pear', value: 'pear' },
    { name: 'Plum', value: 'plum' },
    { name: 'Kiwi', value: 'kiwi' },
    { name: 'Apple', value: 'apple' },
    { name: 'Lime', value: 'lime' },
  ];
  ConfigForm: any;
  SideBar!: FormGroup;
  map!: google.maps.Map;

  constructor(
    private fb: FormBuilder,
    httpClient: HttpClient,
    private service: PropertyService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.user = localStorage.getItem('data');
    this.user = JSON.parse(this.user);
   
    this.ConfigForm = this.fb.group({
       details: this.fb.array([this.addSideBarControl()]),
      title: [null, Validators.required],
      description: [null, Validators.required],
      // lng: [null, Validators.required],
      //  lat: [null, Validators.required],
      city: [null, Validators.required],
      status: [null, Validators.required],
      totalArea: [null, Validators.required],
      totalLaunchedApparments: [null, Validators.required],
      availability: [null, Validators.required],
      editor: [null, Validators.required],
      country:[null, Validators.required],
      address: [null, Validators.required],
      neighbourHood: [null, Validators.required],
      flatNumber: [null, Validators.required],
      street: [null, Validators.required],
      countryCode: [null, Validators.required],
      sellingPrice: [null, Validators.required],
      // lblPrice: [null, Validators.required],
      state: [null, Validators.required],
      discountPrice: [null, Validators.required],
      // area: [null, Validators.required],
      totalBedRooms: [null, Validators.required],
      totalBatRooms: [null, Validators.required],
      deposite: [null, Validators.required],
      rent: [null, Validators.required],
      additionalInfo: [null, Validators.required],
      propertyCode: [null, Validators.required],
      licenseNumber: [null, Validators.required],
      totalRoomCounts: [null, Validators.required],
      // unitCount: [null, Validators.required],
      propertyAge: [null, Validators.required],
      areaId: [null, Validators.required],
      agent: [null, Validators.required],
      // amenities: this.fb.array([], [Validators.required]),
      gallaryImages:[null,Validators.required],
      sliderImages:[null,Validators.required],
      propertyPlan:[null,Validators.required],
      overView:[null, Validators.required],
      amenities:[null, Validators.required],
      bedRoomTypes:[null, Validators.required],
      furnishingTypes:[null, Validators.required],
      tags:[null, Validators.required],
      propertyType:[null,Validators.required],
      contructonId:[null,Validators.required],
      landStatusId:[null,Validators.required],
      furnishingStatusId:[null,Validators.required],
      agency:['620f78e73be80b47580554d0'],
      createdBy:[this.user?.userId],
      listedDate:[null,Validators.required],
      setAsFeature:[null,Validators.required],
      propertySaleType:[null,Validators.required],
      permit:[null,Validators.required],
      areaSqrFt:[null,Validators.required]
    });

    let loader = new Loader({
      apiKey: 'AIzaSyC4jbXYiXRoJaH7FweGyLRsqW_U3rIbT90&libraries=places',
    });
    loader.load().then(() => {
      this.map = new google.maps.Map(
        document.getElementById('map') as HTMLElement,
        {
          center: { lat: 32.16515, lng: 74.184505 },
          zoom: 12,
        }
      );
      const marker = new google.maps.Marker({
        position: this.center,
        map: this.map,
        draggable: true,
      });
      this.autoCompletePlace(marker);
      google.maps.event.addListener(marker, 'dragend', (evt: any) => {
        let lat = evt.latLng.lat().toFixed(6);
        let lng = evt.latLng.lng().toFixed(6);
        console.log(lat, lng);
        this.map.panTo(evt.latLng);
        this.ConfigForm.patchValue({
          lng: lng,
          lat: lat,
        });
      });
    });
    this.service.getCountries().subscribe((res) => {
      this.country = res.data;
      console.log(this.country);
    });
    this.service.propertyType().subscribe((res) => {
      this.Property_type = res.data;
      console.log(this.Property_type);
    });
    this.service.getAllOverview().subscribe((res) => {
      this.overView = res.data;
      console.log(this.overView);
    });
    this.service.getAmenities().subscribe((res) => {
      this.amenities = res.data;
      console.log(this.amenities);
    });
    this.service.getbedroom().subscribe((res) => {
      this.bedType = res.data;
      console.log(this.bedType);
    });
    this.service.furnishingType().subscribe((res) => {
      this.furType = res.data;
      console.log(this.furType);
    });
    this.service.getAlltags().subscribe((res) => {
      this.tags = res.data;
      console.log(this.tags);
    });
    this.service.getPropertyCat().subscribe((res) => {
      this.proCat = res.data;
      console.log(this.proCat);
    });
    this.service.getAdditionalInfo().subscribe((res)=>{
      console.log(res);
      this.additionalInfo=res.data;
    })
    this.service.getAgent().subscribe((res) => {
      this.agentList = res.data;
      console.log('agent');
      console.log(this.agentList);
    });
  }

  autoCompletePlace(marker: google.maps.Marker) {
    const center = { lat: 32.16515, lng: 74.184505 };
    const defaultBounds = {
      north: center.lat + 0.1,
      south: center.lat - 0.1,
      east: center.lng + 0.1,
      west: center.lng - 0.1,
    };
    const input = document.getElementById('pac-input') as HTMLInputElement;
    const options = {
      bounds: defaultBounds,
      componentRestrictions: { country: 'pk' },
      fields: ['address_components', 'geometry', 'icon', 'name'],
      strictBounds: false,
      types: ['establishment'],
    };

    const autocomplete = new google.maps.places.Autocomplete(input, options);
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (!place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        alert('No details available for input:' + input.value);
        return;
      } 
      else 
      {
        console.log('Place', place);
        let lat = place.geometry?.location?.lat() || 0;
        let lng = place.geometry?.location?.lng() || 0;
        this.center = { lat: lat, lng: lng }
        const LatLng = new google.maps.LatLng(lat, lng);
        marker.setPosition(LatLng);
        this.map.panTo(LatLng);
        this.ConfigForm.patchValue({
          longitude: lng,
          latitude: lat,
        });
        return;
      }
    });
  }
  addSideBarControl() {
    return this.fb.group({
      detail: [null],
    });
  }
  onClickAddRowSidebar() {
    this.DetailsArray.push(this.addSideBarControl());
    console.log(this.SideBar.value);
  }
  onClickRemoveSidebar(index: number) {
    this.DetailsArray.removeAt(index);
  }

  addConfigGroup() {
    return this.fb.group({
      configImage: [null],
      configTitle: [null],
      configDescription: [null],
      configDesImg: [null],
    });
  }
  getIndex(i: number, file: any, e: any) {
    if (file.id === 'configImage') {
      let file = e.target.files[0];
      this.ConfigArray.at(i).patchValue({ configImage: file });
    }
    if (file.id === 'configDesImg') {
      let file = e.target.files[0];
      this.ConfigArray.at(i).patchValue({ configDesImg: file });
    }

    console.log(this.ConfigArray.at(i).patchValue({ configTitle: 'adssad' }));
    console.log(file.id);
  }
  onClickAddRowConfig() {
    this.ConfigArray.push(this.addConfigGroup());
    console.log(this.ConfigForm.value);
  }
  onClickRemoveConfig(index: number) {
    this.ConfigArray.removeAt(index);
  }
  onFieldChange() {
    console.log(this.propertyForm.value);
  }
 

  get ConfigArray() {
    return <FormArray>this.ConfigForm.get('Configuration');
  }
  get DetailsArray() {
    return <FormArray>this.ConfigForm.get('details');
  }
  checkBoxvalue(event:any){
  const amenities: FormArray = this.ConfigForm.get('amenities') as FormArray;
  console.log(amenities);
  if(event.target.checked){
      amenities.push(new FormControl(event.target.value));
  }
  else{
    let i : number = 0;
    amenities.controls.forEach((item: any)=>{
      if(item.value == event.target.value){
        amenities.removeAt(i);
        return;
      }
      i++;
    });
  }
  }
  checkBoxvalue1(event:any){
    const setAsFeature: FormArray = this.ConfigForm.get('setAsFeature') as FormArray;
    console.log(setAsFeature);
    if(event.target.checked){
      setAsFeature.push(new FormControl(event.target.value));
    }
    else{
      let i : number = 0;
      setAsFeature.controls.forEach((item: any)=>{
        if(item.value == event.target.value){
          setAsFeature.removeAt(i);
          return;
        }
        i++;
      });
    }
    }
  uploadFiles(event: any) : void {
    const file = event.target.files;
    console.log(file);

    this.ConfigForm.patchValue({
      gallaryImages: file,
    });
    // const reader = new FileReader();
    // reader.onload = () => {
    //   this.ImagePreview = reader.result as string;
    // };
    // if (file) {
    //   reader.readAsDataURL(file);
    // }
  }
  uploadFiles1(event: any) : void {
    const file = event.target.files;
    console.log(file);

    this.ConfigForm.patchValue({
      sliderImages: file,
    });
    // const reader = new FileReader();
    // reader.onload = () => {
    //   this.ImagePreview = reader.result as string;
    // };
    // if (file) {
    //   reader.readAsDataURL(file);
    // }
  }
  uploadFiles2(event: any) : void {
    const file = event.target.files;
    console.log(file);

    this.ConfigForm.patchValue({
      propertyPlan: file,
    });
    // const reader = new FileReader();
    // reader.onload = () => {
    //   this.ImagePreview = reader.result as string;
    // };
    // if (file) {
    //   reader.readAsDataURL(file);
    // }
  }
  uploadFiles3(event: any) : void {
    const file = event.target.files;
    console.log(file);
    this.addImg = file[0].name;
    console.log(this.addImg);
    this.ConfigForm.patchValue({
      addImg: file,
    });
   
    
    // const reader = new FileReader();
    // reader.onload = () => {
    //   this.ImagePreview = reader.result as string;
    // };
    // if (file) {
    //   reader.readAsDataURL(file);
    // }
  }
  onSubmit() {
console.log('saad');
    console.log(this.ConfigForm.value);
    console.log(this.ConfigForm);
    if (this.ConfigForm.invalid) {
      // Object.keys(this.amenForm.controls).forEach((key) => {
      //   this.amenForm.controls[key].markAsTouched();
      // });
      this.ConfigForm.markAllAsTouched();
      return;
    }
    // if (this.ConfigForm.invalid) {
    //   Object.keys(this.ConfigForm.controls).forEach((key) => {
    //     this.ConfigForm.controls[key].markAsTouched();
    //   });
    //   return;
    // }
    const UserForm = this.ConfigForm.value;
    let formData = new FormData();
    for (let x in UserForm) {
      formData.append(`${x}`, UserForm[x]);
    }
    this.service.createNewProperty(formData).subscribe({
      next: (res) => {
        console.log(res);
        this.ConfigForm= res.data;
        Swal.fire(`${res.message}`);
      },
      error: (error) => {
        console.log(error);
        Swal.fire(`${error.error.message}`);
      }
    });
  }
  get userFormControl() {
    return this.ConfigForm.controls;
  }
}
