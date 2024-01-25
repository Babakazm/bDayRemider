class BirthdayReminder {
    constructor() {
        this.birthdays = new Map();
    }

    addBirthday(name, date) {
        if (this.birthdays.has(name)) {
            return `${name} already exists in the database.`;
        } else {
            this.birthdays.set(name, new Date(date));
            return `Birthday for ${name} added.`;
        }
    }

    checkTodaysBirthdays() {
        const today = new Date();
        let message = "No birthdays today.";

        this.birthdays.forEach((date, name) => {
            if (date.getDate() === today.getDate() && date.getMonth() === today.getMonth()) {
                message = `Happy Birthday, ${name}!`;
            }
        });

        return message;
    }
}

const reminder = new BirthdayReminder();
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('message').innerText = reminder.checkTodaysBirthdays();
});

function addBirthday() {
    const name = document.getElementById('name').value;
    const birthday = document.getElementById('birthday').value;
    const message = reminder.addBirthday(name, birthday);
    document.getElementById('message').innerText = message;
}
