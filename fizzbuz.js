

function fizzbuzz(fin) {
    var i = 1;
    while (i <= fin) {
        if (i%3 === 0 && i%5===0) {
            console.log('"Fizz Buzz"');
        } else if (i%5 === 0) {
            console.log('"Buzz"');
        } else if(i%3 === 0){
            console.log('"Fizz"');
        } else{
            console.log(i);
        }
        i++;
        
    }
}

fizzbuzz(10);