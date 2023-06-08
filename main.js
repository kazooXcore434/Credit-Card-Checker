// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
const validateCred = (cardArr) => {
    // create variable for adding the numbers together
    let sumOfArr = 0;
    // for loop that starts at the second to last digit and works backwords
    for (let i = cardArr.length - 1; i >= 0; i--) {
        // create variable that denotes the value of i's digit
       let current = cardArr[i];
       // statement to determine if the index is even or odd
       if ((cardArr.length - 1 - i) %2 === 1) {
        // multiplies even indices by 2
        current *= 2;
        // if value is >9 subtracts nine
        if (current > 9){
            current -= 9;
        } 
       }
    //    adds the current index to the sum 
       sumOfArr += current;
    }
    // calculates if the sum modulo is divisible by 10 with no remainder
    return sumOfArr % 10 === 0;
}


// console.log(validateCred(valid1))
//create a new array to store invalid cards
    let invalidCards = [];
const findInvalidCards = arr => {
    
    //use a loop to iterate through the nested arr using the validateCred function
    for (let i = 0; i < arr.length; i++) {
        let currCard = arr[i];
        if (!validateCred(currCard)){
            invalidCards.push(currCard);
            }
        }
        return invalidCards
    }
    //send invalid cards to the new arr created at the beginning of findInvalidCards

console.log(findInvalidCards(batch));

//create new array to store bad card companies in
let badCardCompany = [];    
const idInvalidCardCompanies = invalidArr => {

    //iterate through the invalidCards array
    for (let i = 0; i < invalidArr.length; i++) {
        //identify company by first digit
        //identify if company already exists in the new array
        if (invalidArr[i][0] === 3 && badCardCompany.indexOf('American Express') === -1) {
            badCardCompany.push('American Express');
        } else {
            if (invalidArr[i][0] === 4 && badCardCompany.indexOf('Visa') === -1) {
                badCardCompany.push('Visa')
            } else {
                if (invalidArr[i][0] === 5 && badCardCompany.indexOf('Mastercard') === -1) {
                    badCardCompany.push('Mastercard')
                } else {
                    if (invalidArr[i][0] === 6 && badCardCompany.indexOf('Discover') === -1) {
                        badCardCompany.push('Discover')
                    } else {
                        if (invalidArr[i][0] > 6 || invalidArr[i][0] < 3) {
                            return "Company not found."
                        }

                    }

                }
            }
        }
        //return arr of companies with bad cards
     }
     return badCardCompany;
}


console.log(idInvalidCardCompanies(invalidCards))