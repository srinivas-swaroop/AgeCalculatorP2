const yearElement = document.getElementById('footer');
const year = new Date().getFullYear();
const month = new Date().getMonth(); // Current month (0-11, where 0 is January)
const day = new Date().getDate(); // Current day of the month
yearElement.innerHTML = year;

const dataPerson = document.getElementById('date-i');
const submitButton = document.getElementById('calculate-btn');

submitButton.addEventListener('click', () => {
    const birthDateString = dataPerson.value;

    if (!birthDateString) {
        alert("Please select a valid date!");
        return;
    }

    const birthYear = parseInt(birthDateString.slice(0, 4), 10);
    const birthMonth = parseInt(birthDateString.slice(5, 7), 10) - 1; // Month is zero-based
    const birthDay = parseInt(birthDateString.slice(8, 10), 10);

    const currentDate = new Date();
    const currentAge = year - birthYear;

    let ageYears = currentAge;

    // Calculate months
    let ageMonths = month - birthMonth;
    if (ageMonths < 0) {
        ageMonths += 12; // Adjust if birth month hasn't occurred yet this year
        ageYears--;
    }

    // Calculate days
    let ageDays = day - birthDay;
    if (ageDays < 0) {
        // If current day is less than birth day, adjust for the previous month
        const lastMonth = new Date(year, month - 1, 0); // Get the last day of the previous month
        ageDays += lastMonth.getDate(); // Add days from the last month
    }

    // Update HTML with the calculated age
    const yearElement = document.getElementById('year');
    const monthElement = document.getElementById('month');
    const dayElement = document.getElementById('day');

    yearElement.textContent = ageYears;
    monthElement.textContent = ageMonths;
    dayElement.textContent = ageDays;

    // Format the output message with template literals
    const ageMessage = `Your ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;

    // Display the age message in the HTML
    const ageDisplay = document.getElementById('ageT');
    ageDisplay.textContent = ageMessage;

      dataPerson.value = "";
});
