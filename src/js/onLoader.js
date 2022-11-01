import '../sass/main.scss';
import refs from './refs.js';


export default function onLoader(){
    

    if(localStorage.getItem('page') === 'home'){
        refs.loader.style.display = 'block';
        refs.mainGallery.style.display = 'none';

    }
    if(localStorage.getItem('page') === 'watched'){
        refs.libraryLoader.style.display = 'block';
        refs.watchedGallery.style.display = 'none';
    }
    if(localStorage.getItem('page') === 'queue'){
        refs.libraryLoader.style.display = 'block';
        refs.queueGallery.style.display = 'none';

    }
}