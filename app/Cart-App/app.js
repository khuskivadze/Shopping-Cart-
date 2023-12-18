const list = document.querySelectorAll('.list .item');

list.forEach(item => {
    item.addEventListener('click', function(event) {
        if(event.target.classList.contains('add')){
            var itemNew = item.cloneNode(true);
            let checkInset =false;

           
            let listCart = document.querySelectorAll('.cart .item')
            listCart.forEach( cart => {
                if(cart.getAttribute('data-key') ==  itemNew.getAttribute('data-key')) {
                     checkInset = true;
                     cart.classList.add('danger');
                     setTimeout(function() {
                       cart.classList.add('danger');

                     }, 1000)
                }
            })
            if(checkInset == false ) {
                document.querySelector('.listCart').appendChild(itemNew);
            }


            
        }
    })
})


const removeBtn = document.querySelector('.remove')

function Remove ($key) {
  let listCart = document.querySelectorAll('.cart .item' );
  listCart.forEach(item => {
     if(item.getAttribute('data-key') == $key) {
        item.remove();
        return;
     }
  })
}
 
