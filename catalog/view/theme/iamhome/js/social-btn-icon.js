if(document.querySelector('.social-btn')) {
   document.querySelector('.social-btn-content').style.display = 'none'
   document.querySelector('.social-btn').addEventListener('click', () => { 
      if (document.querySelector('.social-btn-content').style.display == 'none') {
         document.querySelector('.social-btn-content').style.display = 'block';
      } else if (document.querySelector('.social-btn-content').style.display == 'block') {
         document.querySelector('.social-btn-content').style.display = 'none';
      }
      
   });

   document.body.addEventListener('click', () => {
      document.querySelector('.social-btn-content').style.display = 'none';
   });

   document.querySelector('.social-btn-content').addEventListener('click', e => e.stopPropagation());
   document.querySelector('.social-btn').addEventListener('click', e => e.stopPropagation());
}







// Для Product

if(document.querySelector('.card-item-first-description-item-card_product')) {
   

   let hide_input_color = document.querySelectorAll('.card-item-first-description-item-card-with-monogramm .description-color-select-input.item-card-select-input'); // hidden input
   let select_color = document.querySelectorAll('.card-item-first-description-item-card-with-monogramm .color_select_value'); // select цвета
   let option_size = document.querySelectorAll('.card-item-first-description-item-card-with-monogramm .size_select_value');
   let left_color = document.querySelectorAll('.card-item-color-slide'); // Цвет в левом верхнем углу
   let select_size = document.querySelectorAll('.card-item-first-description-item-card-with-monogramm .description-size-select.item-card-select'); // select с размерами
   let price_item = document.querySelector('.card-item-first-description-item-card-with-monogramm .description-price'); // Цена в карточке

   // Цвета в левом верхнем углу
   if (left_color && hide_input_color && select_size) {
      
      left_color.forEach(element => {
         element.addEventListener("click", function () {
            select_size.forEach(elem => {
               elem.classList.add('hidden');
               elem.classList.remove('_active_');
               if (elem.dataset.id == element.querySelector('.item').dataset.id) {
                  elem.classList.remove('hidden');
                  elem.classList.add('_active_');               
               }
            }); 

            let ggjp = document.querySelector('.card-item-first-description-item-card-with-monogramm .description-size-select.item-card-select._active_ span').dataset.cost;
            let ggjp2 = document.querySelector('.card-item-first-description-item-card-with-monogramm .description-size-select.item-card-select._active_ span').dataset.name;
            let ggjp3 = document.querySelector('.card-item-first-description-item-card-with-monogramm .description-size-select.item-card-select._active_ span').dataset.quantity;
            
            let jkli = document.querySelector('.description-size-select-input.description-size-select-input__main.item-card-select-input');
            let count_price = document.querySelector('.card-item-first-description-item-card-with-monogramm .description-count-item__block-quantity_prod.description-count-item__block-quantity.description-count-item__block-quantity__main');
            count_price.textContent = 1;

            

            jkli.dataset.cost = ggjp;
            jkli.value = ggjp2;
            jkli.dataset.quantity = ggjp3;
            price_item.textContent = `${ggjp * count_price.textContent} ₽`;

         });
      });
      
   }
   
   first_item();

}


// Для collection
if (document.querySelector('.card-item-first-description-item-card_collection')) {


   let hide_input_color = document.querySelectorAll('.card-item-first-description-item-card-with-monogramm .description-color-select-input.item-card-select-input'); // hidden input
   let select_color = document.querySelectorAll('.card-item-first-description-item-card-with-monogramm .color_select_value'); // select цвета
   let option_size = document.querySelectorAll('.card-item-first-description-item-card-with-monogramm .size_select_value');
   let left_color = document.querySelectorAll('.card-item-color-slide'); // Цвет в левом верхнем углу
   let select_size = document.querySelectorAll('.card-item-first-description-item-card-with-monogramm .description-size-select.item-card-select'); // select с размерами
   // let price_item = document.querySelector('.card-item-first-description-item-card-with-monogramm .description-price'); // Цена в карточке
   let item_description = document.querySelectorAll('.card-item-first-description-item-card-with-monogramm .description-size-select-wrap');
   

   

   if (left_color && hide_input_color && select_size) {
      
      left_color.forEach(element => {
         element.addEventListener("click", function () {

            item_description.forEach(item => {
              let i = 0;
              let size_item = item.querySelectorAll('.description-size-select.item-card-select');
               
               size_item.forEach(elem => {
                  if (elem.dataset.id == element.querySelector('.item').dataset.id) {
                     i++;             
                  }
               }); 
               
            if (i == 1) {
               size_item.forEach(elem => {
                  elem.classList.add('hidden');
                  elem.classList.remove('_active_');
                  if (elem.dataset.id == element.querySelector('.item').dataset.id) {
                     elem.classList.remove('hidden');
                     elem.classList.add('_active_');               
                  }
               }); 
            }

            let wrapper = item.closest('.card-item-first-description-item-card-with-monogramm');
            let ggjp = wrapper.querySelector('.description-size-select.item-card-select._active_ span').dataset.cost;
            let ggjp2 = wrapper.querySelector('.description-size-select.item-card-select._active_ span').dataset.name;
            let ggjp3 = wrapper.querySelector('.description-size-select.item-card-select._active_ span').dataset.quantity;

            let jkli = wrapper.querySelector('.description-size-select-input.description-size-select-input__main.item-card-select-input');
            let count_price = wrapper.querySelector('.card-item-first-description-item-card-with-monogramm .description-count-item__block-quantity_prod.description-count-item__block-quantity.description-count-item__block-quantity__main');

            count_price.textContent = 1;

            let price_item = wrapper.querySelector('.card-item-first-description-item-card-with-monogramm .description-price');
            jkli.dataset.cost = ggjp;
            jkli.value = ggjp2;
            jkli.dataset.quantity = ggjp3;
            price_item.textContent = `${ggjp * count_price.textContent} ₽`;
            
         });

         });
      });
      
   }

   first_item();
}




function first_item() {
   // Определяем количество карточек на странице
   let items = document.getElementsByClassName('card-item-first-description-item-card');
   
   // Работаем с каждой карточкой
   for (item of items) {   
      
      
      const hide_input_color = item.querySelectorAll('.description-color-select-input.item-card-select-input');
      const select_color = item.querySelectorAll('.color_select_value'); // select цвета
      const option_size = item.querySelectorAll('.size_select_value');
      const left_color = item.querySelectorAll('.card-item-color-slide'); // Цвет в левом верхнем углу
      const select_size = item.querySelectorAll('.description-size-select.item-card-select'); // select с размерами
      const price_item = item.querySelector('.description-price'); // Цена в карточке

      let jkli = item.querySelector('.description-size-select-input.description-size-select-input__main.item-card-select-input');
      let des_color = item.querySelector('.description-color');
      let des_count = item.querySelector('.description-count');

      // let button_plus_quantity = item.querySelector('.description-count-item__block-quantity_prod.description-count-item__block-quantity.description-count-item__block-quantity__main');
      let button_plus_quantity = item.querySelector('.description-count-item__block-quantity_prod.description-count-item__block-quantity');
      let ggjp = item.querySelectorAll('.description-size-select.item-card-select');
      let count_price;
      
      // Обновление цены в каждом select цены у каждого цвета
      if (option_size) {
         
         option_size.forEach(element => {
            element.addEventListener("click", () => {
               
               let clos = element.closest('.description-size-select');
               let sel_wrap = element.closest('.description-size-select-wrap');

               wrap_for_price = element.closest('.item-description');
               count_price = wrap_for_price.querySelector('.description-count-item__block-quantity_prod.description-count-item__block-quantity');
               count_price.textContent = 1;

               clos.querySelector('span').dataset.cost = element.dataset.cost;
               clos.querySelector('span').dataset.name = element.dataset.name;
               clos.querySelector('span').dataset.quantity = element.dataset.quantity;
               sel_wrap.querySelector('.description-size-select-input.description-size-select-input__main.item-card-select-input').dataset.quantity = clos.querySelector('span').dataset.quantity;

               price_item.textContent = `${clos.querySelector('span').dataset.cost * count_price.textContent} ₽`;
            });
         });
         
      }
      

      // Цвета в карточке
      if (select_color && hide_input_color && select_size) {
         
         select_color.forEach(element => {
            element.addEventListener("click", function () {     
               select_size.forEach(elem => {
                  // Количество
                  
                  
               
                  

                  elem.classList.add('hidden');
                  elem.classList.remove('_active_');
                  if (elem.dataset.id == element.dataset.id) {
                     elem.classList.remove('hidden');
                     elem.classList.add('_active_');
                  }
               }); 
              
               
               ggjp.forEach(element => {
                  if (element.classList.contains('_active_')) {


                     jkli.dataset.cost = element.querySelector('span').dataset.cost;
                     jkli.value = element.querySelector('span').dataset.name;
                     jkli.dataset.quantity = element.querySelector('span').dataset.quantity;
                     button_plus_quantity.dataset.quantity = element.querySelector('span').dataset.quantity;

                     wrap_for_price = element.closest('.item-description');
                     count_price = wrap_for_price.querySelector('.description-count-item__block-quantity_prod.description-count-item__block-quantity');
                     if (count_price) {
                        count_price.textContent = 1; //fsdfpklsdlkfmsmfgmkermgkremgkwm

                        price_item.textContent = `${element.querySelector('span').dataset.cost * count_price.textContent} ₽`;

                     }
                     
                     
                     
                  } ;
               });

            });
         });

         // select_size.forEach(element => {
         //    element.addEventListener('click', () => {
         //       wrap_for_price = element.closest('.item-description');
         //       count_price = wrap_for_price.querySelector('.description-count-item__block-quantity_prod.description-count-item__block-quantity');
         //       count_price.textContent = 1;
         //    })
         // });
         
      }

      
   }  
}





let button_plus = document.querySelectorAll('.description-count-item__block-plus');

if (button_plus) {

   button_plus.forEach(element => {
      
      element.addEventListener('click', () => {
        let wrapper_count = element.closest('.description-count-item__block');
        let wrapper_cart = element.closest('.card-item-first-description-item-card');
        let price = wrapper_cart.querySelector('.description-price');
        let count = wrapper_count.querySelector('.description-count-item__block-quantity')

        let input_hidden = wrapper_cart.querySelector('.description-size-select-input.description-size-select-input__main.item-card-select-input');

        if (parseInt(count.textContent) < parseInt(input_hidden.dataset.quantity)) {
         let count_number = parseInt(count.textContent) + 1;
         count.textContent = count_number;
         price.textContent = `${parseInt(input_hidden.dataset.cost) * count.textContent} ₽`;
         
        }
        
         
      });
   });
   
}

let wr = document.querySelectorAll('.card-item-first-description-item-card');
wr.forEach(element => {
   let inp = element.querySelector('.description-size-select-input');
   let act = element.querySelector('.description-size-select.item-card-select._active_ span');
   inp.dataset.quantity = act.dataset.quantity;

});

