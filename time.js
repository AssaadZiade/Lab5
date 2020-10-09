const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const colors = ['rgb(255, 0, 0)', '#06beb6', '#eb3349', '#ff512f', '#ff5f6d', '#aa076b', 'rgb(255, 196, 0)', '#48b1bf', '#f45c43', '#dd2476', '#ffc371', '#61045f'];
const buttonColors = ['#ff5f6d', '#aa076b', 'rgb(255, 196, 0)', '#48b1bf', 'rgb(255, 0, 0)', '#06beb6', '#eb3349', '#ff512f', '#f45c43', '#dd2476', '#ffc371', '#61045f'];
const updateMonth = (i) => {
    document.getElementById("month").innerHTML = month[i];
}
const background = document.querySelector(".box");

const updateDay = (i) => {
    document.getElementById("day").innerHTML = days[i];
}
const monthButton = document.getElementById("month-button");
const dayButton = document.getElementById('day-button');

const changeColor = (i) => {

    background.style.backgroundColor = colors[i];
    monthButton.style.backgroundColor = buttonColors[i];
    dayButton.style.backgroundColor = buttonColors[i];
    
    
}

let monthCount = 1;
let dayCount = 1;
let color = 0;

monthButton.addEventListener('click', () => {
    updateMonth(monthCount);
    monthCount++;
    if (monthCount>= 12) {
        monthCount = 0;
    }
    if(color >= colors.length) {
        color = 0;
    }
    changeColor(color);
    color++;
} );
dayButton.addEventListener('click', () => {
    updateDay(dayCount);
    dayCount++;
    if (dayCount >= 7) {
        dayCount = 0;
    }
    if (color >= colors.length) {
        color = 0;
    }
    changeColor(color);
    color++;
});
