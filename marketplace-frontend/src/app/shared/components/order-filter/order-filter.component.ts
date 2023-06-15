import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-filter',
  templateUrl: './order-filter.component.html',
  styleUrls: ['./order-filter.component.scss']
})
export class OrderFilterComponent {

  @Input()
  paramName = 'sort';

  @Input()
  filters = [{
    name: 'Recently Added',
    filter: 'newest'
  }, 
  {
    name: 'Latest Added',
    filter: 'latest'
  }];

  valueIndex = 0;

  constructor(
    private el: ElementRef,
    private router: Router
  ) { 
  }

  ngOnInit(): void {

  }

  changeParams(value: any) {
		return this.router.navigate(
      [], 
      { 
        queryParams: { [this.paramName]: value }, 
        queryParamsHandling: 'merge' 
      }
    );
	}

  nexFilter() {
    if (this.valueIndex + 1 > this.filters.length - 1) {
      this.changeParams(this.filters[0].filter);
      this.valueIndex = 0;
    } else {
      this.changeParams(this.filters[this.valueIndex + 1].filter);
      this.valueIndex++;
    }
  }

  get value () {
    return this.filters[this.valueIndex].name
  }

}
