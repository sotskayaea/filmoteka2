import '../sass/main.scss';
import refs from './refs.js';
import onRenderMarkupModal from './onRenderMarkupModal';
import onCheckWatchedMovie from './onCheckWatchedMovie';
import onCheckQueueMovie from './onCheckQueueMovie';



export default  async function onRenderModal(e){
    e.preventDefault()
    const clickItem = e.target.parentNode.closest('.gallery__item');
    const id = clickItem.getAttribute('id');

    refs.modalCloseBtn.addEventListener('click',onCloseModal);
    refs.modal.addEventListener('click',onBackdropClick);
    
    if(!clickItem){
        return
    }

    onOpenModal();
    const currentMovie = await onRenderMarkupModal(id,'modal');
   
    // Добавляем фильм в просмотренные и на очередь фильмы
   onCheckWatchedMovie(currentMovie);
   onCheckQueueMovie(currentMovie);


    function onOpenModal(){
        window.addEventListener('keydown', onEscCloseModal);
        refs.modal.classList.remove('modal__backdrop--is-hidden');
  
    }

    function onCloseModal(e){
        window.removeEventListener('keydown', onEscCloseModal);
        refs.modal.classList.add('modal__backdrop--is-hidden');
        refs.modalMarkup.innerHTML= '';
        


    }

    function onEscCloseModal(e){
        if(e.code === 'Escape'){
            onCloseModal()
          }
    }

    function onBackdropClick(e){
        if(e.target === e.currentTarget){
          onCloseModal()
        }
      }

}