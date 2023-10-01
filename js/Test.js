let productName = document.getElementById("productName")
let productPrice = document.getElementById("productPrice")
let productCategory = document.getElementById("productCategory")
let productDescription = document.getElementById("productDescription")
let searchInput = document.getElementById("searchInput")

productContainer = []
productContainer = JSON.parse(localStorage.getItem("product"))
dispalyData()

function addProduct(){
    let product = {
        name: productName.value ,
        price : productPrice.value,
        catogry: productCategory.value,
        desc : productDescription.value
    }
    productContainer.push(product)
    localStorage.setItem("product" , JSON.stringify(productContainer))
    dispalyData()
}

function dispalyData(){
    cartona = ""
    for(let i = 0; i<productContainer.length; i++){
        cartona += `
        <tr>
        <td>  .name  </td>
        <td>.price </td>
        <td> category </td>
        <td> desc</td>
        <td>
           <button class="btn btn-outline-warning btn-sm"  >Update</button>
           <button class="btn btn-outline-danger btn-sm"  onclick=" deleteProduct(${i}) "  >Delete</button>
        </td>
     </tr>
        `
    }
    document.getElementById("tableData").innerHTML = cartona
}
function deleteProduct(Index){
    productContainer.splice(Index , 1)
    localStorage.setItem("product" , JSON.stringify(productContainer))
    dispalyData()
}
function search(){
    console.log(searchInput.value);
}