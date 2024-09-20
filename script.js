document.addEventListener('DOMContentLoaded', function() {
    const behaviorTable = document.querySelector('.table-container');
    const logSection = document.getElementById('log');
    const newSectionBtn = document.getElementById('new-section-btn');
    const copyBtn = document.getElementById('copy-btn'); // Copy button

    behaviorTable.addEventListener('click', function(event) {
        if (event.target.closest('.element')) {
            const behaviorCode = event.target.closest('.element').getAttribute('data-code');
            addToLog(behaviorCode);
        }
    });

    newSectionBtn.addEventListener('click', function() {
        addNewSection();
    });

    copyBtn.addEventListener('click', function() {
        copyToClipboard();
    });

    function addToLog(code) {
        logSection.innerHTML += `${code} `;
        logSection.scrollTop = logSection.scrollHeight;  // Scroll to the bottom
    }

    function addNewSection() {
        logSection.innerHTML += `<br>--- New Section ---<br>`;
    }

    // Function to copy the log to clipboard
    function copyToClipboard() {
        const logText = logSection.innerText; // Get the log text
        const textArea = document.createElement('textarea');
        textArea.value = logText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy'); // Copy the text to clipboard
        document.body.removeChild(textArea); // Remove the textarea after copying
        alert('Log copied to clipboard!');
    }
});
