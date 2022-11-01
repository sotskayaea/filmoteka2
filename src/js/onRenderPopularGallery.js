import '../sass/main.scss';
import api from './API/apiService.js';
import refs from './refs.js';
import mainGallery from '../templates/mainGallery.hbs';
import onChangeDate from './newData/changeDate.js';
import onChangeGenres from './newData/changeGenres.js';
import onPagination from './onPagination';
import onUpdatePage from './onUpdatePage';



 export default async function onRenderPopularGallery(page = 1){
    
    api.updatePage(page)
    const traidingMovie = await api.getTrandingMovie();
    onPagination(traidingMovie)
    onUpdatePage()
    onChangeDate(traidingMovie,'gallery');
    onChangeGenres(traidingMovie,'gallery');
    const gallery = await mainGallery(traidingMovie);
    refs.mainGallery.style.display = 'flex';
    refs.loader.style.display = 'none';
    refs.mainGallery.innerHTML = gallery;
    
    
}

