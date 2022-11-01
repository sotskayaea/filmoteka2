import '../sass/main.scss';
import refs from './refs.js';
import api from './API/apiService.js';
import onChangeRating from './newData/changeRating';
import onChangeGenres from './newData/changeGenres';
import onChangeDate from './newData/changeDate';
import modalCard from '../templates/modalCard'



export default async function onRenderMarkupModal(id,place){
 
    const Markup = await api.getDescriptionMovie(id);
    Markup.genresforLibrary = onChangeGenres(Markup,'library');

    onChangeRating(Markup,'modal');
    onChangeDate(Markup,'modal');


    if( place === 'modal'){
        onChangeGenres(Markup,'modal');
    
        const modal = await modalCard(Markup);
        refs.modalMarkup.insertAdjacentHTML('afterbegin', modal);
    
    }

    return Markup
}