export class Frivillig {
    public id: number;
    public fornavn: string;
    public efternavn: string;
    public addresse: string;
    public postnr: string;
    public by: string;
    public telefon: string;
    public mail: string;
    public imagePath: string;

    constructor(fornavn: string, efternavn: string, adresse: string, postnr: string, by: string, telefon: string, mail: string, imagePath: string){
        this.fornavn = fornavn;
        this.efternavn = efternavn;
        this.addresse = adresse;
        this.postnr = postnr;
        this.by = by;
        this.telefon = telefon;
        this.mail = mail;
        this.imagePath = imagePath;
    }
}