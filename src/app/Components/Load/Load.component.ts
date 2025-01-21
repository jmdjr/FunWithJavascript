import { Component, OnInit, Type } from '@angular/core';
import ComponentList, { ComponentListItem } from "./JSComponents/JsComponents.data"
import { DESCRIPTION } from '../../../assets/site.data';

@Component({
  selector: 'app-Load',
  templateUrl: './Load.component.html',
  styleUrls: ['./Load.component.css']
})
export class LoadComponent implements OnInit {
  componentList: ComponentListItem[] = ComponentList;
  selectedCardItemInputs: any;
  selectedCardItem: ComponentListItem = null;
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
