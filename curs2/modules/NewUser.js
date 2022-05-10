class NewUser{
    #varsta;
    #password;
    constructor(id,nume,email){
        //setam proprietatile
        this._id = id;
        this.nume = nume;
        this._email = email;
        this.#varsta=18;
        this.#password ='12345';
    }
    get id(){
        return this._id;
    }
    
    get varsta(){
        return this.#varsta;
    }
    get password(){
        return this.#password;
    }
    // set varsta(newVarsta){
    //     if(newVarsta >= 18 && newVarsta <= 30)
    //     this.#varsta = newVarsta;
    // }
    
    mananca (calorii){
        console.log(`Mananca ${calorii} pe zi.`);
    }
    doarme(ore){
        console.log(`Doarme ${ore} pe zi`);
    }

}

class Abonat extends NewUser{
    constructor(id, nume, email){
        super(id, nume, email); // apeleaza CountQueuingStrategy, din clasa parinte

    }
   
}
export {NewUser, Abonat}
