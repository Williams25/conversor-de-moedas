import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { Conversao, ConversaoResponse } from "../models";

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  private readonly BASE_URL = "http://api.fixer.io/latest"

  constructor(private http: Http) { }

  /**
   * Realiza a chamada para API de conversão de moedas
   * 
   * @param Conversao conversao
   * @return Observable<Conversao>
   */
  converter(conversao: Conversao): Observable<ConversaoResponse> {
    let params = `?base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`

    return this.http.get(this.BASE_URL + params)
      .map(res => res.json() as ConversaoResponse)
      .catch(error => Observable.throw(error));
  }

  /**
   * Retorna a cotação para dado uma resposta
   * @param ConversaoResponse conversaoResponse
   * @param Conversao conversao
   * @return number
   */
  cotacaoPara(conversaoResponse: ConversaoResponse, conversao: Conversao): number {
    if (conversaoResponse === undefined) {
      return 0
    }
    return conversaoResponse.rates[conversao.moedaPara]
  }

  /**
   * Retorna a cotação para dado uma resposta
   * @param ConversaoResponse conversaoResponse
   * @param Conversao conversao
   * @return string
   */
  cotacaoDe(conversaoResponse: ConversaoResponse, conversao: Conversao): string {
    if (conversaoResponse === undefined) {
      return '0'
    }
    return (1 / conversaoResponse.rates[conversao.moedaPara]).toFixed(4)
  }

  /**
   * Retorna a cotação para dado uma resposta
   * @param ConversaoResponse conversaoResponse
   * @return string
   */
  dataCotacao(conversorResponse: ConversaoResponse): string {
    if (conversorResponse === undefined) {
      return ''
    }
    return conversorResponse.date
  }
}
