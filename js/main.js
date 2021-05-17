// Add active class to the current button (highlight it)
document.addEventListener("DOMContentLoaded", function(event) { // <-- add this wrapper
    var element = document.querySelectorAll('.fav-icon-color');
    
        if (element) {
        
          element.forEach(function(el, key){
            
             el.addEventListener('click', function () {
                console.log(key);
             
                el.classList.toggle("active");
                
                 element.forEach(function(ell, els){
                     if(key !== els) {
                         ell.classList.remove('active');
                     }
                      console.log(els);
                 });
             });
          });
        }
    });


    // add card
    document.getElementById("add-cart")
    .addEventListener("click", function() {
      if (this.classList.contains("active")) {
        this.classList.remove("active");
      } else this.classList.add("active");
    });

    // plus and muins btns

    // verivication page
 