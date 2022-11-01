export default function onChangeRating(obj, place){
    let arr = null;
    if(place === 'modal'){
        arr = obj;
        if(arr.hasOwnProperty('vote_average')){
            if(String(arr.vote_average).length === 1){
                arr.vote_average = `${String(arr.vote_average)}.0`
            }else{
                arr.vote_average = String(arr.vote_average).slice(0, 3);
            }  
        } else{
            arr.vote_average = '' 
        }
        return arr
    }

    if(place === 'gallery'){
        arr = obj.results;
        arr.map(data => {
            if(data.hasOwnProperty('vote_average')){
                if(String(data.vote_average).length === 1){
                    data.vote_average = `${String(data.vote_average)}.0`
                }else{
                    data.vote_average = String(data.vote_average).slice(0, 3);
                }  
            } else {
                data.vote_average = ''
            }   
            })
        return arr
            
    }

    
}