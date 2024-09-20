document.addEventListener('DOMContentLoaded', function() {
    const behaviorTable = document.getElementById('behavior-table');
    const logSection = document.getElementById('log');
    const newSectionBtn = document.getElementById('new-section-btn');

    behaviorTable.addEventListener('click', function(event) {
        if (event.target.classList.contains('clickable')) {
            const behaviorCode = event.target.getAttribute('data-code');
            addToLog(behaviorCode);
        }
    });

    newSectionBtn.addEventListener('click', function() {
        addNewSection();
    });

    // Function to add behavior code to the log without timestamp
    function addToLog(code) {
        logSection.innerHTML += `${code}<br>`;
        logSection.scrollTop = logSection.scrollHeight;  // Scroll to the bottom
    }

    // Function to create a new section in the log
    function addNewSection() {
        logSection.innerHTML += `<br>--- New Section ---<br>`;
    }
});
