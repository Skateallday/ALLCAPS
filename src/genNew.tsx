

 let newNumber = 0;

function genNew(){
    newNumber =  Math.floor(Math.random() * 3);
      console.log(newNumber);
    };

export {newNumber};
export default genNew;