import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from './types';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course;
  @Output() deleteCourse: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.deleteCourse.emit(this.course.id);
  }

}
