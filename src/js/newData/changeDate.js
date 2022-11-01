export default function onChangeDate(obj, place){
    let arr = null;
    if(place === 'modal'){
        arr = obj;
        if(arr.hasOwnProperty('release_date')){
            arr.release_date = arr.release_date.slice(0, 4); 
            
        } else {
            arr.release_date = ''
        } 
        return arr
    }
    if(place === 'gallery'){
        arr = obj.results;
        arr.map(data => {
            if(data.hasOwnProperty('release_date')){
                data.release_date = data.release_date.slice(0, 4); 
            } else {
                data.release_date = ''
            }   
            })
            return arr
    }


    
    
}

