// Changing input group text on focus
let email = sessionStorage.getItem("email"); 

getEmail(); 
function getEmail() {
	document.querySelector(".userEmail").value = email;
}

$(function () {
    $('input, select').on('focus', function () {
        $(this).parent().find('.input-group-text').css('border-color', '#80bdff');
    });
    $('input, select').on('blur', function () {
        $(this).parent().find('.input-group-text').css('border-color', '#ced4da');
    });
});

// Check if all entries are filled
document.querySelector('form').onsubmit = function()
{
  if (document.querySelector("#petType").selectedIndex == 0)
  {
    document.getElementById("type-invalid").classList.add("is-invalid");
    document.getElementById("type-invalid").innerHTML = "Please pick what kind of pet you want!";
  }
  else
  {
    document.getElementById("type-invalid").classList.remove("is-invalid");
    document.getElementById("type-invalid").innerHTML = "";
  }
  
  if (document.querySelector("#size").selectedIndex == 0)
  {
    document.getElementById("size-invalid").classList.add("is-invalid");
    document.getElementById("size-invalid").innerHTML = "Please pick the size you prefer for your pet!";
  }
  else
  {
    document.getElementById("size-invalid").classList.remove("is-invalid");
    document.getElementById("size-invalid").innerHTML = "";
  }
  
  console.log(document.querySelector("#age").selectedIndex);
  if (document.querySelector("#age").selectedIndex == 0)
  {
    document.getElementById("age-invalid").classList.add("is-invalid");
    document.getElementById("age-invalid").innerHTML = "Please pick the age you prefer for your pet!";
  }
  else
  {
    document.getElementById("age-invalid").classList.remove("is-invalid");
    document.getElementById("age-invalid").innerHTML = "";
  }
  
  console.log(document.querySelector("#children").selectedIndex);
  if (document.querySelector("#children").selectedIndex == 0)
  {
    document.getElementById("children-invalid").classList.add("is-invalid");
    document.getElementById("children-invalid").innerHTML = "Please pick if you want your pet to be children friendly!";
  }
  else
  {
    document.getElementById("children-invalid").classList.remove("is-invalid");
    document.getElementById("children-invalid").innerHTML = "";
  }
  if (document.querySelector("#dogs").selectedIndex == 0)
  {
    document.getElementById("dog-invalid").classList.add("is-invalid");
    document.getElementById("dog-invalid").innerHTML = "Please pick if you want your pet to be dogs friendly!";
  }
  else
  {
    document.getElementById("dog-invalid").classList.remove("is-invalid");
    document.getElementById("dog-invalid").innerHTML = "";
  }
  if (document.querySelector("#cats").selectedIndex == 0)
  {
    document.getElementById("cat-invalid").classList.add("is-invalid");
    document.getElementById("cat-invalid").innerHTML = "Please pick if you want your pet to be cats friendly!";
  }
  else
  {
    document.getElementById("cat-invalid").classList.remove("is-invalid");
    document.getElementById("cat-invalid").innerHTML = "";
  }
  console.log(document.querySelectorAll('.is-invalid')); 
  console.log("javascirpt fixed"); 
  
  return (!document.querySelectorAll('.is-invalid').length > 0 );
}