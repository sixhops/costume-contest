
var buyButton = document.getElementById('buy');
var costumeSelect = document.getElementById('costumeselect');

buyButton.addEventListener('click', function(e) {
    e.preventDefault();
    var id = costumeSelect.options[costumeSelect.options.selectedIndex].value;
    fetch(`/students/${buyButton.getAttribute('data-id')}/costumes/${id}`)
        .then(function() {
            console.log("Are we getting here?");
            // render the costumes into the page
            // However, if no time, just reload the page
            window.location = "/students/" + buyButton.getAttribute('data-id');
        });
})