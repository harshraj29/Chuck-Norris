var btn = document.getElementById("joke-btn");

var randomJoke = '';

var humbleRequest = new XMLHttpRequest();
humbleRequest.open('GET', 'https://api.chucknorris.io/jokes/random');
humbleRequest.onload = function(){
var humbleData = JSON.parse(humbleRequest.responseText);

randomJoke = humbleData.value;

document.getElementById('joke-to-change').innerHTML = randomJoke;
    
};
humbleRequest.send();