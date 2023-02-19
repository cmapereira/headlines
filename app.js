
var search = document.querySelector('#search');
var div = document.querySelector('.news');
var selectCountry = document.querySelector('#country');
var selectCategory = document.querySelector('#category');

function selectCountryCategory(){
    var arrayNews = [];
    var country = selectCountry.options[selectCountry.selectedIndex].value;
    var category = selectCategory.options[selectCategory.selectedIndex].value;
    console.log(country, category);

    var url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=3abf309cbb9b4d6fbd691c5fd1ec6455`;

    var req = new Request(url);
    fetch(req)
        .then((response) => {
            return response.json();
    }).then((data) => {
        arrayNews = data.articles
        console.log(arrayNews)
        arrayNews.map((el) => {
            if(el.author == null || el.author ==''){
                el.author = 'Indefinido...'
            }
            template = `<br>
                        <h3 class="title">Titulo: ${el.title}</h3>
                        <br>
                        <p class="author"><b>Autor:<b> ${el.author}</p>
                        <br>
                        <a class="url" href=${el.url} target="_blank"><button class="link">Saiba Mais</button></a>
                        <br>
                        <br>
                        <hr> 
                        `
            div.innerHTML += template
        });
    });
};

function cleardiv(){
    div.innerHTML = ``;
}

search.addEventListener("click", () => {
    cleardiv();
    selectCountryCategory();
});

 






