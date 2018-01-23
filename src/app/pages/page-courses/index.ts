import {
  Component, OnDestroy,
  OnInit
} from '@angular/core';
import { Course } from '../../components/course-item/types';
import {CoursesService} from '../../services/courses/index';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-page-courses',
  templateUrl: './page-courses.component.html',
  styleUrls: ['./page-courses.component.css']
})
export class PageCoursesComponent implements OnInit, OnDestroy {
  public courses$: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.courses$ = this.coursesService.courses;
    this.coursesService.getCourses();
  }

  ngOnDestroy() {

  }

  // getCourses(): void {
  //   this.getCourses$ = this.coursesService.getCourses();
  // }

  onDelete(course: Course): void {
    this.coursesService.deleteCourse(course);
  }

  // applySearch(searchQuery: string): void {
  //   this.filteredCourses = this.filterPipe.transform(this.courses, searchQuery);
  // }
}
