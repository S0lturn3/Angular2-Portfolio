import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { ResumeSectionComponent } from './resume-section/resume-section.component';
import { ArtworksSectionComponent } from './artworks-section/artworks-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    AboutSectionComponent,
    HomeSectionComponent,
    ResumeSectionComponent,
    ArtworksSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
