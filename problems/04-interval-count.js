/***********************************************************************
Write a function, `intervalCount`, that accepts a callback, a delay in 
milliseconds, and an amount. The function should set an interval with 
the given callback and delay, but clear the interval after the callback
has been executed 'amount' number of times.

Hint: utilize a 'closure' to your advantage

In addition to Mocha, we recommend that you test your code manually using 
node with the examples below.

Example

intervalCount(function() {
    console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times
***********************************************************************/


// NOT REALLY SURE HOW TO DO THIS< I NEED TO COUNT HOW MANY TIMES THE CALL BACK IS RUN
// PERHAPS I COULD DO A COUNTER IN THE UPPER FUNCTION AND THEN RETURN A CALLBACK FUNCTION THAT CARRIES OUT THE CALLBACK???
// I NEED SOMEWAY OF COUTING THE INTERVALS AND SEEING IF IT MATCHES THE AMOUNT WHEN IT DOES THAT IS WHEN I AM CALLING THE CLEAR INTERVAL

function intervalCount(cb, delay, amount) {
let count = 0;
  
function counter(){
    if (count==amount){
      return clearInterval(intervalID);
    } else {
      count = count+1;
      cb();
      return counter();
    }
  }

  const intervalID = setInterval(counter, delay);

};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/


try {
  module.exports = intervalCount;
} catch {
  module.exports = null;
}
