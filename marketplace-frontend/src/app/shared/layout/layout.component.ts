import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  ngOnInit(): void {
	}

  prepareRoute (outlet: RouterOutlet) {
		return outlet && outlet.isActivated && outlet.activatedRoute && outlet.activatedRoute.url;
	}
}
