import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';



export default function onPagination(data) {
  const page = data.page;
  const totalItems = data.total_pages;

  const container = document.getElementById('pagination');

  const options = {
    totalItems: totalItems,
    itemsPerPage: 1,
    visiblePages: 10,
    page: page,
    centerAlign: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}" >' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>'
    }
  };

  onCreateNewCopy(options)
  
  
  
  function onCreateNewCopy(options){
    const pagination = new Pagination(container, options);
  
  }
  

  // onAdaptiveMakup(options)
  

  // function onAdaptiveMakup (options){
  //   const container = document.querySelector('.container');
  //   const widthContainer = parseInt(getComputedStyle(container).getPropertyValue('width'));
  //   if(widthContainer === 768){
  //     options.visiblePages = 7;
  //   }else if(widthContainer === 320){
  //     options.visiblePages = 3;
  //   }
  // }
  


}