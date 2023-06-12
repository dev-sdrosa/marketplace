import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { IndexComponent } from './pages/home/index/index.component';

const routes: Routes = [
	{
		path: '',
    component: LayoutComponent,
		children: [
      {
				path: '',
				component: IndexComponent
			},
			{
				path: 'auth',
				loadChildren: () => import( './pages/auth/auth.module' ).then( m => m.AuthModule )
			},
			{
				path: 'shop',
				loadChildren: () => import( './pages/shop/shop.module' ).then( m => m.ShopModule ),
			},
			{
				path: 'user',
				loadChildren: () => import( './pages/user/user.module' ).then( m => m.UserModule ),
			},
		]
	},
	{
		path: '**',
		redirectTo: '/pages/404'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, anchorScrolling: 'disabled', scrollPositionRestoration: 'disabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
