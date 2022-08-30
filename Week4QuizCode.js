// Week 4 Code Test for Quiz

//fat arrow problem 1
const createFullName = (firstName,lastName) => `${firstName} ${lastName}`;

//fat arrow problem 2
const doubleNumber =  number => number * 2;

//fat arrow problem 3
const getEvenNumbers = array => {
    let evenNumbers = [];
    for (let i of array){
        if (i % 2 === 0){
            evenNumbers.push(i);
        }
    }
    return evenNumbers;
}

console.log(createFullName("Bob","Lob"));
console.log(doubleNumber(4));
console.log(getEvenNumbers([1,2,3,4,5,6]));

//Question 2 - assuming existing array of customers, sorts for those who allegidly purchase the most socks
const customers = [
    {
        name: 'Sam',
        address: {
            street: '1234 W Bell Rd',
            city: 'Phoenix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'Red',
        age: 32
    },
    {
        name: 'Bob',
        address: {
            street: '1234 W Bell Rd',
            city: 'Peoria',
            zip: '85308',
            state: undefined
        },
        membershipLevel: 'Blue',
        age: 32
    },
    {
        name: 'Chris',
        address: {
            street: '1234 W Bell Rd',
            city: 'Georgia',
            zip: '85308',
            state: undefined
        },
        membershipLevel: 'Red',
        age: 32
    },
    {
        name: 'Joe',
        address: {
            street: '1234 W Bell Rd',
            city: 'Georgia',
            zip: '85308',
            state: undefined,
        },
        membershipLevel: 'Red',
        age: 32
    },
    {
        name: 'Joey',
        address: {
            street: '1234 W Bell Rd',
            city: 'Georgia',
            zip: '85308',
            state: undefined,
        },
        membershipLevel: 'SILVER',
        age: 28
    },
    {
        name: 'Robby',
        address: {
            street: '1234 W Bell Rd',
            city: 'Peoria',
            zip: undefined,
            state: "AZ"
        },
        membershipLevel: 'Blue',
        age: 32
    }
];
console.log(customers[2].address)
console.log(customers[2].address.city)
console.log(customers[2].address.state)

function customerSockSorter (customerarray){
    let customersLikingSocks = []
    for (let i of customers){
        if (i.name[0] === "c" || i.name[0] === "C"){
            customersLikingSocks.push(i)
            console.log(`added ${i.name} because name starts with C`)
        } else if ((i.address.city !== undefined && i.address.state !== undefined) && (i.address.street !== undefined && i.address.zip !== undefined)){
            customersLikingSocks.push(i)
            console.log(`added ${i.name} because they have a full address`)
        } else if (i.address.city === "Peoria" && i.address.state === "AZ") {
            console.log(`added ${i.name} because they live in Peoria AZ`)
            customersLikingSocks.push(i)
        }else if ((i.membershipLevel === "GOLD" || i.membershipLevel === "PLATINUM") || (i.age < 29 && i.membershipLevel === "SILVER")) {
            console.log(`added ${i.name} because they have correct membership`)
            customersLikingSocks.push(i)
        } else {
            console.log(`customer ${i.name} was not added because they do not match the criteria`)
    } 
    }
    return customersLikingSocks
}

console.log(customerSockSorter(customers));
