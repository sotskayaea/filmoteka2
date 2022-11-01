import '../sass/main.scss';
import refs from './refs';
import onRenderPopularGallery from './onRenderPopularGallery.js';
import onLoader from './onLoader';



export default function onRenderHomePage(){

    //Меняем хедер для главной страницы
    refs.headerContainer.classList.remove('header__container--library');
    refs.headerContainer.classList.add('header__container--home');
    refs.libraryPage.classList.remove('header__menu-link--current');
    refs.homePage.classList.add('header__menu-link--current');
    refs.headerSearchForm.style.display = 'flex';
    refs.headerBtns.style.display = 'none';
    refs.libraryGallery.style.display = 'none';
    refs.homeGallery.style.display = 'block';
    
    //Запускаем функцию для отрисовки галереи популярных фильмов
    localStorage.setItem('page','home');
    localStorage.setItem('query', '')
    
    onLoader();
    onRenderPopularGallery();
    

    
    



}