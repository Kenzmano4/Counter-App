<!-- JavaScript -->
  
    let count = 0;

    function updateDisplay() {
      const counterEl = document.getElementById('counter');
      counterEl.textContent = count;
    
      // Remove all color classes
      counterEl.classList.remove('text-success', 'text-danger', 'text-primary');

      // Add the appropraite color
      if (count > 0) {
        counterEl.classList.add('text-success');
    } else if (count < 0) {
        counterEl.classList.add('text-danger');
    } else {
        counterEl.classList.add('text-primary');
      }
    }

    function increment() {
      count++;
      updateDisplay();
    }

    function decrement() {
      count--;
      updateDisplay();
    }

    function reset() {
      count = 0;
      updateDisplay();
    }
  