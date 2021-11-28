import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos() {
    return [
      { id: 1, nome: 'Angular  2', image: 'https://glue-labs.com/wp-content/uploads/2013/12/angular.png', description: 'Este é o curso de Angular' },
      { id: 2, nome: 'Java', image: 'https://pcsnetumbria.it/wp-content/uploads/2016/10/java.png', description: 'Este é o curso de JAVA' }
    ]
  }

  getCurso(id: number) {
    return this.getCursos().find(curso => curso.id == id)|| null;
  }

  constructor() { }
}
