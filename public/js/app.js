$(document).ready(()=>{

    posteos.forEach(el => {
        $( `#editar${el._id}`).click(() =>{
        
            $(`.carta${el._id} , .imagen${_id}`).hide();
            $(`#formEditar${el._id}`).show();
        
        })

    });


})