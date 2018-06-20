import { Component, OnInit } from '@angular/core';
import { About } from '../about';

@Component({
  selector: 'about-root',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

	about: About = {
		id: 1,
		name: 'Tour of heros'
	};

  constructor() { }

  ngOnInit() {
  }

}
