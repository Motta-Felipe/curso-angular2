import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.scss']
})
export class OperadorElvisComponent implements OnInit {

  tarefa: any = {
    desc: 'Descricao da tarefa',
    responsavel: {
      usuario:null
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
