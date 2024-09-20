document.addEventListener('DOMContentLoaded', function() {
    const behaviorTable = document.querySelector('.table-container');  // Select the behavior table
    const logSection = document.getElementById('log');  // Log section where clicks are recorded
    const newSectionBtn = document.getElementById('new-section-btn');  // Button to add a new section
    const copyBtn = document.getElementById('copy-btn');  // Button to copy the log to clipboard

    // Event listener to track clicks on elements inside the table
    behaviorTable.addEventListener('click', function(event) {
        const clickedElement = event.target.closest('.element');
        if (clickedElement) {
            const behaviorCode = clickedElement.getAttribute('data-code');
            addToLog(behaviorCode);
            changeCellColor(clickedElement);  // Change color of the clicked element
        }
    });

    // Event listener to reset colors when a new section is created
    newSectionBtn.addEventListener('click', function() {
        addNewSection();
        resetCellColors();  // Reset all cell colors
    });

    // Event listener to copy log to clipboard
    copyBtn.addEventListener('click', function() {
        copyToClipboard();
    });

    // Add the behavior code to the log section
    function addToLog(code) {
        logSection.innerHTML += `${code} `;
        logSection.scrollTop = logSection.scrollHeight;  // Scroll to the bottom of the log
    }

    // Add a new section separator in the log
    function addNewSection() {
        logSection.innerHTML += `<br>=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=<br>`;
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
