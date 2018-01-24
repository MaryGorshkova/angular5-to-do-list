import {Injectable} from '@angular/core';
import {Course} from '../../components/course-item/types';
import {map, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export const COURSES_URL = 'api/courses';


@Injectable()
export class CoursesService {

  private castCourses = new BehaviorSubject([]);
  public courses = this.castCourses.asObservable();

  private searchTerm: string;

  constructor(private http: HttpClient) {
  }

  get initSearch(): string {
    return this.searchTerm;
  }

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  public getCourses(): void {
    const url = this.searchTerm ? `${COURSES_URL}/?title=${this.searchTerm}` : COURSES_URL;
    this.http.get<Course[]>(url).pipe(
      map(courses => this.filterByDate(courses))
    )
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

  public applySearch(term: string): void {
    this.searchTerm = term;
    this.getCourses();
  }

  filterByDate(courses): Course[] {
    return courses.filter(course => {
      let twoWeeksAgo = new Date();
      twoWeeksAgo = new Date(twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 30));
      return new Date(course.creatingDate) > twoWeeksAgo;
    });
  }

}
