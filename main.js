'use strict'

//navbar바 투명하게 만들고 스크롤시 색 변경하기
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    
    
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark')
    }
});


//navbar 메뉴 클릭시 해당메뉴로 스크롤 이동
const navbar_menu = document.querySelector('.navbar_menu');
navbar_menu.addEventListener('click', (event) => {
    
    
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    
    navbar_menu.classList.remove('open');
    scrollIntoView(link);
});

//navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar_toggle-btn');
navbarToggleBtn.addEventListener('click',()=> {
    navbar_menu.classList.toggle('open');
});


//homecontactbtn 클릭시 해당 위치로 이동
const homeContactBtn = document.querySelector('.home_contact');
homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});




//projects 버튼 클릭시 해당 프로젝트가 보이게
const workBtnContainer = document.querySelector('.work_categories');
const projectContainer = document.querySelector('.work_projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
    
    const filter = e.target.dataset.filter;
    

    //선택된 엑티브 없애기
    const active = document.querySelector('.category_btn.selected');
    active.classList.remove('selected');
    const targer = e.target.nodeName === 'BUTTON' ? e.target :
                        e.target.parentNode;
    targer.classList.add('selected');
    
    projectContainer.classList.add('anim-out');
    
    setTimeout(() => {
        projects.forEach((project) => {
            
            if (filter === '*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });    
        projectContainer.classList.remove('anim-out');
    }, 300);
    
    
    
});

//스크롤시 천천히 해당 페이지로 이동
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}
