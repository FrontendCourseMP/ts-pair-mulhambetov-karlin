
function getString(){
    const form = document.querySelector('#form')
     if(!form){
        throw new Error('Форма не найдена');
    }
    console.log(form);
}



export default getString;
