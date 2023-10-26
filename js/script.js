
function newItem() {

    //1. Adding a new item to the list of items: 
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.text(inputValue);

    // append li to ol and clear field after
    if (inputValue === '') {
        alert('You must write something!');
    } else {
        $('#list').append(li);
        $("#input").val('')
    }

    //add class strike on double click
    li.on("dblclick", function crossOut() {
        li.toggleClass('strike');
    });

    //add  delete button "X": 
    let crossOutButton = $('<crossOutButton>X</crossOutButton>');
    li.append(crossOutButton);

    // add class delete to li on click
    crossOutButton.on('click', function deleteListItem() {
        li.addClass('delete')
    });

    // 4. Reordering the items: 
    $('#list').sortable();
}

// add enter as key to add an item 
$(document).ready(function() {
    $('#input').on('keydown', function(event) {
        if (event.key === 'Enter'){
            event.preventDefault();
            newItem();
        }
    });
});
