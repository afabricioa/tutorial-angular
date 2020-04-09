import { ConsultaCepService } from './consulta-cep.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  dados: any;
  usuario: any = {
      nome: 'Fabricio',
      email: 'fabricio.a.s@hotmail.com'
  };

  constructor(private cepService: ConsultaCepService) { }

  onSubmit(form) {
      this.dados = this.cepService.postForm(form);

      console.log(this.dados);
  }

  ngOnInit() {
  }

  aplicaCSS(campo) {
    return {
      'is-invalid': !campo.valid && campo.touched
    };
  }

  consultaCEP(cep, form) {
    cep = cep.replace(/\D/g, '');

    this.resetaForm(form);

    if (cep !== '') {
        // Expressão regular para validar o CEP.
        const validaCEP = /^[0-9]{8}$/;

        if (validaCEP.test(cep)) {
            this.cepService.verificaCEP(cep)
            .subscribe(dados => this.setDados(dados, form));
        }


    }
  }

  setDados(dados, formulario) {
      // form.setValue({
      //   nome: form.value.nome,
      //   email: form.value.email,
      //   endereco: {
      //     cep: dados.cep,
      //     numero: '',
      //     complemento: dados.complemento,
      //     rua: dados.logradouro,
      //     bairro: dados.bairro,
      //     cidade: dados.localidade,
      //     estado: dados.uf
      //   }
      // });

      // usando patchValue só é necessário colocar os campos que receberam novos valores
      formulario.form.patchValue({
        endereco: {
          cep: dados.cep,
          complemento: dados.complemento,
          rua: dados.logradouro,
          bairro: dados.bairro,
          cidade: dados.localidade,
          estado: dados.uf
        }
      });
      console.log(formulario);
  }

  resetaForm(formulario) {
      formulario.form.patchValue({
        endereco: {
          cep: null,
          complemento: null,
          rua: null,
          bairro: null,
          cidade: null,
          estado: null
        }
      });
  }

}
