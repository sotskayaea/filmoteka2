import '../sass/main.scss';
import onRemoveWatched from './onRemoveWatched';
import onRenderWatchedGallery from './onRenderWatchedGallery';


export default function onAddWatched(movie){
   
    const watched = JSON.parse(localStorage.getItem('watched'));
    const addWatchedBtn = document.querySelector('.watched-btn');

    addWatchedBtn.textContent ='Remove from watched';
    addWatchedBtn.classList.remove('main-button--currentBtn');
    addWatchedBtn.removeEventListener('click',() => onAddWatched(movie));
    addWatchedBtn.addEventListener('click',() => onRemoveWatched(movie));

        watched.push(movie);
        localStorage.setItem('watched', JSON.stringify(watched));
       
       // Добавляем на отрисовку в бибилиотеку просмотренных фильмов 
        onRenderWatchedGallery();
        
    
}
