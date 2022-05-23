//store the products array in localstorage as "products"

function Object(a,b,c,d){
    this.type = a;
    this.desc = b;
    this.price = c;
    this.image = d;
}







let arr = JSON.parse(localStorage.getItem("products")) || [];

function myData(e){

    e.preventDefault();

    let form = document.getElementById("products")

    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value

    let store = new Object(type,desc,price,image) 

    // console.log(store) data show form of object

    arr.push(store);
    // console.log(arr)
    localStorage.setItem("products",JSON.stringify(arr))
    
}

