import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
export interface Filter {
  name: string;
}

@Component({
  selector: 'property-type-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  filters: Filter[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.filters.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Filter): void {
    const index = this.filters.indexOf(fruit);

    if (index >= 0) {
      this.filters.splice(index, 1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
