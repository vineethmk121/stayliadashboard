import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { Router,ActivatedRoute } from "@angular/router";
import { PropertyService } from '../property.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import Swal from 'sweetalert2';
@Component({
  selector: 'property-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
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
  propertyId:string|any;
  ConfigForm: any;
  user:any;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private propertyService:PropertyService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('data');
    this.user = JSON.parse(this.user);
    this.propertyId = this.activatedRoute.snapshot.params['id'];
    this.propertyId && this.getProperty();


    this.ConfigForm = this.fb.group({
      // Configuration: this.fb.array([this.addConfigGroup()]),
      // details: this.fb.array([this.addSideBarControl()]),
      title: [null, Validators.required],
      description: [null, Validators.required],
      lng: [null, Validators.required],
       lat: [null, Validators.required],
      city: [null, Validators.required],
      // status: [null, Validators.required],
      // totalArea: [null, Validators.required],
      // totalLaunchedApparments: [null, Validators.required],
      // availability: [null, Validators.required],
      // editor: [null, Validators.required],
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
    this.propertyService.getCountries().subscribe((res) => {
      this.country = res.data;
      console.log(this.country);
    });
    this.propertyService.propertyType().subscribe((res) => {
      this.Property_type = res.data;
      console.log(this.Property_type);
    });
    this.propertyService.getAllOverview().subscribe((res) => {
      this.overView = res.data;
      console.log(this.overView);
    });
    this.propertyService.getAmenities().subscribe((res) => {
      this.amenities = res.data;
      console.log(this.amenities);
    });
    this.propertyService.getbedroom().subscribe((res) => {
      this.bedType = res.data;
      console.log(this.bedType);
    });
    this.propertyService.furnishingType().subscribe((res) => {
      this.furType = res.data;
      console.log(this.furType);
    });
    this.propertyService.getAlltags().subscribe((res) => {
      this.tags = res.data;
      console.log(this.tags);
    });
    this.propertyService.getPropertyCat().subscribe((res) => {
      this.proCat = res.data;
      console.log(this.proCat);
    });
    this.propertyService.getAdditionalInfo().subscribe((res)=>{
      console.log(res);
      this.additionalInfo=res.data;
    })
    this.propertyService.getAgent().subscribe((res) => {
      this.agentList = res.data;
      console.log('agent');
      console.log(this.agentList);
    });
  }

  getProperty(){
    this.propertyService.getProperty(this.propertyId).subscribe(res=>{
      console.log("Res",res);
      this.ConfigForm.patchValue({
        title: res.data.title,
      description: res.data.description,
      lng: [null, Validators.required],
       lat: [null, Validators.required],
      city: res.data.city,
      // status: [null, Validators.required],
      // totalArea: [null, Validators.required],
      // totalLaunchedApparments: [null, Validators.required],
      // availability: [null, Validators.required],
      // editor: [null, Validators.required],
      country:res.data.country,
      address: res.data.address,
      neighbourHood: res.data.neighbourHood,
      flatNumber: res.data.flatNumber,
      street: res.data.street,
      countryCode: res.data.country.countryCode,
      sellingPrice: res.data.sellingPrice,
      // lblPrice: [null, Validators.required],
      state: res.data.state,
      discountPrice: res.data.discountPrice,
      // area: [null, Validators.required],
      totalBedRooms: res.data.totalBedRooms,
      totalBatRooms: res.data.totalBatRooms,
      deposite: res.data.deposite,
      rent: res.data.rent,
      additionalInfo: res.data.additionalInfo[0].title,
      propertyCode: res.data.propertyCode,
      licenseNumber: res.data.licenseNumber,
      totalRoomCounts: res.data.totalRoomCounts,
      // unitCount: [null, Validators.required],
      propertyAge: res.data.propertyAge,
      areaId:res.data.areaId,
      agent: res.data.agent,
      // amenities: this.fb.array([], [Validators.required]),
      gallaryImages:res.data.gallaryImages,
      sliderImages:res.data.sliderImages,
      propertyPlan:res.data.propertyPlan,
      overView:res.data.overView,
      amenities:res.data.amenities,
      bedRoomTypes:res.data.bedRoomTypes,
      furnishingTypes:res.data.furnishingTypes,
      tags:res.data.tags,
      propertyType:res.data.propertyType,
      contructonId:res.data.contructonId,
      landStatusId:res.data.landStatusId,
      furnishingStatusId:res.data.furnishingStatusId,
      agency:res.data.agency,
      createdBy:res.data.createdBy,
      listedDate:res.data.listedDate,
      setAsFeature:res.data.setAsFeature,
      propertySaleType:res.data.propertySaleType,
      permit:res.data.permit,
      areaSqrFt:res.data.areaSqrFt
      })
    },
    (err:any)=>{
      console.log("error",err);
    })
  }
  get userFormControl() {
    return this.ConfigForm.controls;
  }
  editorConfigDes: AngularEditorConfig = {
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
  onSubmit() {
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
    this.propertyService.createNewProperty(formData).subscribe({
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
}
