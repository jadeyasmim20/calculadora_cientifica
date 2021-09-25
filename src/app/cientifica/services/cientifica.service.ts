import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CientificaService {
  /*DEFININDO AS COSNTANTES UTILIZADAS: para identificar as operações de calculo. */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }
  /**
   * Metodo que calcula uma operação matemática dado 
   * dois números e uma operação.
   * Suporta as operações de soma, subtração, divisão e multiplicação
   * @param num1 number
   * @param num2 number
   * @param operacao string operação a ser executada
   * @returns number Resultado da operação
   */

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number;

    switch(operacao) {
      case CientificaService.SOMA:
        resultado = num1 + num2;
      break;
      case CientificaService.SUBTRACAO:
        resultado = num1 - num2;
      break;
      case CientificaService.DIVISAO:
        resultado = num1 / num2;
      break;
      case CientificaService.MULTIPLICACAO:
        resultado = num1 * num2;
      break;
      default:
        resultado = 0;
    }
    return resultado;
  }
}
