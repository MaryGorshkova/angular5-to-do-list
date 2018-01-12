import { ChangeDetectionStrategy, EventEmitter, Component, Input, OnInit, Output } from '@angular/core';
import {Course} from './types';
import { CoursesService } from '../../services/courses/index';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course;

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
  }

  onDelete() {
    this.coursesService.deleteCourse(this.course);
  }

  onEdit() {
    console.log(this.course.id);
  }

}
