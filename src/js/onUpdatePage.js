import api from "./API/apiService";
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import onPagination from "./onPagination";
import onRenderPopularGallery from "./onRenderPopularGallery";
import onRenderSearchGallery from "./onRenderSearchGallery";
import onRenderNewPageSearch from "./onRenderNewPageSearch";


export default function onUpdatePage(){
  const container = document.getElementById('pagination');

  container.addEventListener('click' , getNewPage) 

  function getNewPage(e){
    e.preventDefault()
    // debugger
    if(!e.target.classList.contains('tui-page-btn')){
      return
  
    }
    const currentPage = Number(e.target.textContent)
    if(isNaN(currentPage)) {
      return
    }

    if(api.query === ''){
      onRenderPopularGallery(currentPage)
    }
    if(api.query !== ''){
      onRenderNewPageSearch(currentPage)
    }
    window.scrollTo({ top: 230, behavior: 'smooth' });
  }   
}