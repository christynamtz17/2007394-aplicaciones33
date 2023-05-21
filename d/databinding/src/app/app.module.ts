import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { FormTicketComponent } from './form-ticket/form-ticket.component';
import { CompraTicketComponent } from './compra-ticket/compra-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    FormTicketComponent,
    CompraTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }