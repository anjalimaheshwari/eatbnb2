import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { EatbnbComponent } from './eatbnb/eatbnb.component';
import { ProductModule } from './products/product.module';
import { BasicComponent } from './basic/basic.component';
import { EatbnbService } from './eatbnb/eatbnb.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent, 
    EatbnbComponent, BasicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'basic', component: BasicComponent},
      { path: 'eatbnb', component: EatbnbComponent },
        { path: 'welcome', component: WelcomeComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full'},
        { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    ProductModule
  ],
  providers: [EatbnbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
