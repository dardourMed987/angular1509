export class Personne {

    id!:number;
    nom!:string;
    prenom!:string;
    age!:number;
    image!:string;

    constructor(id?:number,nom?:string,prenom?:string,age?:number,image?:string)
    {
        if(id)
        this.id=id;
        if(nom)
        this.nom=nom;
        if(prenom)
        this.prenom=prenom;
        if(age)
        this.age=age;
        if(image)
        this.image=image;
    }


   
}
