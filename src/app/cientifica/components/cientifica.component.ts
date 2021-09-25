import { Component, OnInit } from '@angular/core';
import { CientificaService } from '../services';

@Component({
  selector: 'app-cientifica',
  templateUrl: './cientifica.component.html',
  styleUrls: ['./cientifica.component.css']
})
export class CientificaComponent implements OnInit {

  private numero1!:string;
  private numero2!:string;
  private resultado!:string;
  private operacao!:string;

  constructor(private cientificaService: CientificaService) { }

  ngOnInit(){
    this.limpar();
  }

  /**
   * Inicializando todos os operadores para valores padrão.
   * 
   * @return void - retorna algo vazio/neutro
   */

   limpar(): void{
    this.numero1 = '0';
    this.numero2 = 'null';
    this.resultado = 'null';
    this.operacao = 'null';
  }

  /**
   * Retonar o valor concatenado. Trata o separdor decimal.
   * 
   * @param numAtual string
   * @param numConcat string
   * @return string
   */

  concatenaNumero(numAtual:string, numConcat:string): string {
    //caso contanha apenas '0' ou null, reinicializar o valor
    if (numAtual === '0' || numAtual == 'null'){
      numAtual = '';
    }

    //primeiro digito e '.', concatena '0' antes do ponto
    if (numConcat === '.' && numAtual === ''){
      return '0.';
    }

    //caso'.' digitado e já contenha um '.', apenas retorna
    if (numConcat === '.' && numAtual.indexOf('.') > -1){
      return numAtual;
    }

    return numAtual + numConcat;

  }
  /**
   * Adiciona o numero selecionado
   * para o calculo posteriormente.
   * 
   * @param numero string
   * @return void
   * 
   */

  adicionaNumero(numero:string):void{
    if (this.operacao == 'null'){
      this.numero1 = this.concatenaNumero(this.numero1, numero)
    } else {
      this.numero2 = this.concatenaNumero(this.numero2, numero)
    }
  }

  definirOperacao(operacao:string):void{

    //apenas define a operação caso não exista uma
    if(this.operacao == 'null'){
      this.operacao = operacao;
      return;
    }

    if(this.numero2 != 'null') {
      this.resultado = this.cientificaService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao
      ).toString();
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = 'null';
      this.resultado = 'null';
    }
  }

/**
 * Efetua o calculo de uma operação.
 * @return void 
 */

  calcular():void{
    if(this.numero2 == 'null'){
      return;
    }

    this.resultado = this.cientificaService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao
    ).toString();

  }

  quadrado(): void {
    if(this.display != 'null'){
      let num1 = parseFloat(this.display)
      num1 *= num1
      this.resultado = num1.toString();

      //limpar
      this.numero2 = 'null';
      this.operacao = 'null';

      //inserir resultado no numero 1
      this.numero1 = this.resultado
    }
  }

  cubo(): void{
    if(this.display != 'null') {
      let num1 = parseFloat(this.display)
      num1 = num1 ** 3
      this.resultado = num1.toString();

      //limpar
      this.numero2 = 'null';
      this.operacao = 'null';
      
      //Inserir resultado no numero1
      this.numero1 = this.resultado
    }
    
  }

  raizQuadrada(): void{
    if(this.display != 'null') {
      let num1 = parseFloat(this.display)
      num1 = num1 ** (1/2)
      this.resultado = num1.toString();

      //limpar
      this.numero2 = 'null';
      this.operacao = 'null';
      
      //Inserir resultado no numero1
      this.numero1 = this.resultado
    }
  }

  inserirPi(): void{
    const PI = (Math.PI).toString();
    //  Verificar se estamos digitando o primeiro número ou o segundo e limpar a variável
    if(this.operacao == 'null'){
      this.numero1 = ''
    }else {
      this.numero2 = ''
    }    
    this.adicionaNumero(PI)
  }

   get display(): string{
    if(this.resultado != 'null'){
      return this.resultado.toString();
    }

    if(this.numero2 != 'null'){
      return this.numero2.toString();
    }

    return this.numero1.toString();
  }
}
