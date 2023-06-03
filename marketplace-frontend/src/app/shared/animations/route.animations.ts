import { transition, trigger, query, style, animate, animateChild } from '@angular/animations';

export const routeAnimation = trigger('routeAnimations', [
	transition('* <=> *', [
		query(':leave', [
			style({
				display: 'none'
			})
		], { optional: true }),
		query(':enter', [
			style({
				display: 'block',
				opacity: 0
			}),
			animate('300ms ease-in', style({ opacity: 1 })),
			animateChild()
		], { optional: true })
	])
]);
