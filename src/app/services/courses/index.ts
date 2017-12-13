import { Injectable } from '@angular/core';
import {Course} from '../../components/course-item/types';

@Injectable()
export class CoursesService {

  private courses: Course[];

  constructor() {
    this.courses = this.getCourses();
  }

  public getCourses(): Course[] {
    const data = require('./mocks/courses.json');
    return data.map(e => new Course(e));
  }

  public deleteCourse(course: Course): void {
    const index = this.courses.findIndex(e => e.id === course.id);
    this.courses.splice(index, 1);
  }
}
