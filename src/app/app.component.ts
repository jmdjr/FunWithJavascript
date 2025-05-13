import { Component, OnInit } from '@angular/core';
import { AppTemplateBaseComponent, ComponentModule } from 'personal-site-template/src/app/app.component';
import { TextSectionComponent } from 'personal-site-template/src/app/Base/text-section/text-section.component';
import { HeaderService } from 'personal-site-template/src/app/services/header.service';
import { ProjectDataTrackerService } from 'personal-site-template/src/app/services/ProjectDataTracker.service';
import { DESCRIPTION } from '../assets/site.data';
import { LoadComponent } from './Components/Load/Load.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  imports: [AppTemplateBaseComponent]
})
export class AppComponent {

  modules: ComponentModule[] = [
    new ComponentModule(TextSectionComponent, { text: DESCRIPTION }),
    new ComponentModule(LoadComponent),
  ]

  constructor(private header: HeaderService,
    private project: ProjectDataTrackerService
  ) {
    this.header.heading = "Fun With JavaScript";
    this.project.name = "FunWithJavaScript";
  }
}
