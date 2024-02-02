function getComputerChoice(array) {
    
    const randomIndex = Math.floor(Math.random() * array.length);
  
  
    return array[randomIndex];
  }
  
 
  const myArray = ["Rock", "Paper", "Scissors"];
  const randomElement = getComputerChoice(myArray);
  
  console.log(randomElement); 
  