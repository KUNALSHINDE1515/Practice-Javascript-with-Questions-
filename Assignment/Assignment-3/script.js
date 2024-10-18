// const GivenString = "Welcome to javascript";
// setTimeout(() => {
//     const str = GivenString.split("").reverse().join("");
//     console.log(str);
    
// }, 2000)

// setTimeout( () => {


// setTimeout(() => {

//     const Number = Math.floor(Math.random()* 10)
//     console.log(Number);
    
// },3000)

// }, 1000)



function generateRandomNumberWithDelay(delay) {
    console.log(`Generating a random number in ${delay} seconds...`);
  
    const intervalId = setInterval(() => {
      delay--;
      console.log(`${delay} seconds remaining...`);
  
      if (delay === 0) {
        clearInterval(intervalId);
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log(`Random number generated: ${randomNumber}`);   
  
      }
    }, 1000);
  }
  
  const delayTime = 3;
  generateRandomNumberWithDelay(delayTime);