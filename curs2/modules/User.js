class User{
    id;
    nume;
    email;
    varsta;

    constructor(id,nume,email, varsa){
        //setam proprietatile
        this.id = id;
        this.nume = nume;
        this.email = email;
        this.varsta = varsta;

    }
    mananca (calorii){
        console.log(`Mananca ${calorii} pe zi.`);
    }
    doarme(ore){
        console.log(`Doarme ${ore} pe zi`);
    }
}
export {User}
