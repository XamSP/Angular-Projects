import { AuthorsService } from './services/authors.service';
import { CoursesService } from './services/courses.service';
import { UsernameValidatorsService } from './services/username-validators.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './pipes/title-case.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LikeComponent } from './like/like.component';
import { NavComponent } from './navbar/nav.component';
import { AboutComponent } from './about/about.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCasePipe,
    LikeComponent,
    NavComponent,
    AboutComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [
    CoursesService,
    AuthorsService,
    UsernameValidatorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
