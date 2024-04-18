const textarea=document.getElementById("text")
const totalchara=document.getElementById('totalCounter')
const  remainchara=document.getElementById('remainingCounter')
textarea.addEventListener("keyup",()=>{
updateCounter()
})

updateCounter()

function updateCounter(){
   totalchara.innerText = textarea.value.length;

    remainchara.innerText = textarea.getAttribute("maxlength") - textarea.value.length ;
}
