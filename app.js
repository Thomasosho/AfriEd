// let participant = 15;
// let rounds = [4,2,5,3,2];

// function sinking(){
//   // console.log('Osho', participant);
//     //codehere
//     let remain = participant;
//     for (i = 0; i < rounds.length; i++) {
//       let Out = remain % rounds[i];
//       remain = remain - Out;
//       // console.log(remain)
//     }
//     console.log(remain);
    
//     return remain;
    
//     // let remainingParticipants = participant
//     // for (const i of rounds) {
//     //   let anything = remainingParticipants % i;
//     //   remainingParticipants = remainingParticipants - anything;
//     // }

//     // return sinking();
    
// }

//     for (let index = 0; index < array.length; index++) {
//       const element = array[index];
      
//     }
// }

let word = "100 divided by 23.1 "
// function basicmath() {
//   const operators = {
//       'plus': '+',
//       'minus': '-',
//       'times': '*',
//       'divided by': '/'
//   };

//   const words = word.toLowerCase().split(' ');
//   const operatorIndex = words.findIndex(w => Object.keys(operators).includes(w));

//   if (operatorIndex === -1 || operatorIndex === 0 || operatorIndex === words.length - 1) {
//       return null;
//   }

//   const operator = operators[words[operatorIndex]];
//   const num1 = parseFloat(words[operatorIndex - 1]);
//   const num2 = parseFloat(words[operatorIndex + 1]);

//   if (isNaN(num1) || isNaN(num2)) {
//       return null;
//   }

//   const expression = `${num1} ${operator} ${num2}`;
//   const result = eval(expression);
  
//   // return parseFloat(result.toFixed(2));
//   console.log('Radio', result.toFixed(2))
// }

// function basicmath() {
//   // Define the mapping of operators in words to their corresponding symbols
//   const operators = {
//       'plus': '+',
//       'minus': '-',
//       'times': '*',
//       'divided by': '/'
//   };

//   // Split the input string into an array of lowercase words
//   const words = word.toLowerCase().split(' ');
  
//   // Find the index of the operator word in the words array
//   const operatorIndex = words.findIndex(w => Object.keys(operators).includes(w));

//   // Check if the operator index is invalid or if the operands are missing
//   if (operatorIndex === -1 || operatorIndex === 0 || operatorIndex === words.length - 1) {
//       return null; // Return null for invalid input
//   }

//   // Retrieve the corresponding operator symbol based on the operator word
//   const operator = operators[words[operatorIndex]];
  
//   // Parse the operands (numbers) on either side of the operator
//   const num1 = parseFloat(words[operatorIndex - 1]);
//   const num2 = parseFloat(words[operatorIndex + 1]);

//   // Check if any of the operands are not valid numbers
//   if (isNaN(num1) || isNaN(num2)) {
//       return null; // Return null for invalid input
//   }

//   // Calculate the result based on the operator using if statements
//   let result;
//   if (operator === '+') {
//       result = num1 + num2;
//   } else if (operator === '-') {
//       result = num1 - num2;
//   } else if (operator === '*') {
//       result = num1 * num2;
//   } else if (operator === '/') {
//       result = num1 / num2;
//   } else {
//       return null; // Invalid operator
//   }
  
//   // Return the formatted result as a string with two decimal places
//   return result.toFixed(2);
// }


const oshoThomas = {
    name: 'James Osho Thomas',
    age: '30',
    hobbies: ['football', 'games', 'coding'],
    state: 'Edo',
    relationship: 'Single',
    zodiacSign: 'Taurus',
    sibling: '2',
    country: 'Nigeria',
    programmingLanguages: ['PHP', 'JavaScript', 'HTML', 'Python'],
    shoeSize: '43',
    shirtSize: 'large'
}

const jude = {
    name: "Adinoyi Jude Ohiani",
    age: "32",
    hobbies: ["farming", "music", "codin", "hangout"],
    state: "Kogi",
    relationship: "Singl",
    zodiacSign: "Tauru",
    sibling: "7",
    country: "Nigeri",
    programmingLanguages: [ "jjj"],
    shoeSize: "45",
    shirtSize: "extra large"
}

// const jude = {
//     name: "Adinoyi Jude Ohiani",
//     age: "30",
//     hobbies: ["farming", "music", "coding", "hangout"],
//     state: "Kogi",
//     relationship: "Single",
//     zodiacSign: "Taurus",
//     sibling: "7",
//     country: "Nigeria",
//     programmingLanguages: [ "JavaScript", "HTML", "Python"],
//     shoeSize: "45",
//     shirtSize: "extra large"
// }

function attributes() {
    const similarities = [];

    for (const attribute in oshoThomas) {
      if (oshoThomas.hasOwnProperty(attribute) && jude.hasOwnProperty(attribute)) {
        if (Array.isArray(oshoThomas[attribute])) {
          // Compare arrays
          const commonValues = oshoThomas[attribute].filter(value => jude[attribute].includes(value));
          if (commonValues.length > 0) {
            similarities.push(attribute);
          }
        } else {
            if (oshoThomas[attribute] === jude[attribute] === true) {
                similarities.push(attribute);
            }
        }
      } else{
            return 'No User Attributes Found 🥶!'
        }
    }

    if (similarities.length < 1) {
        return 'Sorry my Gee, No similarities found 🥶'
    } else {
        return similarities;
    }
  }

// console.log(attributes());

function attributesWithObj() {
    const commonAttributesObj = {};

    for (const attribute in oshoThomas) {
        if (oshoThomas.hasOwnProperty(attribute) && jude.hasOwnProperty(attribute)) {
            if (Array.isArray(oshoThomas[attribute])) {
                const commonValues = oshoThomas[attribute].filter(value => jude[attribute].includes(value));
                // console.log('osho', commonValues);
                if (commonValues.length > 0) {
                    commonAttributesObj[attribute] = commonValues;
                }
            } else {
                if (oshoThomas[attribute] === jude[attribute]) {
                    commonAttributesObj[attribute] = oshoThomas[attribute];
                }
            }
        }
    }

    // console.log(commonAttributesObj);

    if (Object.keys(commonAttributesObj).length === 0) {
        return 'Sorry my Gee, No similarities found 🥶';
    } else {
        return commonAttributesObj;
    }
}

console.log('As obj with attributes: ', attributesWithObj(), 'As an array: ', attributes());
   