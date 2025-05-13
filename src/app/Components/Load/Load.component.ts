import { Component, OnInit } from '@angular/core';
import ComponentList, { ComponentListItem } from "./JSComponents/JsComponents.data"
import { DESCRIPTION } from '../../../assets/site.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-Load',
  templateUrl: './Load.component.html',
  styleUrls: ['./Load.component.css'],
  imports: [CommonModule]
})
export class LoadComponent implements OnInit {
  componentList: ComponentListItem[] = ComponentList;
  selectedCardItemInputs: any;
  selectedCardItem: ComponentListItem;
  description: string = DESCRIPTION;

  get isCardSelected(): boolean {
    return !!this.selectedCardItem;
  }

  get selectedCardItemComponent() {
    return this.selectedCardItem?.component;
  }

  ngOnInit() {

  }

  cardSelected(listItem) {
    // set the card item for the next list
    this.selectedCardItem = listItem;
  }

  unselectCard() {
    this.selectedCardItem = null;
  }
}
