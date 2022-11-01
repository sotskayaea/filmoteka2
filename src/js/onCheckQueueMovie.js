import onAddQueue from "./onAddQueue";
import onRemoveQueue from './onRemoveQueue';



export default function onCheckQueueMovie(currentMovie){
    const queue = JSON.parse(localStorage.getItem('queue'));
    const addQueueBtn = document.querySelector('.queue-btn');
    const checkMovie = queue.map(x => x.id).includes(currentMovie.id);
    if (checkMovie === true){
        addQueueBtn.textContent ='Remove from queue';
        addQueueBtn.classList.remove('main-button--currentBtn');
        addQueueBtn.addEventListener('click',() => onRemoveQueue(currentMovie));
       }
       if(checkMovie === false){
        addQueueBtn.textContent = 'Add to Queue';
        addQueueBtn.classList.add('main-button--currentBtn');
        addQueueBtn.addEventListener('click', () => onAddQueue(currentMovie));
       }
    
}