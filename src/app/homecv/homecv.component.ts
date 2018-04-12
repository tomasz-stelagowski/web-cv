import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cv-homecv',
  templateUrl: './homecv.component.html',
  styleUrls: ['./homecv.component.scss']
})
export class HomecvComponent implements OnInit, AfterViewInit {

  private fragment: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector(`#${this.fragment}`).scrollIntoView();
    } catch (e) {
      window.scroll(0, 0);
    }
  }
}
