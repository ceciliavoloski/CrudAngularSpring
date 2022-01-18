import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';
import { CourseInterface } from '../model/courseInterface';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '/assets/courses.json';

  constructor(private httpClient: HttpClient) {} // injeção de dependencia
  // é necessário importar esse módulo no app.module, para que possamos acessar os dados do DB em qualquer lugar

  myList() {
    return this.httpClient.get<CourseInterface[]>(this.API).pipe(
      first(),
      tap((courses) => console.log(courses))
    );
  }
  // o <> indica o tipo de variavel -> esse é um observable que retorna uma lista do tipo CourseInterface[]
}
