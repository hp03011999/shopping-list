let quantity = document.querySelector("#quantity")
let nam = document.querySelector("#name")
let btn = document.querySelector("#btn")
let select = document.querySelector("#select")

let heading = document.querySelectorAll(".boxes .box h1")
let proceeds = document.querySelector("#proceeds")


console.log(select)

// let span = 

let parabox = document.querySelectorAll(".parabox")
// let box = document.querySelectorAll(".boxes .box p")

btn.addEventListener("click", hello)

function hello(){
    let div = document.createElement("div")

    div.classList.add('divide')
    let para = document.createElement("p")
    let para1 = document.createElement("p")
    
    let icon = document.createElement("i")
    icon.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`

    div.appendChild(icon)

    para.innerHTML = quantity.value
    para1.innerHTML = nam.value
      div.appendChild(para)
      div.appendChild(para1)
      icon.addEventListener("click", cancel);

    if(select.value === "Fruitsvegetables"){
   
      parabox[0].appendChild(div)
        // box[0].innerHTML = quantity.value + nam.value

        function added(){

            if(div != null){
    
                alert(heading[0].innerText)
            }
        }
       


    }

    
    else if(select.value === "measeafood"){
      
        parabox[1].appendChild(div)

        function added(){

            if(div != null){
    
                alert(heading[1].innerText)
            }
        }
    
    }
    else if(select.value === "dairy"){
      
        parabox[2].appendChild(div)
    }
    else if(select.value === "Frozenfood"){
      
        parabox[3].appendChild(div)
    
    }
    else if(select.value === "Breadpasta"){
      
        parabox[4].appendChild(div)
    
    }
    else if(select.value === "Snacks"){
      
        parabox[5].appendChild(div)
    }
    else if(select.value === "Breaveges"){
     
        parabox[6].appendChild(div)
    
    }
    else if(select.value === "Cleaning"){
      
        parabox[7].appendChild(div)
    
    }
    else if(select.value === "Others"){
      
        parabox[8].innerHTML = "visit our website"
    
    }

    proceeds.addEventListener("click", added)

}

function cancel(event){
    event.target.parentElement.parentElement.remove();
    
    // parabox[0].remove(para)
    }


  

   