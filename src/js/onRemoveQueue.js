import onAddQueue from './onAddQueue';
import onRenderQueueGallery from './onRenderQueueGallery';


export default function onRemoveQueue(movie){
    const queue = JSON.parse(localStorage.getItem('queue'));
    const addQueueBtn = document.querySelector('.queue-btn');

    addQueueBtn.textContent = 'Add to queue';
    addQueueBtn.classList.add('main-button--currentBtn');
    addQueueBtn.removeEventListener('click',() => onRemoveQueue(movie));
    addQueueBtn.addEventListener('click', () => onAddQueue(movie));
    
        const deletedMovie = queue.filter(el => el.id !== movie.id)
        localStorage.setItem('queue', JSON.stringify(deletedMovie));
        
    //Добавляем на отрисовку в бибилиотеку просмотренных фильмов
    onRenderQueueGallery();

}