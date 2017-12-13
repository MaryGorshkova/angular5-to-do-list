import { Injectable } from '@angular/core';
import {Course} from '../../components/course-item/types';

@Injectable()
export class CoursesService {

  private courses: Course[];

  constructor() {
    this.courses = this.getCourses();
  }

  public getCourses(): Course[] {
    if (this.courses) {
      return this.courses;
    }
    const data = require('./mocks/courses.json');
    return data.map(e => new Course(e));
  }

  // TODO: https://gist.github.com/jnizet/15c7a0ab4188c9ce6c79ca9840c71c4e

  public deleteCourse(course: Course): void {
    const index = this.courses.findIndex(e => e.id === course.id);
    this.courses.splice(index, 1);
  }
}
