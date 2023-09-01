const loadPhone =async (searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data
    displayPhones(phones);

}

const displayPhones= phones =>{
    // console.log(phones);
    // 1) Location for integration
    const phoneContainer = document.getElementById('phoneContainer');
    // clear cache
    phoneContainer.textContent = ''
    
    phones.forEach(phone =>{
        console.log(phone);
        // 2) create a div
        const phoneCard = document.createElement('div');
        // 3) Add CSS/Tailwind classes
        phoneCard.classList=`card bg-gray-700 shadow-xl lg:border-4 lg:border-blue-950 lg:rounded-lg grid items-center justify-center mt-2 p-4`;
        // 4) Set Inner HTML
        phoneCard.innerHTML=`
        <figure class="px-4 pt-4">
            <img src="${phone.image}" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>${phone.slug}</p>
            <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `;
        // 5) Append child
        phoneContainer.appendChild(phoneCard);

    })
}
const handleSearch=() =>{
    const searchField = document.getElementById('searchField');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText)
}

