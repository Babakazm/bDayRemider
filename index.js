class BirthdayReminder {

    addBirthday(name, birthday) {
        const birthdays = JSON.parse(localStorage.getItem('birthdays')) || {};
        if (birthdays[name]) {
            return `${name} already exists.`;
        }
        birthdays[name] = birthday;
        localStorage.setItem('birthdays', JSON.stringify(birthdays));
        return `Birthday for ${name} added.`;
    }

    checkBirthdaysOnDate(dateToCheck) {
        const selectedDate = new Date(dateToCheck);
        const birthdays = JSON.parse(localStorage.getItem('birthdays')) || {};
        let message = "No birthdays on this date.";

        Object.keys(birthdays).forEach(name => {
            let bDate = new Date(birthdays[name]);
            if (bDate.getDate() === selectedDate.getDate() && bDate.getMonth() === selectedDate.getMonth()) {
                if (message === "No birthdays on this date.") {
                    message = "";
                }
                message += `Happy Birthday, ${name}!\n`;
            }
        });

        return message;
    }
}

const reminder = new BirthdayReminder();

function addBirthday() {
    const name = document.getElementById('name').value;
    const birthday = document.getElementById('birthday').value;
    const message = reminder.addBirthday(name, birthday);
    document.getElementById('message').innerText = message;
}

function checkBirthdays() {
    const checkDate = document.getElementById('checkDate').value;
    const message = reminder.checkBirthdaysOnDate(checkDate);
    document.getElementById('message').innerText = message;
}
