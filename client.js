const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

//employee array

function bonusInformation(empData){
  let newEmployeeInfo = {
    newName: employees.name,
    bonusPercentage: 0,
  }
  //loop over employ array
  for(i = 0; i < employees.length; i++){
      //take in each seperate employee object and performance fancy math
    if(employees.reviewRating <= 2){
       bonusPercentage = 0
    }//end 2 star
    else if(reviewRating === 3 ){
       bonusPercentage = 4;
    }//end 3 star
    else if(reviewRating === 4){
      bonusPercentage = 6;
    }//end 4 star
    else if(reviewRating === 5){
       bonusPercentage = 10;
    }//end 5 star
  } //end for loop
  
if( employeeNumber.length === 4 ){
  bonusPercentage + 4;
}

if( annualSalary > 65000 ){
  bonusPercentage - 1;
}
}






//end bonusInformation 

//write function 
//loop over employ array
//return new object with bonus information 


// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
