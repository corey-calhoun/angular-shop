import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {TopBarComponent} from "./components/top-bar/top-bar.component";
import { ProductListComponent } from './components/product-list/product-list.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { reducers, metaReducers, reducers, metaReducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TopBarComponent,
    ProductListComponent,
    LandingPageComponent,
    LoginPageComponent,
    ProductInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        {path: '', component: LandingPageComponent},
        {path: 'products', component: ProductListComponent},
        {path: 'products/:productId', component: ProductInfoComponent},
        {path: 'login', component: LoginPageComponent},
      ],
    ),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    StoreDevtoolsModule.instrument(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects, ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
