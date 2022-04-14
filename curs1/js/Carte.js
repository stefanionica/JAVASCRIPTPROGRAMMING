class Carte{
    constructor(titlu, autor, editura, anAaparitie, nrPagini){
        console.log(`s-a apelat automat constructorul`);
        this.titlu = titlu;
        this.autor = autor;
        this.editura = editura;
        this.anAaparitie = anAaparitie;
        this.nrPagini = nrPagini;

    }
    afiseazaTitlu(){
        console.log(`Titlul este ${this.titlu}`);

    }
}