
const img = document.querySelector('#review-person-pic');
const fname = document.querySelector('.reviewer-name');
const txt = document.querySelector('#review-para');

const leftbtn = document.querySelector('.btn-left');
const rightbtn = document.querySelector('.btn-right');




const reviews = [
    {
        id: 1,
        fullName: "Priyanka Chopra",
        img: "./img/review1.jpg",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Sapiente odio error mollitia,    possimus quia nihil minus pariatur voluptatem asperiores explicabo numquam ratione, iste cupiditate culpa?"
    },
    {
        id: 2,
        fullName: "Shahrukh Khan",
        img: "img/review2.jpg",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Sapiente odio error mollitia,    possimus quia nihil Lorem ipsum, dolor sit amet consectetur adipisicing elit "
    },
    {
        id: 3,
        fullName: "Angel Priya",
        img: "./img/review3.jpg",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Sapiente odio error mollitia,    possimus quia nihil minus pariatur voluptatem asperiores explicabo numquam ratione, iste cupiditate culpa?adf aljf  adjf  ajf kl adkjf  kadfkjafk akdjf kla dfjk"
    },
    {
        id: 4,
        fullName: "Lionel Messi",
        img: "./img/review4.jpg",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Sapiente odio error mollitia,    possimus quia nihil minus pariatur voluptatem asperiores explicabo numquam ratione, iste cupiditate culpa adf afdaf adfda adf adf ?"
    },
    {
        id: 5,
        fullName: "Rick Beato",
        img: "./img/review5.jpg",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Sapiente odio error mollitia,    possimus quia nihil minus pariatur voluptatem asperiores explicabo numquam ratione?"
    },
];



let currentItem = 1;

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    fname.textContent = item.fullName;
    txt.textContent = item.text;

}

window.addEventListener('DOMContentLoaded',function(){
   showPerson(currentItem);
});

rightbtn.addEventListener('click',function(){
    currentItem++;
    if(currentItem>reviews.length-1){
        currentItem=0;
    }
    showPerson(currentItem)
});
leftbtn.addEventListener('click',function(){
    currentItem--;
    if(currentItem<0){
        currentItem=reviews.length-1;
    }
    showPerson(currentItem)
});

const menuopen = document.querySelector('.menu-open');
const menuclose = document.querySelector('.menu-close');

menuopen.addEventListener('click',function(){
    document.querySelector('.nav-menu').classList.remove('invisible');
    menuopen.classList.add('invisible')
    menuclose.classList.remove('invisible');
    window.scrollTo(0,0)
    document.querySelector('body').classList.add('stop-scrolling')
});

menuclose.addEventListener('click',function(){
    document.querySelector('.nav-menu').classList.add('invisible');
    menuopen.classList.remove('invisible')
    menuclose.classList.add('invisible')
    document.querySelector('body').classList.remove('stop-scrolling')

})






