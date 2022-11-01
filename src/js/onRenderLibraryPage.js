import '../sass/main.scss';
import refs from './refs';
import onRenderWatchedGallery from './onRenderWatchedGallery';


export default function onRenderLibraryPage(e){
    e.preventDefault();
    //Меняем хедер для библиотеки выбранных фильмов
    refs.headerContainer.classList.remove('header__container--home');
    refs.headerContainer.classList.add('header__container--library');
    refs.homePage.classList.remove('header__menu-link--current');
    refs.libraryPage.classList.add('header__menu-link--current');
    refs.headerSearchForm.style.display = 'none';
    refs.headerBtns.style.display = 'flex';
    refs.homeGallery.style.display = 'none';
    refs.libraryGallery.style.display = 'block';
    refs.watchedBtn.classList.add('main-button--currentBtn');
    // refs.modal.style.display = 'none';спросить у димы как сделать чтоб футер был внизу
    
// Запускаем ф-цию для отрисовки галереи просмотренных фильмов
    localStorage.setItem('page','watched');
    onRenderWatchedGallery();
  

   
}