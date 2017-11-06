export type X = string | number;
export type Y = 'user' | 'admin' | 'editor';

export interface User {
    name: string;
    id: number;
    role: Y;
}

export class Customer {    
    user: User = {
        name: 'VKB',
        id: 3,
        role: 'editor'
    }

    constructor(public id: number) {}

    calculateNumber(factor: number) {
        this.uselessMethod(4, 'user', 4);
        return this.id * factor;
    }

    uselessMethod(a: X, b: Y, c: number) {
        console.log(a);
        if (typeof a === 'string') {
            console.log(a);
            a = parseInt(a);
        }
        console.log(a);
    }

    doSomething() {
        var self = this;
        let callback = function() {
            self.calculateNumber(4);
            // this zeigt hier auf function(){}
            // self zeigt auf Instanz von Customer
        }

        let callback1 = () => {
            this.calculateNumber(4);
            // this zeigt auf Instanz von Customer
        }

        // setTimeout(function() { /* ... */ }, 1000);

        callback1();
        

        let text = `Herzlich Willkommen
in Saarbrücken!
Zahl ist ${this.calculateNumber(5)} und sie ist sehr gut.`;

        // let url = `http://example.com/${resource}/${id}/edit`

        console.log(text);
    }

}