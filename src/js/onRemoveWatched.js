import onAddWatched from "./onAddWatched";
import onRenderWatchedGallery from "./onRenderWatchedGallery";


export default function onRemoveWatched(movie){
    const watched = JSON.parse(localStorage.getItem('watched'));
    const addWatchedBtn = document.querySelector('.watched-btn');

    addWatchedBtn.textContent = 'Add to watched';
    addWatchedBtn.classList.add('main-button--currentBtn');
    addWatchedBtn.removeEventListener('click',() => onRemoveWatched(movie));
    addWatchedBtn.addEventListener('click', () => onAddWatched(movie));
    
        const deletedMovie = watched.filter(el => el.id !== movie.id)
        localStorage.setItem('watched', JSON.stringify(deletedMovie));
        
    //Добавляем на отрисовку в бибилиотеку просмотренных фильмов
    onRenderWatchedGallery();

}