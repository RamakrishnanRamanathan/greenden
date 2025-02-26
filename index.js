//Index Page
 
let sideNav=document.querySelector("#sideNavul");
let icon=document.getElementById("icon");
let cross=document.getElementById("px");

icon.addEventListener('click',()=>{
    sideNav.style.display="block";
   cross.style.display="block";
})
cross.addEventListener('click',()=>{
    sideNav.style.display="none";
    cross.style.display="none";

})
//Product page[Search]
let productContainer=document.querySelector("#imageName");
let productList=productContainer.querySelectorAll('div');
let enterValue = document.getElementById('inputSearch');
enterValue.addEventListener("keyup",()=>{

        for (let c = 0; c < productList.length; c++) {
           let newProductList=productList[c].textContent.toUpperCase();
           let newEnterValue=enterValue.value.toUpperCase();
            if(newProductList.includes(newEnterValue)){
            productList[c].style.display="block";
             
            }else{
             productList[c].style.display="none";
             productList[c].style.textContent="Oops Nothing found"
            }
              
             }
 
         }
        
    
)



