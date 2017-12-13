export interface ICourse {
  id: string;
  title: string;
  duration: number;
  creatingDate: number;
  description: string;
}

export class Course implements ICourse {
  public id;
  public title;
  public duration;
  public creatingDate;
  public description;

  constructor(item: ICourse) {
    const { id, title, duration, creatingDate, description } = item;
    this.id = id;
    this.title = title;
    this.duration = duration;
    this.creatingDate = new Date(creatingDate);
    this.description = description;
  }
}
