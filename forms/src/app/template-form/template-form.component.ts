import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Form, NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  };



  onSubmit(formulario: NgForm) {
    console.log(formulario);
    this.http.post('https://reqbin.com/echo/post', JSON.stringify(formulario.value))
      .pipe(map(res => res))
      .subscribe(res => {
        console.log(res);
        //Resetar Formulario
        formulario.form.reset();
      });

    // console.log(this.usuario);
  }

  constructor(
    private http: HttpClient,
    private cepService: ConsultaCepService
  ) { }

  ngOnInit(): void {
  }

  verificaValidTouched(campo: any) {
    return campo.invalid && campo.touched;
  }


  aplicaCssErro(campo: any) {
    return {
      'is-invalid': this.verificaValidTouched(campo)
    };
  }

  consultaCEP(cep: any, formulario: NgForm) {

    //"cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep)?.subscribe(data => this.populaDadosForm(data, formulario));
    }
  }

  populaDadosForm(dados: any, formulario: NgForm) {
    /*     formulario.setValue({
          nome: formulario.value.nome,
          email: formulario.value.email,
          endereco: {
            cep: dados.cep,
            numero: '',
            complemento: dados.complemento,
            rua: dados.logradouro,
            bairro: dados.bairro,
            cidade: dados.localidade,
            estado: dados.uf,
          }
        }); */

    formulario.form.patchValue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      }
    });

    console.log(formulario);
  }

  resetaDadosForm(formulario: NgForm) {
    formulario.form.patchValue({
      endereco: {
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null,
      }
    });
  }

}
