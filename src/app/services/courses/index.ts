import { Injectable } from '@angular/core';
import {Course} from '../../components/course-item/types';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CoursesService {

  private courses: Course[];

  private coursesSource = new Subject<Course[]>();
  courses$ = this.coursesSource.asObservable();

  public getCourses() {
    this.courses = require('./mocks/courses.json').map(e => new Course(e));
    this.coursesSource.next(this.courses);
  }

  // TODO: https://gist.github.com/jnizet/15c7a0ab4188c9ce6c79ca9840c71c4e

  public deleteCourse(course: Course): void {
    const index = this.courses.findIndex(e => e.id === course.id);
    this.courses.splice(index, 1);
    this.coursesSource.next(this.courses);
  }
}
