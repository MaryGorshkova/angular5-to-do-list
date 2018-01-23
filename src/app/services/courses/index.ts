import {Injectable} from '@angular/core';
import {Course} from '../../components/course-item/types';
import {map, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CoursesService {

  private castCourses = new BehaviorSubject([]);
  public courses = this.castCourses.asObservable();

  constructor(private http: HttpClient) {
  }

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  public getCourses(): void {
    this.http.get<Course[]>('api/courses').pipe(
      map(courses => {
        return courses.filter(course => {
          let twoWeeksAgo = new Date();
          twoWeeksAgo = new Date(twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14));
          return new Date(course.creatingDate) > twoWeeksAgo;
        });
      }))
      .subscribe(courses => {
        this.castCourses.next(courses);
      });
  }

  // TODO: https://gist.github.com/jnizet/15c7a0ab4188c9ce6c79ca9840c71c4e

  public deleteCourse(course: Course): void {
    const url = `${'api/courses'}/${course.id}`;
    this.http.delete<Course>(url, this.httpOptions)
      .subscribe(() => {
        this.getCourses();
      });
  }
}
