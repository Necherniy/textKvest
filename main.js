let start = document.getElementById('start');

let body = document.body

let title;
let input;
let pretitle;
let link1;
let link2;

start.addEventListener('click', () => {
    start.parentNode.removeChild(start);
    input = document.createElement('input')
    title = document.createElement('h1')
    title.textContent = 'Введите ваше имя:'
    body.append(title)
    body.append(input)

    input.addEventListener('keyup', (event) =>{
        if (event.code == 'Enter' && input.value != ''){
        title.textContent = 'Здравствуйте, ' + input.value +'!'  
        input.parentNode.removeChild(input)

        setTimeout(() => {
            title.parentNode.removeChild(title);
            iLoveMath();
        }, 3000)
    }})
})


function createLevel(question, answer, nextLevel){
    title = document.createElement('h1')
    input = document.createElement('input')
    pretitle = document.createElement('p')

    title.textContent = question
    body.append(title)
    body.append(input)
    body.append(pretitle)

    input.addEventListener('keyup', (event) =>{
        if (event.code == 'Enter'){
            if (input.value == answer){
                pretitle.textContent = 'Правильно!'
                input.value = ''
                setTimeout(()=> {
                    input.parentNode.removeChild(input)
                    title.parentNode.removeChild(title)
                    pretitle.parentNode.removeChild(pretitle)
                    if (nextLevel != null){
                    nextLevel()
                    }
                }, 3000 )
            }
            else{
                pretitle.textContent = 'Не правильно!'
                input.value = ''
            }
        }
    })
}




function iLoveMath(){
    createLevel('Сколько будет 2*8?', 16, iLoveGeography)
}
function iLoveGeography(){
    createLevel('Назовите столицу России:', 'Москва', iLoveBiology)
}
function iLoveBiology(){
    createLevel('Сколько ножек у паука?', 8, iLoveCities)
}


function createLevelImg(link1, link2,question,nextLevel){
    title = document.createElement('h1')
    img1 = document.createElement('img')
    img2 = document.createElement('img')
    pretitle = document.createElement('p')
    title.textContent = question
    img1.src = link1
    img2.src = link2

    body.append(title)
    body.append(img1)
    body.append(img2)
    body.append(pretitle)

    img1.addEventListener('click', () =>{
        pretitle.textContent = 'Верно'
        setTimeout(() =>{
            input.parentNode.removeChild(input)
            title.parentNode.removeChild(title)
            pretitle.parentNode.removeChild(pretitle)
            img1.parentNode.removeChild(img1)
            img2.parentNode.removeChild(img2)
            if(nextLevel != null){
                nextLevel()
            }
        }, 3000)
    })
    img2.addEventListener('click', () =>{
        pretitle.textContent = 'Неверно'
    })
}

function iLoveCities(){
    createLevelImg('./img/mosc.jpg', './img/pit.jpg', 'Где изображена Москва?', iLoveMath)
}