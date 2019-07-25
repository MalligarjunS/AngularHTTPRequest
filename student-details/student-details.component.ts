import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'students-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  public students=[];
  constructor(private _studentService : StudentsService) { }

  ngOnInit() {
    this._studentService.getstudents()
    .subscribe(data =>this.students=data);
  }

}
