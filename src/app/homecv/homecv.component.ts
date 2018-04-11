import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cv-homecv',
  templateUrl: './homecv.component.html',
  styleUrls: ['./homecv.component.scss']
})
export class HomecvComponent implements OnInit {

  constructor() { }

  employment = data["employment"];

  ngOnInit() {
  }

}

let emp = (name, position, start, end, techs, desc) => ({
  companyName: name,
  position: position,
  start: start,
  end: end,
  techs: techs,
  desc: desc
});

let data = {
  "employment":[
    emp("Eracent Sp. z o.o.", "Full-Stack Developer", "May 2017", "now",
      ["Angular 5", "BackboneJS", "Bootstrap 4", "Angular Material", ".NET MVC", "Python"],
      [
        "Architectured and designed front-end, for visual web editor for SQL queries, using Angular 5, NgRedux, Bootstrap4, Angular Material ",
        "Designed, highly modular Allocation Engine, for automatic software to license allocation problem.",
        "Designed BackboneJS based architecture for Front-End Part of new application and implemented it.",
        "Rewritten whole application from .NET MVC to Angular 5."
      ]),
    emp("Accenture", "Front-End Developer", "May 2016", "February 2017",
      ["BackboneJS"],
      [
        "Designed pageable infinite scroll component.",
        "Implemented several views and components for CRM application product.",
        "Ported Web Application to tablets using Android studio."
      ])
  ],
  "education": [

  ]

};
