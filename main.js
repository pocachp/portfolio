'use strict'

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;


document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

// Handle scrolling when tapping on the navbar menu

//navbar 클래스 이름들을 navbarMenu라는 변수에 할당
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
const target = event.target;
const link = target.dataset.link;
if(link == null){
    return;
}
/*   
    undifined로 나올 경우
    우리가 원하는 데이터가 아닌 경우를 빨리 확인한 후 함수를 리턴하고
    더 이상 밑에 있는 코드가 실행 되지 않도록 리턴이 되기 때문에 
    링크가 있는 경우에만 이 밑 아래 있는 코드가 실행될 것임
*/

console.log(event.target.dataset.link); 
//클릭했을 때 target이 되는 요소를 dataset(우리가 정의한 변수 할당)의 link
const scrollTo = document.querySelector(link);
scrollTo.scrollIntoView({behavior: 'smooth'});


});