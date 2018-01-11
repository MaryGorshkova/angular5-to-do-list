import { Component, OnInit } from '@angular/core';
import { Course, ICourse } from '../../components/course-item/types';
import {CoursesService} from '../../services/courses/index';
import { FilterPipe } from './filter/filter.pipe';

@Component({
  selector: 'app-page-courses',
  templateUrl: './page-courses.component.html',
  styleUrls: ['./page-courses.component.css']
})
export class PageCoursesComponent implements OnInit {
  public courses: ICourse[];
  public filteredCourses: Course[];

  constructor(
    private coursesService: CoursesService,
    private filterPipe: FilterPipe) { }

  ngOnInit() {
    this.update();
  }

  onDelete(course) {
    this.coursesService.deleteCourse(course);
    this.update();
  }

  update(): void {
    this.courses = this.filteredCourses = this.coursesService.getCourses();
  }

  applySearch(searchQuery: string): void {
    this.filteredCourses = this.filterPipe.transform(this.courses, searchQuery);
  }
}
