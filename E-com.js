let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

  icon.addEventListener("click",()=>{
    ul.classList.toggle("showData");
    console.log(ul);

    if(ul.className=="showData"){
        document.getElementById("bar").className="fa-sharp fa-solid fa-xmark";
    }else{
        document.getElementById("bar").className="fa-sharp fa-solid fa-bars";
    }
    })

    
    //connect
    function connect(){
      let name = document.getElementById("name");
      let num = document.getElementById("num");
      if(name.value == "" && num.value == ""){
          alert("Fill Details")
      }else{
          alert("Thanks for Connecting")
          document.querySelector(".contact").style.display="none";
      }
    }




   





   


              
               


              
