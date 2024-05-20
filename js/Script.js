

document.addEventListener('DOMContentLoaded',()=>{
    const baseDatos = new Basedatos('datos teachers');




document.getElementById('new-form').addEventListener('submit',(event)=>{
  event.preventDefault();
    
    const name = document.getElementById('names').value;
    const lasname = document.getElementById('lastnames').value;
    const age = document.getElementById('age').value;
    const subject = document.getElementById('subject').value;
    const experience = document.getElementById('experience').value;
    const id = document.getElementById('id').value;

    let item; 
    if(id){
        item = new Teacher(name,lasname,age,subject,experience)
    }else {
        return alert('No calificas para agregarte');
    }

    baseDatos.agregarItem(item);

    document.getElementById('new-form').reset();
    
});

});