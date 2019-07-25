import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'students-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

public students=[];

  constructor(private _studService:StudentsService) { }

  ngOnInit() {
    this._studService.getstudents()
    .subscribe(data => this.students=data);
  }

}
