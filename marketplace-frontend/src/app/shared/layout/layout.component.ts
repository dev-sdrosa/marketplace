import { ChangeDetectorRef, Component, OnInit, AfterViewChecked } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimation } from '../animations/route.animations';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
		routeAnimation
	]
})
export class LayoutComponent implements OnInit, AfterViewChecked {

  constructor(private changeRef: ChangeDetectorRef) {}

  ngOnInit(): void {

	}

  ngAfterViewChecked(): void { this.changeRef.detectChanges(); }

  prepareRoute (outlet: RouterOutlet) {
		return outlet && outlet.isActivated && outlet.activatedRoute && outlet.activatedRoute.url;
	}
}
