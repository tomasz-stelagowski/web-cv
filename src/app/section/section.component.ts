import { Component, AfterContentInit, Input, ContentChildren } from '@angular/core';

@Component({
  selector: 'cv-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {

  @Input() sectionname = '';

  constructor() { }

}
