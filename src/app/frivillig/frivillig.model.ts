export class Frivillig {
    public id: number;
    public fornavn: string;
    public efternavn: string;
    public adresse: string;
    public postnr: number;
    public by: string;
    public tlf: number;
    public mail: string;
    public imagePath: string;

    constructor(id: number, fornavn: string, efternavn: string, adresse: string, postnr: number, by: string, tlf: number, mail: string, imagePath: string){
        this.id = id;
        this.fornavn = fornavn;
        this.efternavn = efternavn;
        this.adresse = adresse;
        this.postnr = postnr;
        this.by = by;
        this.tlf = tlf;
        this.mail = mail;
        this.imagePath = imagePath;
    }
}