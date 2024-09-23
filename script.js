document.addEventListener('DOMContentLoaded', function() {
    const behaviorTable = document.querySelector('.table-container');  // Select the behavior table
    const logSection = document.getElementById('log');  // Log section where clicks are recorded
    const newSectionBtn = document.getElementById('new-section-btn');  // Button to add a new section
    const copyBtn = document.getElementById('copy-btn');  // Button to copy the log to clipboard
    const clickCountElement = document.getElementById('clickCount');  // Element showing the live count
    
    let clickCount = 0;  // Variable to track the current count

    // Event listener to track clicks on elements inside the table
    behaviorTable.addEventListener('click', function(event) {
        const clickedElement = event.target.closest('.element');
        if (clickedElement) {
            const behaviorCode = clickedElement.getAttribute('data-code');
            const value = clickedElement.getAttribute('data-value');  // Get the value of the clicked element

            if (value === "variable") {
                const userValue = prompt("Enter a value for this cell:");  // Prompt user for variable value
                if (userValue && !isNaN(userValue)) {
                    addToLog(behaviorCode + " (+" + userValue + ")");
                    incrementCount(parseFloat(userValue));  // Add the user input value
                }
            } else {
                addToLog(behaviorCode + " (+" + value + ")");
                incrementCount(parseFloat(value));  // Add the fixed value
            }
            changeCellColor(clickedElement);  // Change color of the clicked element
        }
    });

    // Event listener to reset the count and record the previous total when a new section is created
    newSectionBtn.addEventListener('click', function() {
        recordCurrentTotal();  // Record the current total in the log
        addNewSection();       // Add the new section separator
        resetCount();          // Reset the live click count
        resetCellColors();     // Reset all cell colors
    });

    // Event listener to copy log to clipboard
    copyBtn.addEventListener('click', function() {
        copyToClipboard();
    });

    // Add the behavior code and value to the log section
    function addToLog(code) {
        logSection.innerHTML += `${code}<br>`;
        logSection.scrollTop = logSection.scrollHeight;  // Scroll to the bottom of the log
    }

    // Increment the live click count
    function incrementCount(value) {
        clickCount += value;  // Increment the count by the passed value
        clickCountElement.textContent = clickCount;  // Update the live count display
    }

    // Record the current total in the log
    function recordCurrentTotal() {
        logSection.innerHTML += `<strong>Total for this section: ${clickCount}</strong><br>`;
    }

    // Reset the click count
    function resetCount() {
        clickCount = 0;  // Reset the count to 0
        clickCountElement.textContent = clickCount;  // Update the live count display
    }

    // Add a new section separator in the log
    function addNewSection() {
        logSection.innerHTML += `<br>--- New Section ---<br>`;
    }

    // Change background color of the clicked element
    function changeCellColor(element) {
        element.classList.add('clicked');  // Add the "clicked" class to change color
    }

    // Reset colors of all elements by removing the "clicked" class
    function resetCellColors() {
        const allElements = document.querySelectorAll('.element');  // Select all elements
        allElements.forEach(el => {
            el.classList.remove('clicked');  // Remove the "clicked" class from all elements
        });
    }

    // Copy log content to the clipboard
    function copyToClipboard() {
        const logText = logSection.innerText;  // Get the text from the log
        const textArea = document.createElement('textarea');
        textArea.value = logText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');  // Copy the text to the clipboard
        document.body.removeChild(textArea);  // Remove the textarea element
        alert('Log copied to clipboard!');
    }
});
