import { Directive, Renderer2, HostListener } from '@angular/core';

@Directive({
	selector: '[tabClick]'
})
export class TabClickDirective {

	constructor(private render: Renderer2) { }

	@HostListener('click', ['$event'])
	onClick(e: any) {
		const parent = (e.target as Element).closest('[role="tablist"]');
		const activeLink = parent!.querySelector('[role="tab"].active');

		if (activeLink) {
			this.render.removeClass(activeLink, 'active');
		}

		const currentLink = (e.target as Element).closest('[role="tab"]');
		if (currentLink) {
			this.render.addClass(currentLink, 'active');
		}

		e.preventDefault();
	}
}
