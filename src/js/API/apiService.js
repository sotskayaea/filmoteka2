const { success, error } = require('@pnotify/core');
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Angeler.css';
import axios from 'axios';
import {getAllGenges} from '../newData/changeGenres'

const KEY = '9b0c2f9965f33f91e75ff619d689bb58';

class API {
    constructor(){
        this.query = '';
        this.page = 1;
    }
    updatePage(newValue){
        this.page = newValue;
    }
    
    onChangeQuery(value){
      this.query = value;
    }
//Получаем популярные фильмы за неделю
    async getTrandingMovie() {
     try{
        const trandingData =`https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}&page=${this.page}`;
        const req = await axios(trandingData);
        await req.data.results.forEach(el=> {
                el.new_genres = getAllGenges(el.genre_ids)
           
        })
        this.page = 1;
        return req.data
    }catch (err) {
        console.log('error');
        error({
              text: "CRITICAL SERVER ERROR!",
              delay: 1000,
          });
      }
     } 
     
     //Делаем поиск фильмов по слову 
     async getSearchMovie(){    
        localStorage.setItem('query' , this.query)
        const queryData = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&page=${this.page}&include_adult=false&query=${this.query}`;
        try{ 
            const req = await axios(queryData)
            await req.data.results.forEach(el=> {
                el.new_genres = getAllGenges(el.genre_ids)
           
        })
        this.page = 1;
        return req.data

        }catch (err) {
    
        error({
              text: "CRITICAL SERVER ERROR!",
              delay: 1000,
          });
      }
     }


     //получаем фильм по айди
     async getDescriptionMovie (id){
        const queryData = `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`;
        try {
            const req = await axios(queryData)
            return req.data

        } catch (err) {
          error({
                text: "CRITICAL SERVER ERROR!",
                delay: 1000,
            });
        }
      }
       

    
}

export default new API()