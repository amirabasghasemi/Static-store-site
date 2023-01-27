//modal code...
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function modallanch() {
    var body1 = document.getElementById("body-1").style.display="block";
    var body2 = document.getElementById("body-2").style.display="none";
    var btnlog = document.getElementById("btn-log").style.display="none";
    var btnexite = document.getElementById("btn-exite").style.display="block";
  }
  function btnexitelog() {
    var body1 = document.getElementById("body-1").style.display="none";
    var body2 = document.getElementById("body-2").style.display="block";
    var btnlog = document.getElementById("btn-log").style.display="block";
    var btnexite = document.getElementById("btn-exite").style.display="none";
  }
//scorol card code...
var splide = new Splide('.splide', {
    type: 'loop',
    perPage: 5,
    rewind: true,
    breakpoints: {
        992: {
            perPage: 2,
            gap: '.7rem',
            height: '30rem',
        },
        640: {
            perPage: 2,
            gap: '.7rem',
            height: '30rem',
        },
        480: {
            perPage: 1,
            gap: '.7rem',
            height: '30rem',
        },
    },
});
splide.mount();
//timer in shop code...
const countdown = () => {
	const newYear = new Date('oct 27 2022');
	const currentYear = new Date();
	const timer = newYear - currentYear;

	//Assign each element a value
	const seconds = 1000;
	const minutes = seconds * 60;
	const hours = minutes * 60;
	const days = hours * 24;

	//Calculate each element declare the value
	const cdDay = Math.floor(timer / days);
	const cdHour = Math.floor((timer % days) / hours);
	const cdMinute = Math.floor((timer % hours) / minutes);
	const cdSecond = Math.floor((timer % minutes) / seconds);

	// Get all the required element by ID
	document.getElementById('day').innerText = cdDay;
	document.getElementById('hour').innerText = cdHour;
	document.getElementById('minute').innerText = cdMinute;
	document.getElementById('second').innerText = cdSecond;
};
setInterval(countdown, 1000);
//slider-w code...
function sliderw1() {
    var sliderw2 = document.getElementById("slider-w-2").style.display="none";
    var sliderw1 = document.getElementById("slider-w-1").style.display="block";
}
function sliderw2() {
    var sliderw2 = document.getElementById("slider-w-2").style.display="block";
    var sliderw1 = document.getElementById("slider-w-1").style.display="none";
}
