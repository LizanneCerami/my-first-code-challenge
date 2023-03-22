// (adults * 3) / 8
function getNumOfPizzas(adults) {
    // write the formula
    // multiply adults by 3 (slices per adult) then divide by 8 (number of slices per pizza)
        const numPizzas = (adults * 3) / 8;
    // round that answer up to the nearest full pizza
        const boxesOfPizza = Math.ceil(numPizzas);
        return boxesOfPizza;
    
        }
    
    const numBoxes = getNumOfPizzas(21)
    console.log(numBoxes);