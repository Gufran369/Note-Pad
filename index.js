let addbtn = document.getElementById('add-btn')
let inputText = document.getElementById('task-input')
let orderList = document.getElementById('order-list')
let deletItem = document.getElementById('delet-item')
let deletAll = document.getElementById('delet-all')

addbtn.addEventListener('click',function(){
    let itemsFromLocalStorage = localStorage.getItem('items')
    if (itemsFromLocalStorage === null){
        let items = [];
        items.push(inputText.value);
        localStorage.setItem('items', JSON.stringify(items))
        window.location.reload()
    }else{
        let itemsFromLocalStorage = JSON.parse(localStorage.getItem('items'))
        itemsFromLocalStorage.push(inputText.value);
        localStorage.setItem('items', JSON.stringify(itemsFromLocalStorage))
        window.location.reload()
    }
})

let itemsFromLocalStorage = JSON.parse(localStorage.getItem('items'))
if (itemsFromLocalStorage !== null){
    itemsFromLocalStorage.map((items)=>{
        orderList.innerHTML += `<li class="list-group-item"> ${items} </> <br><br>`
    })
}
deletItem.addEventListener('click', function(){
    let itemsFromLocalStorage = JSON.parse(localStorage.getItem('items'))
    itemsFromLocalStorage.splice(0,1);
    localStorage.setItem('items',JSON.stringify(itemsFromLocalStorage))
    location.reload()
})

deletAll.addEventListener('click', function(){
   localStorage.removeItem('items');
   location.reload();
})






let btn = document.getElementById('togglebtn')
let bulb = document.getElementById('bulb')
btn.addEventListener('click', toggleBulb)

function toggleBulb(){
    if (btn.textContent.includes("On")){
        bulb.src="./images/bulb-on.png"
        btn.textContent ="Turn Off"
    }else{
        bulb.src="./images/bulb-off.png"
        btn.textContent= 'Turn On'
    }
}




