// Select the table and log section
const behaviorTable = document.getElementById('behavior-table');
const logSection = document.getElementById('log');
const newSectionBtn = document.getElementById('new-section-btn');

// Add event listener for table clicks
behaviorTable.addEventListener('click', function(event) {
    if (event.target.classList.contains('clickable')) {
        // Get the behavior code from the clicked cell
        const behaviorCode = event.target.getAttribute('data-code');
        addToLog(behaviorCode);
    }
});

// Add event listener for new section button
newSectionBtn.addEventListener('click', function() {
    addNewSection();
});

// Function to add behavior code to the log
function addToLog(code) {
    logSection.innerHTML += `${code}<br>`;
    logSection.scrollTop = logSection.scrollHeight;  // Scroll to the bottom
}

// Function to create a new section in the log
function addNewSection() {
    logSection.innerHTML += `<br>--- New Section ---<br>`;
}
