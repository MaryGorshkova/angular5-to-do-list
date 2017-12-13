import { Component, OnInit } from '@angular/core';
import {ICourse} from '../../components/course-item/types';
import {CoursesService} from '../../services/courses/index';

@Component({
  selector: 'app-page-courses',
  templateUrl: './page-courses.component.html',
  styleUrls: ['./page-courses.component.css']
})
export class PageCoursesComponent implements OnInit {
  public courses: ICourse[];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.update();
  }

  onDelete(course) {
    this.coursesService.deleteCourse(course);
    this.update();
  }

  update(): void {
    this.courses = this.coursesService.getCourses();
  }
}
