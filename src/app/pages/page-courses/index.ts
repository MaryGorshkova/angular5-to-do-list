import { Component, OnInit } from '@angular/core';
import {ICourse} from '../../components/course-item/types';
import {CoursesService} from '../../services/courses/index';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page-courses',
  templateUrl: './page-courses.component.html',
  styleUrls: ['./page-courses.component.css']
})
export class PageCoursesComponent implements OnInit {
  public courses: ICourse[];

  constructor(private coursesService: CoursesService,
              private modal: NgbModal) { }

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }

  onDelete(course, content) {
    debugger;
    this.coursesService.deleteCourse(course.id);
  }
}
