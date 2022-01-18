import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseInterface } from '../model/courseInterface';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  displayedColumns = ['name', 'category'];
  courses$: Observable<CourseInterface[]>; // é aquele "dataSource" do HTML

  //coursesService: CoursesService; Só consido declarar essa variavel no constructor, por causa do Injectable no courses.services

  constructor(private coursesService: CoursesService) {
    // this.coursesDB = [];  é o courses acima, precisa inicializar ele dentro do constructor
    //this.coursesServices = new CoursesServices();
    this.courses$ = this.coursesService.myList();
  }

  ngOnInit() {}
}
