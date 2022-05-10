import {Leu} from '../modules/Leu.js';
import {Caine} from '../modules/Caine.js';
import { Animal } from '../modules/Animal.js';

const animal = new Animal(0.3);
animal.comunica('Oac oac');

const leu = new Leu(200, 2);
leu.comunica('Uauuuuu');

const caine = new Caine(3, true);
caine.comunica('Ham Ham');
caine.musca();