import '../sass/main.scss';
import refs from './refs.js';
import libraryGallery from '../templates/libraryGallery.hbs';
import onLoader from './onLoader';


export default async function onRenderWatchedGallery(){

    if(localStorage.getItem('page') === 'watched'){
        onLoader()
        refs.watchedBtn.classList.add('main-button--currentBtn');
        refs.queueBtn.classList.remove('main-button--currentBtn');
        refs.queueGallery.style.display= ' none';

        const watched = JSON.parse(localStorage.getItem('watched'));
        
            refs.watchedGallery.innerHTML = '';
            const watchedGallery = await libraryGallery(watched.reverse());
            
            
            refs.watchedGallery.style.display = 'flex';
            refs.libraryLoader.style.display = 'none';
            refs.watchedGallery.insertAdjacentHTML('afterbegin', watchedGallery);
            
    }

    if(localStorage.getItem('page') === 'home' || localStorage.getItem('page') === 'queue'){
        return
    }

}