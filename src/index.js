import './sass/main.scss';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import refs from './js/refs';
import onRenderPopularGallery from './js/onRenderPopularGallery.js';
import onRenderLibraryPage from './js/onRenderLibraryPage.js';
import onRenderHomePage from './js/onRenderHomePage.js';
import onRenderSearchGallery from './js/onRenderSearchGallery.js';
import onRenderModal from './js/onRenderModal.js';
import onRenderWatchedGallery from './js/onRenderWatchedGallery';
import onRenderQueueGallery from './js/onRenderQueueGallery.js'
// import API from './js/API/apiService.js';
// import mainGallery from './templates/mainGallery.hbs';
// import onChangeDate from './js/newData/changeDate.js';
// import onChangeRating from './js/newData/changeRating.js';

(function onCheckLocalStorage(){
    const watched = localStorage.getItem('watched');
    const queue = localStorage.getItem('queue');
    localStorage.setItem('page','home')
    localStorage.setItem('query', '')

    if(!watched){
        localStorage.setItem('watched', JSON.stringify([]))
    }

    if(!queue){
        localStorage.setItem('queue', JSON.stringify([]))
    }
})()

onRenderHomePage()

refs.logoLink.addEventListener('click', onRenderHomePage);
refs.homePage.addEventListener('click', onRenderHomePage);
refs.libraryPage.addEventListener('click', onRenderLibraryPage);
refs.searchForm.addEventListener('submit',onRenderSearchGallery);
refs.mainGallery.addEventListener('click', onRenderModal);
refs.watchedGallery.addEventListener('click',onRenderModal);
refs.queueGallery.addEventListener('click',onRenderModal);
refs.watchedBtn.addEventListener('click',() => {
    localStorage.setItem('page','watched') 
    onRenderWatchedGallery()
});
refs.queueBtn.addEventListener('click', () => {
    localStorage.setItem('page','queue')
    onRenderQueueGallery()
});






