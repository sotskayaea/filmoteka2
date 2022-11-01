import onUpdatePage from "./onUpdatePage";
import onPagination from "./onPagination";
import api from "./API/apiService";
import '../sass/main.scss';
import refs from './refs.js';
import mainGallery from '../templates/mainGallery.hbs';
import onChangeDate from './newData/changeDate.js';
import onRenderPopularGallery from './onRenderPopularGallery';
import onChangeGenres from './newData/changeGenres';
import onLoader from "./onLoader";

export default async function onRenderNewPageSearch(page){
    onLoader();
    api.updatePage(page)
    const searchMovie = await api.getSearchMovie();
    onPagination(searchMovie)
    onUpdatePage()
    if(searchMovie.results.length === 0){
        refs.msgErr.innerHTML = 'Search result not successful. Enter the correct movie name and';
        refs.input.value = '';
        api.onChangeQuery('')
        onRenderPopularGallery()
        return
    }
    onChangeDate(searchMovie,'gallery');
    onChangeGenres(searchMovie,'gallery');
    
    const gallery = await mainGallery(searchMovie);


    refs.mainGallery.style.display = 'flex';
    refs.loader.style.display = 'none';
    refs.mainGallery.innerHTML = gallery;
    refs.input.value = '';
    refs.msgErr.innerHTML = '';

}