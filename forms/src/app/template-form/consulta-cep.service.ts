import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {
  valor: any;
  constructor(private http: HttpClient) { }


  verificaCEP(cep) {
    // tslint:disable-next-line: max-line-length
    // this.http.get(`http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?nCdEmpresa=&sDsSenha=&sCepOrigem=${43820080}&sCepDestino=${43810040}&nVlPeso=1&nCdFormato=${1}&nVlComprimento=${1}6&nVlAltura=${5}&nVlLargura=${15}&sCdMaoPropria=s&nVlValorDeclarado=${200}&sCdAvisoRecebimento=n&nCdServico=${41106}&nVlDiametro=${0}&StrRetorno=xml`)
    // .subscribe(dados => this.valor = dados);

    return this.http.get(`https://viacep.com.br/ws/${cep}/json`);
  }

  postForm(form) {
      this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
      .subscribe(dados => {
        console.log(dados);

        return dados;
      });
  }
}
