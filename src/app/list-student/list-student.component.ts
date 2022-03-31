import { Component, OnInit } from '@angular/core';
import {IStudent} from '../istudent';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  student: IStudent = {
    id: 1,
    name: 'John lennon',
    mark: null,
    class: '11A2',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/85/John_Lennon_1969_%28cropped%29.jpg'
  };
  constructor() { }

  ngOnInit() {
  }

  getMark(value: any) {
    this.student.mark = value;
  }

  clear() {
    this.student.mark = null;
  }
}
