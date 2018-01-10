import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {PageCoursesComponent} from './pages/page-courses';
import {HeaderComponent} from './components/header';
import {FooterComponent} from './components/footer/footer.component';
import {CourseItemComponent} from './components/course-item';
import {CoursesService} from './services/courses';
import {LoginComponent} from './components/login/index';
import {AutenticationService} from './services/autentication/autentication.service';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

declare const require: any;

@NgModule({
  declarations: [
    AppComponent,
    PageCoursesComponent,
    HeaderComponent,
    FooterComponent,
    CourseItemComponent,
    LoginComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [
    CoursesService,
    AutenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
