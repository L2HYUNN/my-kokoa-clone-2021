const time = document.querySelector(".js-clock");

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    time.innerHTML = `${hours < 10 ? `0${hours}` :hours}:${minutes < 10 ? `0${minutes}` :minutes}`;
}


function init(){
    getTime();
    setInterval(getTime, 1000);

}
init();