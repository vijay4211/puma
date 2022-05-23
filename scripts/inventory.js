
let arr =JSON.parse(localStorage.getItem("products"))

console.log(arr)


arr.map(function(el,index){
    let div = document.createElement("div");
    let desc = document.createElement("p");
    desc.innerText = el.desc;
    let image = document.createElement("img")
    image.src = el.image;
    image.setAttribute("id","image1")
    let price = document.createElement("p")
    price.innerText = el.price;
    let type = document.createElement("p")
    type.innerText = el.type;

    let btn = document.createElement("button")
    btn.innerText = "Remove Product"
 
     btn.addEventListener("click",function(){
         removeItem(el,index)
     })


    div.append(image,desc,type,price,btn)
    document.getElementById("all_products").append(div);

})


function removeItem(el,index){
    arr.splice(index,1)
    localStorage.setItem("products",JSON.stringify(arr))
    window.location.reload()
}



