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
  @Output('onDelete') onDeleteEmitter: EventEmitter<any> = new EventEmitter();

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
  }

  onDelete() {
    this.onDeleteEmitter.emit(this.course);
  }

  onEdit() {
    console.log(this.course.id);
  }

}
