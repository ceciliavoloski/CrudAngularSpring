import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
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

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog) {
    // this.coursesDB = [];  é o courses acima, precisa inicializar ele dentro do constructor
    //this.coursesServices = new CoursesServices();
    this.courses$ = this.coursesService.myList().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar cursos.');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit() {}
}
