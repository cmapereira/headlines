
var search = document.querySelector('#search');
var div = document.querySelector('.news');
var selectCountry = document.querySelector('#country');
var selectCategory = document.querySelector('#category');


function selectCountryCategory(){
    var country = selectCountry.options[selectCountry.selectedIndex].value
    var category = selectCategory.options[selectCategory.selectedIndex].value
    console.log(country, category)

    var url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=3abf309cbb9b4d6fbd691c5fd1ec6455`;

    var req = new Request(url);
    fetch(req)
        .then((response) => {
            return response.json()
    }).then((data) => {
        arrayNews = data.articles
        console.log(arrayNews)
        arrayNews.map((el) => {
            var template = `<h3 class="author">Titulo: ${el.title}</h3>
                        <p class="title"><b>Autor:<b> ${el.author}</p>
                        <a class="url" href=${el.url} target="_blank">Saiba Mais</a>
                        <br>
                        <br>
                        <hr> 
                        `
            div.innerHTML += template;
        });
    });
    
};

search.addEventListener("click", () => {
    selectCountryCategory();
});

 






