import {genres} from '../newData/genres.json';

export default function onChangeGenres(obj,place){
    
    const getGenresIds = () => {
        let arr = obj.results;
        return arr.forEach(x => {
            getAllGenges(x.genre_ids)
        })
    }
    const getAllGenges = (currentFilm) => {  
        const movie = [];
    genres.forEach(el => {
        if(currentFilm.includes(el.id)){
            movie.push(el.name)   
        }
    })
     return movie
    
}
   if(place === 'gallery'){
    let arr = obj.results;
     arr.map(data => {
            let string = [];
            if(data.hasOwnProperty('new_genres')){
                if(data.new_genres.length > 3){
                     string.push(`${data.new_genres.slice(0,2)}, Other`);
                     return  data.new_genres = string; 
                    
                }else{
                    return data.new_genres;
                }
        }})
        
   }

    if (place === 'modal'){
        let arr = obj;
        let string = [];
        arr.genres.map(data => {
            if(data.hasOwnProperty('name')){
                string.push(data.name) 
            }else{
                string.push('No found')
            }
        })
         arr.genres = string.join(', ')
        
    }

    if (place === 'library'){
        let arr = obj;
        let string =[];
        arr.genres.map(data => {
            if(data.hasOwnProperty('name')){
                string.push(data.name) 
            }else{
                string.push('No found')
            }
            
            if(string.length > 3){
                string = `${string.slice(0,2)}, Other`;
            }
        })
        return string
        

    }
       
        
}



    

export  const getAllGenges = (currentFilm) => {
    const movie = [];
    genres.forEach(el => {
        if(currentFilm.includes(el.id)){
                movie.push(el.name)
                
        }
    })
    return movie
}