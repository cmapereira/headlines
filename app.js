var div = document.querySelector('.news');

var url = 'https://newsapi.org/v2/top-headlines?country=br&category=business&apiKey=3abf309cbb9b4d6fbd691c5fd1ec6455';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        var data = response.json()
        console.log(data)
});

 




