document.addEventListener('DOMContentLoaded', function() {
    const behaviorTable = document.querySelector('.table-container');
    const logSection = document.getElementById('log');
    const newSectionBtn = document.getElementById('new-section-btn');

    behaviorTable.addEventListener('click', function(event) {
        if (event.target.closest('.element')) {
            const behaviorCode = event.target.closest('.element').getAttribute('data-code');
            addToLog(behaviorCode);
        }
    });

    newSectionBtn.addEventListener('click', function() {
        addNewSection();
    });

    function addToLog(code) {
        logSection.innerHTML += `${code} `;
        logSection.scrollTop = logSection.scrollHeight;  // Scroll to the bottom
    }

    function addNewSection() {
        logSection.innerHTML += `<br>=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=<br>`;
    }
});
