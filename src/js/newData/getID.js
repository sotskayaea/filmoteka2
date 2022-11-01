export default function getID(obj){
    let newArr= [];
    const arr = obj.results;
    arr.map(data => {
     newArr.push(data.id)
    })
    return newArr
    
}