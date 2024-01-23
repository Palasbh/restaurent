let burger = document.getElementById('burger')
let hamnav = document.getElementById('hamnav')

function getValue(id){
  let bb = document.getElementById(id).value 
  return bb  
}

function showValue(id, value){
  let ids = document.getElementById(id)
  ids.innerText = value 
}

burger.addEventListener('click', ()=>{
  if (hamnav.style.display === "block"){
    hamnav.style.display = "none"
  }
  else{
    hamnav.style.display = "block"
  }
})
