const list = document.querySelector('.list-group');

//delete item
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.closest('.list-group-item').remove();
    }
});

//search item



var searchInput = document.getElementById("searchInput");



searchInput.addEventListener("input", function() {
    var searchValue = searchInput.value.toLowerCase(); 
    
    var tdElements = document.getElementsByClassName("sname");
    console.log(tdElements)
   

    
    for (var i = 0; i < tdElements.length; i++) {
        var td = tdElements[i];

        
        var productText = td.textContent.toLowerCase();

        
        var listItem = td.parentElement;
        console.log(productText.includes(searchValue))
        
        if (productText.includes(searchValue)) {
            
            listItem.style.display = "block";
        } else {
            
            listItem.style.display = "none";
        }
    }
});

       