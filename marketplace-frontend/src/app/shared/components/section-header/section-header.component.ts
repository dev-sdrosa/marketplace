import { Component, Input } from '@angular/core';
import { BreadCrumb } from '../../schemas/section-header.schema';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent {

  @Input({ required: true })
  headTitle: string;

  @Input({ required: true })
  @Input()
  breadCrumb: BreadCrumb[];

}
