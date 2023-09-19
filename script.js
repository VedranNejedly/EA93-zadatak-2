url = "https://random-data-api.com/api/v2/users?size=10";
var data;
async function getapi(url) {
   
    // Storing response
    const response = await fetch(url);
   
    // Storing data in form of JSON
    data = await response.json();
    console.log(data);
    if (response) {
        console.log("Success");
        hideloader();
    }
    show_data(data);
}

function hideloader() {
    document.getElementById('loading').style.display = 'none';
}

function fetchUserData(id){
    for(let i of data){
        if(id == i.id){
            sessionStorage.setItem('avatar', i.avatar);
            sessionStorage.setItem('first_name', i.first_name);
            sessionStorage.setItem('last_name', i.last_name);
            sessionStorage.setItem('title', i.employment.title);
            sessionStorage.setItem('email', i.email);
            sessionStorage.setItem('phone_number', i.phone_number);
            sessionStorage.setItem('date_of_birth', i.date_of_birth);
            sessionStorage.setItem('city', i.address.city);
            sessionStorage.setItem('street_name', i.address.street_name);
            sessionStorage.setItem('street_address', i.address.street_address);
            sessionStorage.setItem('country', i.address.country);

        }
    }
}

getapi(url);

function show_data(data){
    let info='';
    let i=0;

    for(i of data){
        info+=
        `<li>
    
            <div class="card" style="width: 18rem;">
                <img src="${i.avatar}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${i.employment.title}</h5>
                    <p class="first-name">${i.first_name}</p>
                    <p class="last-name">${i.last_name}</p>
                    <a href="user-profile.html?${i.id}" onclick="fetchUserData(${i.id})"  class="btn btn-primary">Profile</a>
                </div>
            </div>



  
        </li>`;
    }
    document.getElementById("data").innerHTML = info;
}
