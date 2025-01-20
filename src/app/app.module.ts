import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoadComponent } from './Components/Load/Load.component';
import { DecodersComponent } from './Components/Load/JSComponents/Decoders/Decoders.component';

@NgModule({
  declarations: [
    AppComponent
    , HeaderComponent
    , FooterComponent
    , LoadComponent
    , DecodersComponent
  ],
  imports: [
    BrowserModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
