const mainInput = document.getElementById('mainInput');
const entriesSection = document.getElementById('entries');
const addEntry = document.getElementById('addEntry');

addEntry.addEventListener("click", postEntry);

function postEntry() {
    // Assign todays date to variable entryDate in format: dd mmm
    const today = new Date();
    const dd = today.getDate().toString().padStart(2, '0');
    const mmm = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][today.getMonth()];

    const entryDate = `${dd} ${mmm}`;

    const innerEntry = `
    <div class = "detailBar">
        <div>
            <p class ="date">${entryDate}</p>
        </div>
        <select class = "entryCategory">
            <option>Journal</option>
            <option>Fitness</option>
            <option>Faith</option>
        </select>
    </div>
    <div>
        <p>${mainInput.value}</p>
    </div>
    `;

    const newEntry = document.createElement('div');
    newEntry.setAttribute('class', 'addedEntry')
    newEntry.innerHTML = innerEntry;

    entriesSection.insertBefore(newEntry, entriesSection.firstChild);

    mainInput.value = "";


}
