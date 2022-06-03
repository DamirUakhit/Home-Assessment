import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SubmittedFormComponent } from './submitted-form/submitted-form.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: BodyComponent },
      { path: 'submitted-form', component: SubmittedFormComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent,
    BodyComponent,
    SubmittedFormComponent,
    SidebarComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
