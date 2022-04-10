import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';



import { AppRoutingModule } from './app-routing.module';

import { PageModule } from './page/page.module';
import { AuthModule } from './auth/auth.module';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


@NgModule({
  declarations: [
    AppComponent,    
    NopagefoundComponent,      
  ],
  imports: [
    BrowserModule,AppRoutingModule,PageModule,AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
