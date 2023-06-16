import { Component, ElementRef, OnInit } from '@angular/core';
import { NewItemForm } from 'src/app/shared/model/item-creation.model';
import { BreadCrumb } from 'src/app/shared/schemas/section-header.schema';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import * as fromApp from 'src/app/core/ngrx/reducers/app.reducer';
import { getUserSelector } from 'src/app/pages/auth/store/auth.selectors';
import { AuthData } from 'src/app/pages/auth/model/auth.model';
import { ItemService } from 'src/app/shared/services/item.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {

  newItemForm = new NewItemForm('', '', '', '', undefined)
  breadCrumb: BreadCrumb[] = [
    {
      routeName: "Home",
      route: "/"
    },
    {
      routeName: "Profile",
      route: "/user/detail"
    },
    {
      routeName: "Create Item",
      route: "/user/new-item"
    }
  ]


  currentFile?: {
    file: File,
    url: SafeUrl
  }

  catValue = '';
  catId?: string;
  categoriesData = []
  user: AuthData;

  constructor (
    private sanitizer: DomSanitizer,
    private store: Store<fromApp.AppState>,
    private itemService: ItemService,
    private el: ElementRef,
    private router: Router,
    private toastService: ToastrService
  ) {

  }

  ngOnInit(): void {
    this.store
      .select(getUserSelector)
      .pipe(filter((auth): auth is AuthData => !!auth))
      .subscribe((rp) => {
        this.user = rp;
    });
    this.itemService.getItemCategories().subscribe(
      rp => this.categoriesData = rp.data
    );
  }

  onFileChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.currentFile = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      };
    }
  }

  onDropdown(event: Event) {
    event.stopPropagation()
    let caret = (event.currentTarget as HTMLElement).querySelector('.caret');
    let dropdown = (this.el.nativeElement as HTMLElement).querySelector('.dropdown-list');
    if (caret?.classList.contains('rotate-caret')) {
      caret.classList.remove('rotate-caret');
      dropdown?.classList.remove('show-dropdown');
    } else {
      caret?.classList.add('rotate-caret');
      dropdown?.classList.add('show-dropdown');
    }
  }

  onValueSelect(event: Event, catId: string) {
    let lis = this.el.nativeElement.querySelectorAll('.dropdown-list > li');

    for (let li of lis) {
      if (li.classList.contains('selected-value')) {
        li.classList.remove('selected-value');
      }
    }

    const catValue = (event.currentTarget as HTMLElement).querySelector('span')?.innerText;
    this.catValue = catValue;
    this.catId = catId;
    (event.currentTarget as HTMLElement).classList.add('selected-value');
    
  }

  createItem() {
    this.itemService.createItem({
      name: this.newItemForm.name,
      content: this.newItemForm.description,
      description: this.newItemForm.description,
      image: this.currentFile.file.name,
      price: this.newItemForm.price,
      category: this.catId
    }).subscribe(
      rp => this.router.navigate(['user']).then(
        () => this.toastService.success('Item created!')
      )
    )
  }

}
