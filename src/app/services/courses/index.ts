import { Injectable } from '@angular/core';
import {Course} from '../../components/course-item/types';
// import { Subject } from 'rxjs/Subject';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';

@Injectable()
export class CoursesService {

  private courses: Course[];

  public getCourses(): Observable<Course[]> {
    if (!this.courses) {
      this.courses = require('./mocks/courses.json').map(e => new Course(e));
    }
    return of([].concat(this.courses)).pipe(
      map(courses => {
        return courses.filter(course => {
          let twoWeeksAgo = new Date();
          twoWeeksAgo = new Date(twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14));
          return new Date(course.creatingDate) > twoWeeksAgo;
        });
      }),
    );
  }

  // TODO: https://gist.github.com/jnizet/15c7a0ab4188c9ce6c79ca9840c71c4e

  public deleteCourse(course: Course): Observable<boolean> {
    const index = this.courses.findIndex(e => e.id === course.id);
    this.courses.splice(index, 1);
    return of(true);
  }
}
