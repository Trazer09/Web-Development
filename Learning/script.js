gsap.to("#box",{
    x: 700,
    duration: 2,
    delay: 1

})

function doSomethingAsync(callback) {
    setTimeout(function () {
      console.log("Task is done!");
      callback();
    }, 1000); // Simulate an asynchronous operation that takes 1 second
  }
  
  function onComplete() {
    console.log("Callback function executed.");
  }
  
  doSomethingAsync(onComplete);
  