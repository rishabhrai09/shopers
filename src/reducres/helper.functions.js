import data from '../data/data.json';

export const addItem=id=>{
    let item =data.find(item=>item.id===id)
    return item
}
