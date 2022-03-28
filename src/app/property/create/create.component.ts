import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { HttpClient } from '@angular/common/http';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'property-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  propertyForm: any;
  center = { lat: 32.16515, lng: 74.184505 };
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

  constructor(private fb: FormBuilder, httpClient: HttpClient) {}

  ngOnInit(): void {
    this.propertyForm = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
    });
    this.ConfigForm = this.fb.group({
      Configuration: this.fb.array([this.addConfigGroup()]),
      details: this.fb.array([this.addSideBarControl()]),
      longitude: [null],
      latitude: [null],
      city: [null],
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
          longitude: lng,
          latitude: lat,
        });
      });
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
      } else {
        console.log('Place', place);
        let lat = place.geometry?.location?.lat() || 0;
        let lng = place.geometry?.location?.lng() || 0;
        this.center = { lat: lat, lng: lng };

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
      configDEsImg: [null],
    });
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
}
