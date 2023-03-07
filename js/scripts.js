function newItem() {
   // Adding a new item to the list of items:
   let li = $("<li></li>");
   let inputValue = $("#input").val();
   let text = document.createTextNode(inputValue);
   li.append(text);

   if (inputValue === '') {
       alert("Cannot leave input field blank");
   } else {
       let list = $("#list");
       list.append(li);
   }

   // Crossing out an item from the list of items:
   li.on("dblclick", function() {
       li.toggleClass("strike");
   });

   // Adding the delete button "X":
   let crossOutButton = $("<crossOutButton>X</crossOutButton>");
   li.append(crossOutButton);

   crossOutButton.on("click", function() {
       li.addClass("delete");
   });

   // Reordering the items:
   $("#list").sortable();
}
