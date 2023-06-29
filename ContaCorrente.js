import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas ++;
    }

    //sobrescrevendo  o comportamento de sacar
    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor, taxa);
        }
}
 
//Proposal Class Fields - #saldo: https://github.com/tc39/proposal-class-fields#private-fields