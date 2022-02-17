// let movie_title: string = "Titanic 2 2022"
// let age: number = 22
// let bool: boolean = true

// console.log(movie_title, age, bool)

// let array: number [] = [10, 20, 30]
//
// type UserId = number
// type UserFirstName = string
// type UserLastName = string
// type UserIsActive = boolean
//
// type User = {
//     id: UserId,
//     first_name: UserFirstName,
//     last_name: UserLastName,
//     is_active: UserIsActive
// }
// let user: User = {
//     id: 1,
//     first_name: "Radoslav",
//     last_name: "Semov",
//     is_active: true
// }
//
// console.log(user)

enum CAR_TYPE {
    SEDAN = "Sedan",
    ESTATE = "Estate",
    HATCHBACK = "Hatchback",
    COUPE = "Coupe"
}

class Car {
    protected type: CAR_TYPE; // "Estate", "Hatchback", "Coupe"

    constructor() {
        this.type = CAR_TYPE.SEDAN;
    }

    setType(type: CAR_TYPE) {
        this.type = type
    }

    getType() {
        return this.type
    }
}

// const car = new Car();
// car.setType(CAR_TYPE.ESTATE)
// console.log(car.getType())

enum FERRARI_COLOR {
    PINK = "pink",
    YELLOW = "yellow",
    GRAY = "gray"
}

class Ferrari extends Car {
    private color: FERRARI_COLOR

    constructor() {
        super();
        this.color = FERRARI_COLOR.GRAY
    }

    setColor(color: FERRARI_COLOR) {
        this.color = color
    }

    getColor() {
        return this.color
    }
}

const ferrari = new Ferrari()
ferrari.setType(CAR_TYPE.COUPE)
// console.log(ferrari.getType())
// console.log(ferrari.getColor())