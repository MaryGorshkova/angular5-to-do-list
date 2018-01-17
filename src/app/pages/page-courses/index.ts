import {
  Component, OnDestroy,
  OnInit
} from '@angular/core';
import { Course, ICourse } from '../../components/course-item/types';
import {CoursesService} from '../../services/courses/index';
import { FilterPipe } from './filter/filter.pipe';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-page-courses',
  templateUrl: './page-courses.component.html',
  styleUrls: ['./page-courses.component.css']
})
export class PageCoursesComponent implements OnInit, OnDestroy {
  public courses: ICourse[];
  public filteredCourses: Course[];
  public getCourses$: Observable<Course[]>;
  public deleteCourses$: Observable<boolean>;

  constructor(
    private coursesService: CoursesService,
    private filterPipe: FilterPipe) {
  }

  ngOnInit() {
    this.getCourses$ = this.coursesService.getCourses();
  }

  ngOnDestroy() {

  }

  getCourses(): void {
    this.getCourses$ = this.coursesService.getCourses();
  }

  onDelete(course: Course): void {
    this.deleteCourses$ = this.coursesService.deleteCourse(course);
    this.deleteCourses$.subscribe(() => {
      this.getCourses();
    });
  }

  applySearch(searchQuery: string): void {
    this.filteredCourses = this.filterPipe.transform(this.courses, searchQuery);
  }
}
