// Functions for Weather site:

document.addEventListener("DOMContentLoaded", function(){   
    //Use the wind chill function.
    let speed = 25;
    let temp = 10;
    // let feelTemp = document.getElementById('feelTemp');
    //feelTemp.innerHTML = buildWC(speed, temp);
    buildWC(speed, temp);

})




/* ******************************************************
* Calculates the Wind Chill Temperature.
******************************************************* */
function buildWC(speed, temp) {
    let feelTemp = document.getElementById('feelTemp');

    // Compute the Windchill
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed,
        0.16);
    console.log(wc);

    // Round the answer to a int
    wc = Math.floor(wc);

    // If chill is greater than temp, return the temp
    wc = (wc > temp) ? temp : wc;

    // Display Windchill
    console.log(wc);
    // Feels like temp in F
    feelTemp.innerHTML = "Wind chill:" + wc + "°F";

    // return wc;

}