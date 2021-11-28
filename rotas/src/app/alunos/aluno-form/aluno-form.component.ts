import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IFormCanDeactivate } from 'src/app/guards/iform-candeactivate';
import { Aluno } from '../alunos.component';
import { AlunosService } from '../alunos.service';

type NewType = Subscription;

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IFormCanDeactivate {
  aluno!: Aluno | null | undefined;
  inscricao!: NewType;
  private formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id)

        if (this.aluno === null) {
          this.aluno = null;
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onInput() {
    this.formMudou = true;
    console.log('mudou')
  }

  podeMudarRota(): boolean {
    if (this.formMudou) {
      confirm('Tem certeza que deseja sair dessa pagina');
    }

    return true;
  }

  podeDesativar(): boolean {
    return this.podeMudarRota();
  }

}
