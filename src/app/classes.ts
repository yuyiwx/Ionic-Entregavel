export class Moeda 
{
    private Nome:string;
    private Sigla:string;
    private Valor:number;
    constructor()
    {}
    getNome()
    {
        return this.Nome;
    }
    setNome(Nome:string)
    {
        this.Nome = Nome;
    }
    getSigla()
    {
        return this.Sigla;
    }
    setSigla(Sigla:string)
    {
        this.Sigla = Sigla;
    }
    getValor()
    {
        return this.Valor;
    }
    getEnd()
    {
        return '"../../assets/' + this.Nome + '.png"';
    }
    setValor(Valor:number)
    {
        this.Valor = Valor;
    }
}