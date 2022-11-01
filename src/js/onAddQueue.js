import '../sass/main.scss';
import onRemoveQueue from './onRemoveQueue'
import onRenderQueueGallery from './onRenderQueueGallery';


export default function onAddWatched(movie){
    
    const queue = JSON.parse(localStorage.getItem('queue'));
    const addQueueBtn = document.querySelector('.queue-btn');

    addQueueBtn.textContent ='Remove from queue';
    addQueueBtn.classList.remove('main-button--currentBtn');
    addQueueBtn.removeEventListener('click',() => onAddQueue(movie));
    addQueueBtn.addEventListener('click',() => onRemoveQueue(movie));

        queue.push(movie);
        localStorage.setItem('queue', JSON.stringify(queue));
       
       // Добавляем на отрисовку в бибилиотеку просмотренных фильмов 
        onRenderQueueGallery();
        
       
        
    
    
}