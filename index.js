const btnEL = document.getElementById("btn");
const birthdayEL = document.getElementById("birthday");
const resultEL = document.getElementById("result");

btnEL.addEventListener("click", calculatorAge);

function calculatorAge() {
    const birthdayValue = birthdayEL.value;
    if (birthdayValue === "") {
        alert("Please Enter Your Birthdate");
    } else {
        const age = getAge(birthdayValue);
        resultEL.innerHTML = 'Your age is ' + age + ' years old';
    }
}

function getAge(birthday) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthday);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();
 
    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--;
    }
    return age;
}
