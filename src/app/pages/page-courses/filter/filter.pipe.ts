import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../../components/course-item/types';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: Course[], filter: string): Course[] {
    return values.filter(value => value.title.indexOf(filter) !== -1);
  }

}
