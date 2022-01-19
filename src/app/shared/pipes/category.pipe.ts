import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})

//pipe: transforma valores, dado um valor vou ter uma lógica e vou retornar um certo valor transformado
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'front-end': return 'code';
      case 'back-end': return 'computer';
    }
    return 'code';
  }

}
