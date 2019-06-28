export class tour {
    public name: string;
    public description: string;
    public image: string;
    public price: number;
    public duration: number;

    constructor (name: string, desc: string, image: string, price: number, duration: number) {
        this.name = name;
        this.description = desc;
        this.image = image;
        this.price = price;
        this.duration = duration;
    }
}