class Animal{
    #familie;
    #mancare;
    #culoare;
    greutate;
    static nrPicioare = 2;
    static nrochi = 2;
    constructor(greutate){
        this.greutate = greutate;
    }

    get greutate(){
        return this.greutate;
    }
    set greutate(gr){
        this.greutate = gr;
    }
    get familie(){
        return this.#familie;
    }
    set familie(fam){
        this.#familie = fam;
    }
    get mancare(){
        return this.#mancare;
    }
    set mancare(mancare){
        this.#mancare = mancare
    }
    get culoare(){
        return this.#culoare;
    }
    set culoare(culoare){
        this.#culoare = culoare;
    }
    mananca(calorii){
        this.greutate = this.greutate + calorii
        console.log( `Caloriile consumate azi sunt ${calorii} si greutatea actuala este ${this.greutate}`);
    }
    doarme(ore){
        console.log(`Animalul doarme${ore} pe zi`);
    }
    comunica(mesaj){
        console.log(mesaj);
    }
}

export {Animal}
//export default Animal