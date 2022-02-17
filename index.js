// let age = 11;
// // console.log(age);
// age = 22;
// // console.log(age);
//
// const ip_address_server = "192.168.1.1";
// // console.log(ip_address_server);
//
// let boolean = true; // false
//
// const array = [
//     age,
//     ip_address_server,
//     boolean
// ]

//  for (let i = 0; i < array.length; i++) {
//      console.log(array[i]);
// }

// let i = 0;
// while (i < array.length) {
//     console.log(array[i]);
//     i++
// }

// for (let element of array) {
//     console.log(element);
// }

const object = {
    age: "33",
    ip_address_server: "192.168.1.11"
}
// console.log(object.ip_address_server);

function func() {
    return "Success";
}

const isOdd = () => {
    return "Success";
}
// console.log(isOdd());

let data = [
    10,
    7,
    25,
    10,
    56
]

const modifiedArray = data.map((element) => {
    if (element === 7) {
        element = 17
    }
    return element
})
// console.log(modifiedArray)

const filteredData = data.filter((element) => {
    if (element >= 12) {
        return element
    }
})
// console.log(filteredData)

const foundElement = data.find((element) => {
    if (element === 10) {
        return element
    }
})
// console.log(foundElement)