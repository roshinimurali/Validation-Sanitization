import Filter from 'bad-words';


export const upperCaseFirstLetter=(word)=>{
 return word.charAt(0).toUpperCase()+ word.slice(1)
}

//filterigbadword


export const filterBadWords=(value)=>{
const list=['bad','some','apple']
const filter=new Filter();
filter.addWords(...list);
    return filter.clean(value)
}