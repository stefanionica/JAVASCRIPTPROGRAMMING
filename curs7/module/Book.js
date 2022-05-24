import { Product } from './Product.js';
class Book extend Product{
    author;
    constructor(name, price, percent, author){
        super(name, price, percent);
        this.author = author;
    }
}

export { Book };