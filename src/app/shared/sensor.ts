export class Sensor {
    id: number;
    name: string;
    color: boolean;
    visibly: boolean;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.visibly = true;
        if (getRandomIntInclusive(0,2) == 1) {
            this.color = true;
        } else this.color = false;
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min+1))+min;
}

export let SensorDatabase: Sensor[] = [
    { id: 0, name: '0', color: true, visibly: true },
    { id: 1, name: '1', color: false, visibly: true },
    { id: 2, name: '2', color: true, visibly: true },
    { id: 3, name: '3', color: false, visibly: true },
    { id: 4, name: '4', color: true, visibly: true },
    { id: 5, name: '5', color: true, visibly: true },
    { id: 6, name: '6', color: false, visibly: true },
    { id: 7, name: '7', color: true, visibly: true },
    { id: 8, name: '8', color: false, visibly: true },
    { id: 9, name: '9', color: true, visibly: true },
    { id: 10, name: '10', color: true, visibly: true },
]