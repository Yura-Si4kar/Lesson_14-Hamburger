const SIZE_SMALL = {
    price: 50,
    calories: 20,
};

const SIZE_MIDDLE = {
    price: 75,
    calories: 30,
};

const SIZE_LARGE = {
    price: 100,
    calories: 40,
};

const TOPPING_TOMATO = {
    price: 50,
    calories: 50,        
}

class Hamburger {
    constructor({price, calories}) {
        this._price = price;
        this._calories = calories;
    }

    addTopping({ price, calories }) {
        this._price += price;
        this._calories += calories;
    }

    remuveTopping({ price, calories }) {
        this._price -= price;
        this._calories -= calories;
    }

    getPrice() {
        return this._price;
    }

    getCalories() {
        return this._calories;
    }
}