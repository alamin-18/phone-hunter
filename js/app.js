const phoneload = async(searchText) =>{
    const URl = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(URl)
    const data = await res.json()
    displayPhone(data.data)
};

const displayPhone = (phones) =>{
    const divContainer = document.getElementById("card-container")

    divContainer.innerHTML = ``

    phones.forEach(phone => {
        console.log(phone)
        const div = document.createElement("div")
        div.innerHTML = `
        
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <img class="rounded-t-lg" src="${phone.image}" alt=""/>
            <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">${phone.phone_name}</h5>
            <p class="text-gray-700 text-base mb-4">
                Some quick example text to build on the card title and make up the bulk of the card's
                content.
            </p>
            <button onclick="detailPhone('${phone.slug}')" type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xx leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button>
            </div>
        </div>
        
        `
        divContainer.appendChild(div)
    })
};





document.getElementById("btn-search").addEventListener("click",function(){
    const searchText = document.getElementById("search-value").value;
    phoneload(searchText)  
})

document.getElementById("search-value").addEventListener("keypress",function(event){
    if (event.key === "Enter"){
        const searchText = document.getElementById("search-value").value;
        phoneload(searchText)
    }
})


const detailPhone = (id) =>{
    
}

phoneload('apple')