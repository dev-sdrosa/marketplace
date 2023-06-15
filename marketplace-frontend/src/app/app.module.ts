import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducers, metaReducers } from './core/ngrx/reducers/app.reducer';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LayoutComponent } from './shared/layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { ShopModule } from './pages/shop/shop.module';
import { AuthModule } from './pages/auth/auth.module';
import { HomeModule } from './pages/home/home.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserModule } from './pages/user/user.module';
import { ToastrModule } from 'ngx-toastr';
import { authReducer } from './pages/auth/store/auth.reducers';
import { AuthEffects } from './pages/auth/store/auth.effects';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InternalInterceptor } from './shared/services/internal.interceptor';
import { AuthInterceptor } from './pages/auth/services/auth.interceptor';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://3.87.231.179:5000', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HomeModule,
    ShopModule,
    SharedModule,
    UserModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot(appReducers, { metaReducers }),
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forRoot([AuthEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    StoreDevtoolsModule.instrument(),
    SocketIoModule.forRoot(config)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
