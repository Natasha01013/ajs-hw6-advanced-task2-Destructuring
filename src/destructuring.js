export function characterAttackOptions(character) {
    let arr = [];
    for(const attack of character.special) {
        const {id, name, icon, description} = attack;
        arr.push({id, name, icon, description});

        if(description === undefined){
            arr.description = 'Описание недоступно';
        }
    }
     return arr;
}