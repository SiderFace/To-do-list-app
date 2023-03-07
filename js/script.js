
function newItem(){

   //javascript
   //1. Adding a new item to the list of items: 
      let inputValue = $("#input").val() ;
      if (inputvalue === '') {
         alert( "List item field can not be black" ) ;
      }  else {
         let li = $("<li>").text(inputValue) ;
         $("list").append(li) ;
      }
   
    //2. Crossing out an item from the list of items:
      function crossOut() {
         $(this).toggleClass("strike") ;
      }
      $("li").on("dblclick", crossOut) ;

    //3(i). Adding the delete button "X": 
      let crossOutButton = $("<crossOutButton>").text("X") ;
      li.append(crossOutButton) ;
      crossOutButton.on("click", deleteListItem) ;

    //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
      function deleteListItem(){
         $(this).addClass("delete") ;
      }
      
    // 4. Reordering the items: 
      $('#list').sortable();
   
   }
   