window.addEventListener('load', () => {
    const hambutton =document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

    // To solve the mid resizing isssue with responsive class on
    window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
});

window.addEventListener('load', (event) => {
    const week = document.querySelector('#weekday');
    var day = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    week.textContent = weekday[day.getDay()];

    const pancake =document.getElementById('pancakes');
    if (day.getDay() == 5) { // if it is Friday then it will show

        pancake.style.display = "block";
    }
    else {
        pancake.style.display = "none";
    }

    const dayNum = document.getElementById('day');
    dayNum.textContent = day.getDate();

    var monthName = ['January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December'];
const monthNum = document.getElementById('month');
monthNum.textContent =monthName[day.getMonth()];

const year = document.getElementById('year');
year.textContent = day.getFullYear();

const cry = document.querySelector("copyrightyear");
cry.textContent = day.getFullYear();

})