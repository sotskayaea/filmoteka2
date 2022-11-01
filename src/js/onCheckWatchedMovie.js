import onAddWatched from "./onAddWatched";
import onRemoveWatched from "./onRemoveWatched";


export default function onCheckWatchedMovie(currentMovie){
    const watched = JSON.parse(localStorage.getItem('watched'));
    const addWatchedBtn = document.querySelector('.watched-btn');
    const checkMovie = watched.map(x => x.id).includes(currentMovie.id);
    if (checkMovie === true){
       
        addWatchedBtn.textContent ='Remove from watched';
        addWatchedBtn.classList.remove('main-button--currentBtn');
        addWatchedBtn.addEventListener('click',() => onRemoveWatched(currentMovie));
       }
       if(checkMovie === false){
       
        addWatchedBtn.textContent = 'Add to watched';
        addWatchedBtn.classList.add('main-button--currentBtn');
        addWatchedBtn.addEventListener('click', () => onAddWatched(currentMovie));
       }
    
}