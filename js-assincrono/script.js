// declarando uma const p/ a API
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

// const p/ img + chamando o elemento
const catBtn = document.getElementById('miau');

// const p/ botão miau + chamando o elemento
const catImg = document.getElementById('cats');


// função API
const getCats = async () => {
        const data = await fetch(BASE_URL)
        .then((res) => res.json())
        .catch((e) => console.log(e));
       
        return data.webpurl;
}

// função carregar dado (img) da API
const loadImg = async () => {
    catImg.src = await getCats(); //aplicar o dado no campo da img
}

// add evento no botão miau
catBtn.addEventListener('click', loadImg);

loadImg();