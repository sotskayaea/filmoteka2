import onRenderNewPageSearch from './onRenderNewPageSearch';
import api from './API/apiService';

 export default async function onRenderSearchGallery(e){
    e.preventDefault();
    const value= e.target.childNodes[1].value;
    api.onChangeQuery(value)
    onRenderNewPageSearch(api.page)
 }