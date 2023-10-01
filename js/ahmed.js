let productName = document.getElementById("productName")
let productPrice = document.getElementById("productPrice")
let productCategory = document.getElementById("productCategory")
let productDescription = document.getElementById("productDescription")
let searchInput = document.getElementById("searchInput")
let addBtn = document.getElementById("addBtn")
let Updateproduct = document.getElementById("Updateproduct")
let updateProduct = 0


let productContainer = []
if (localStorage.getItem("product") != null) {
    productContainer = JSON.parse(localStorage.getItem("product"))
    displayData()
}
else{

}
function addProduct() {
    let product = {
        name: productName.value,
        price: productPrice.value,
        Category: productCategory.value,
        Desc: productDescription.value
    }
    productContainer.push(product)
    localStorage.setItem("product", JSON.stringify(productContainer))
    displayData()
    ClrearForm()
}


function displayData() {
    cartona = ``
    for (let i = 0; i < productContainer.length; i++) {
        cartona += `
        <tr>
        <td>  ${productContainer[i].name}  </td>
        <td>  ${productContainer[i].price}  </td>
        <td>  ${productContainer[i].Category}  </td>
        <td>  ${productContainer[i].Desc}  </td>
       
        <td>
           <button class="btn btn-outline-warning btn-sm"  onclick="steFormUpdate(${i})"">Update</button>
           <button class="btn btn-outline-danger btn-sm" "  onclick="deleteProduct(${i})">Delete</button>
        </td>
     </tr>
        `
    }
    document.getElementById("tableData").innerHTML = cartona
}

function ClrearForm() {
    productName.value = ""
    productPrice.value = ""
    productCategory.value = ""
    productDescription.value = ""
}
function deleteProduct(Index){
        productContainer.splice(Index,1)
        localStorage.setItem("product", JSON.stringify(productContainer))
        displayData();

}
function search(){
    cartona = ``
    let trem = searchInput.value
    for (let i = 0; i < productContainer.length; i++) {

        if(productContainer[i].name.toLocaleLowerCase().includes(trem.toLocaleLowerCase())){
            cartona += `
            <tr>
            <td>  ${productContainer[i].name}  </td>
            <td>  ${productContainer[i].price}  </td>
            <td>  ${productContainer[i].Category}  </td>
            <td>  ${productContainer[i].Desc}  </td>
           
            <td>
               <button class="btn btn-outline-warning btn-sm"  onclick="steFormUpdate(${i})">Update</button>
               <button class="btn btn-outline-danger btn-sm" "  onclick="deleteProduct(${i})">Delete</button>
            </td>
         </tr>
            `
        }
        }
        document.getElementById("tableData").innerHTML = cartona


       
}

function steFormUpdate(i){

    var carantproduct = productContainer[i]

    updateProduct = i
    console.log(updateProduct);

    addBtn.classList.replace("d-block", "d-none")
    Updateproduct.classList.replace("d-none", "d-block")
    productName.value = productContainer[i].name
    productPrice.value = productContainer[i].price
    productCategory.value = productContainer[i].Category
    productDescription.value = productContainer[i].Desc
}
function UbdateProduct(){
    let product = {
        name: productName.value,
        price: productPrice.value,
        Category: productCategory.value,
        Desc: productDescription.value
    }
    productContainer.splice(updateProduct , 1 , product)
    localStorage.setItem("product", JSON.stringify(productContainer))

    displayData()
    ClrearForm()
    addBtn.classList.replace("d-none", "d-block")
    Updateproduct.classList.replace("d-block", "d-none")
}