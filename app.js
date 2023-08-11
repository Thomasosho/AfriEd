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

function basicmath() {
  // Define the mapping of operators in words to their corresponding symbols
  const operators = {
      'plus': '+',
      'minus': '-',
      'times': '*',
      'divided by': '/'
  };

  // Split the input string into an array of lowercase words
  const words = word.toLowerCase().split(' ');
  
  // Find the index of the operator word in the words array
  const operatorIndex = words.findIndex(w => Object.keys(operators).includes(w));

  // Check if the operator index is invalid or if the operands are missing
  if (operatorIndex === -1 || operatorIndex === 0 || operatorIndex === words.length - 1) {
      return null; // Return null for invalid input
  }

  // Retrieve the corresponding operator symbol based on the operator word
  const operator = operators[words[operatorIndex]];
  
  // Parse the operands (numbers) on either side of the operator
  const num1 = parseFloat(words[operatorIndex - 1]);
  const num2 = parseFloat(words[operatorIndex + 1]);

  // Check if any of the operands are not valid numbers
  if (isNaN(num1) || isNaN(num2)) {
      return null; // Return null for invalid input
  }

  // Calculate the result based on the operator using if statements
  let result;
  if (operator === '+') {
      result = num1 + num2;
  } else if (operator === '-') {
      result = num1 - num2;
  } else if (operator === '*') {
      result = num1 * num2;
  } else if (operator === '/') {
      result = num1 / num2;
  } else {
      return null; // Invalid operator
  }
  
  // Return the formatted result as a string with two decimal places
  return result.toFixed(2);
}

console.log(basicmath());
   