const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];

// 1) What is the average income of all the people in the array?
const avgSalary = () => {
    const totalSalary = people.reduce((acc, currVal) => {
        return acc + parseInt(currVal.salary);
    }, 0);

    return (totalSalary / people.length).toFixed(2);
};

console.log(avgSalary());

// 2) Who are the people that are currently older than 30?
const getAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    return today.getFullYear() - birthDate.getFullYear()
}

const peopleAbove30 = () => {
    const above30 = people.filter(person => {
        return getAge(person.DOB)>30
    });

    return above30
}

console.log(peopleAbove30());

// 3) Get a list of the people's full name (firstName and lastName).
const getFullName = () => {
    return people.map(per => `${per.firstName} ${per.lastName}`)
}

console.log(getFullName());

// 4. How many people are there in each department?
const departmentCounts=()=>{
    return people.reduce((acc,person)=>{
        if (acc[person.department]) {
            acc[person.department]++
        }
        else{
            acc[person.department]=1
        }
        return acc
    },{})
}
console.log(departmentCounts());