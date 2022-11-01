import '../sass/main.scss';
import refs from './refs.js';
import libraryGallery from '../templates/libraryGallery.hbs';
import onLoader from './onLoader';


export default async function  onRenderQueueGallery(){

    if(localStorage.getItem('page') === 'queue'){
        onLoader()
        refs.queueBtn.classList.add('main-button--currentBtn');
        refs.watchedBtn.classList.remove('main-button--currentBtn');
        refs.watchedGallery.style.display= 'none';

        const queue = JSON.parse(localStorage.getItem('queue'));
        
            refs.queueGallery.innerHTML = '';
            const queueGallery = await libraryGallery(queue.reverse());
            refs.queueGallery.style.display = 'flex';
            refs.libraryLoader.style.display = 'none';
            refs.queueGallery.insertAdjacentHTML('afterbegin', queueGallery);
    }

    if(localStorage.getItem('page') === 'home' || localStorage.getItem('page') === 'watched'){
        return
    }
}