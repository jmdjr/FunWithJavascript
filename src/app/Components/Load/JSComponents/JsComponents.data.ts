import { Type } from "@angular/core";
import { DecodersComponent } from "./Decoders/Decoders.component";
import { RpslsComponent } from "./RPSLS/rpsls.component";

export interface ComponentListItem {
  name: string;
  component: Type<unknown>
}

const list: ComponentListItem[] = [
  {
    name: "Decoder",
    component: DecodersComponent
  },
  {
    name: "Rock / Paper / Scissors / Lizard / Spock",
    component: RpslsComponent
  }
]

export default list