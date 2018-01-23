import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import {AppComponent} from './app.component';
import {PageCoursesComponent} from './pages/page-courses';
import {HeaderComponent} from './components/header';
import {FooterComponent} from './components/footer/footer.component';
import {CourseItemComponent} from './components/course-item';
import {CoursesService} from './services/courses';
import {LoginComponent} from './components/login/index';
import {AutenticationService} from './services/autentication/autentication.service';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FilterPipe } from './pages/page-courses/filter/filter.pipe';
import {InMemoryDataService} from './services/data-service/in-memory-data-service';

declare const require: any;

@NgModule({
  declarations: [
    AppComponent,
    PageCoursesComponent,
    HeaderComponent,
    FooterComponent,
    CourseItemComponent,
    LoginComponent,
    ToolbarComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    CoursesService,
    AutenticationService,
    FilterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
