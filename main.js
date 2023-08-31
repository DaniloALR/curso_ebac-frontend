$(document).ready(function() {
    
    $('form').on('submit', function(e) {
        e.preventDefault();
        const inputTarefa = $("#tarefa").val()

        $(`<li>${inputTarefa}</li>`).appendTo('ul')

        $("#tarefa").val('')
    })
    
    $('ul').on('click',function(e){
        const item = e.target

        $(item).addClass('active')
    })
    
})