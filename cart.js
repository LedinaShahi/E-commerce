const list = document.querySelector('.product-list');

// Delete item
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        const index = e.target.dataset.index;
        const productRow = document.getElementById(`product-${index}`);
        productRow.remove();

        
        var productList = JSON.parse(sessionStorage.getItem('productList')) || [];

        
        productList.splice(index, 1);

        
        sessionStorage.setItem('productList', JSON.stringify(productList));
    }
});


//search item
var searchInput = document.getElementById("searchInput");

        searchInput.addEventListener("input", function() {
            var searchValue = searchInput.value.toLowerCase(); 

            var productNameElements = document.getElementsByClassName("product-name");

            for (var i = 0; i < productNameElements.length; i++) {
                var productNameElement = productNameElements[i];
                var productText = productNameElement.textContent.toLowerCase();
                var listItem = productNameElement.parentElement;

                if (productText.includes(searchValue)) {
                    listItem.style.display = "table-row";
                } else {
                    listItem.style.display = "none";
                }
            }
        });
   
//total items and price





     





       