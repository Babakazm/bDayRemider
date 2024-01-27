function checkBirthdays() {
    const checkDate = new Date(document.getElementById('checkDate').value);
    const birthdays = JSON.parse(localStorage.getItem('birthdays')) || {};
    let message = "No birthdays on this date.";

    for (let name in birthdays) {
        let bDate = new Date(birthdays[name]);
        if (bDate.getDate() === checkDate.getDate() && bDate.getMonth() === checkDate.getMonth()) {
            message = `Happy Birthday, ${name}!\n`;
             // Assuming you want to show only the first match
        }
    }

    document.getElementById('message').innerText = message;
}
