import Filter from 'bad-words'

export const hasBadWords=(value)=>{
    const listBadWords=['bad','some','bug']
    const filter=new Filter();
filter.addWords(...listBadWords);
    return filter.isProfane(value)
}