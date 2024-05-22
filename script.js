document.addEventListener("DOMContentLoaded", function() {
    const decrementButton = document.getElementById("decrement");
    const incrementButton = document.getElementById("increment");
    const countDisplay = document.getElementById("count");
    const clearButton = document.getElementById("clear");
    const errorMessage = document.getElementById("error-message");
  
    let count = 0;
  
    // Function to update count display
    function updateCount() {
      countDisplay.textContent = count;
      if (count === 0) {
        clearButton.style.display = "none";
      } else {
        clearButton.style.display = "block";
      }
    }
  
    // Function to handle increment button click
    incrementButton.addEventListener("click", function() {
      count++;
      updateCount();
    });
  
    // Function to handle decrement button click
    decrementButton.addEventListener("click", function() {
      if (count > 0) {
        count--;
        updateCount();
      } else {
        errorMessage.style.display = "block";
        setTimeout(function() {
          errorMessage.style.display = "none";
        }, 2000); // Hide error message after 2 seconds
      }
    });
  
    // Function to handle clear button click
    clearButton.addEventListener("click", function() {
      count = 0;
      updateCount();
    });
  });