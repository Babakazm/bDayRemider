let birthdays = [];

function addBirthday() {
    const name = document.getElementById('name').value;
    const birthday = document.getElementById('birthday').value;

    if(name && birthday) {
        birthdays.push({ name, birthday });
        displayBirthdays();
        document.getElementById('name').value = '';
        document.getElementById('birthday').value = '';
    } else {
        alert('Please enter both name and birthday.');
    }
}

function displayBirthdays() {
    const birthdayList = document.getElementById('birthdayList');
    birthdayList.innerHTML = '';

    birthdays.forEach(bday => {
        const div = document.createElement('div');
        div.textContent = `${bday.name} - ${bday.birthday}`;
        birthdayList.appendChild(div);
    });
}
