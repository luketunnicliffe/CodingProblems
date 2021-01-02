
function convertToBaby(animals) {
  console.log(animals)
  
    babyAnimals =[];
    for (animal of animals) {
      babyAnimals.push(`baby ${animal}`);
    }
  return babyAnimals
  }
  
  
  
  
  
  // When you're ready to test your code, uncomment the below and run:
  
  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
  
  console.log(convertToBaby(animals));
  
  
  for (animal of animals) {
    console.log(animal);
  }



  