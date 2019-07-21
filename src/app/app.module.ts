import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import {AuthModule} from './auth/auth.module';
import {SelectivePreloadingStrategyService} from './selective-preloading-strategy.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HeroesModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [SelectivePreloadingStrategyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
