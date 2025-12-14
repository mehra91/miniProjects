const clock = document.getElementById("clock");



setInterval(() => {
    date = new Date();
    clock.innerText = date.toLocaleTimeString();

}, 1000);
 