const toggleSpinner = isLoading => {
    const loader = document.getElementById("loader");
    if (isLoading) {
        loader.classList.remove("d-none")
    }
    else {
        loader.classList.add("d-none")
    }
}

const loadAllNews = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    const brNews = document.getElementById("brNews");
    brNews.setAttribute("onclick", `zeroNews('${data.data.news_category[0].category_id}')`)
    brNews.innerText = data.data.news_category[0].category_name;
    const reNews = document.getElementById("regularNews");
    reNews.setAttribute("onclick", `oneNews('${data.data.news_category[1].category_id}')`)
    reNews.innerText = data.data.news_category[1].category_name;
    const inNews = document.getElementById("internationalNews");
    inNews.setAttribute("onclick", `twoNews('${data.data.news_category[2].category_id}')`)
    inNews.innerText = data.data.news_category[2].category_name;
    const sports = document.getElementById("sports");
    sports.setAttribute("onclick", `threeNews('${data.data.news_category[3].category_id}')`)
    sports.innerText = data.data.news_category[3].category_name;
    const entertain = document.getElementById("entertainment");
    entertain.setAttribute("onclick", `fourNews('${data.data.news_category[4].category_id}')`)
    entertain.innerText = data.data.news_category[4].category_name;
    const culture = document.getElementById("culture");
    culture.setAttribute("onclick", `fiveNews('${data.data.news_category[5].category_id}')`)
    culture.innerText = data.data.news_category[5].category_name;
    const arts = document.getElementById("arts");
    arts.setAttribute("onclick", `sixNews('${data.data.news_category[6].category_id}')`)
    arts.innerText = data.data.news_category[6].category_name;
    const allNews = document.getElementById("allNews");
    allNews.setAttribute("onclick", `sevenNews('${data.data.news_category[7].category_id}')`)
    allNews.innerText = data.data.news_category[7].category_name;
}

const zeroNews = async (category_id) => {
    toggleSpinner(true)
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    displayBreakingNews(data.data);
    console.log(data)
}
const displayBreakingNews = (data) => {
    const store = document.getElementById("storePoint");
    const total = document.getElementById("total");
    store.textContent = "";
    console.log(data)
    data.forEach(element => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
        <div class="row gy-3">
        <div class="col-md-4">
            <img id="first" src="${element.image_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.details}</p>
                <img id="second" class="rounded" src="${element.author.img
            }" class="rounded-start" alt="...">
            <h5>${element.author.published_date}</h5>
            <i class="fas fa-eye">   ${element.total_view}</i>
            <button onclick="details0('${element._id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
             Details
            </button>
            </div>
        </div>
    </div>
    `
        store.appendChild(div)
        total.innerText = "Total" + " " + store.childElementCount + " " + "news found";
        total.classList.remove("d-none");
        toggleSpinner(false)
    });
}

const details0 = async news_id => {
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
    const res = await fetch(url);
    const data = await res.json();
    detailsUser0(data.data[0])
}

const detailsUser0 = data => {
    const Title = document.getElementById("modalTitle");
    Title.innerText = data.title;
    const images = document.getElementById("images");
    images.setAttribute("src", `${data.image_url}`);
    const modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = `
        <h2>Total Views : ${data.total_view ? data.total_view : "no found"}</h2>
        <h3>Author Name : ${data.author.name ? data.author.name : "no found"}</h3>
        <h4>Rating : ${data.rating.number ? data.rating.number : "no found"}</h4>
    `
}

const oneNews = async (category_id) => {
    toggleSpinner(true)
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    displayRegularNews(data.data);
}
const displayRegularNews = (data) => {
    const store = document.getElementById("storePoint");
    const total = document.getElementById("total");
    store.textContent = "";
    console.log(data)
    data.forEach(element => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
        <div class="row gy-3">
        <div class="col-md-4">
            <img id="first" src="${element.image_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.details}</p>
                <img id="second" class="rounded" src="${element.author.img
            }" class="rounded-start" alt="...">
            <h5>${element.author.published_date}</h5>
            <i class="fas fa-eye">   ${element.total_view}</i>
            <button onclick="details1('${element._id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
             Details
            </button>
            </div>
        </div>
    </div>
    `
        store.appendChild(div)
        total.innerText = "Total" + " " + store.childElementCount + " " + "news found";
        total.classList.remove("d-none");
        toggleSpinner(false)
    });
}

const details1 = async news_id => {
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
    const res = await fetch(url);
    const data = await res.json();
    detailsUser1(data.data[0])
}

const detailsUser1 = data => {
    const Title = document.getElementById("modalTitle");
    Title.innerText = data.title;
    const images = document.getElementById("images");
    images.setAttribute("src", `${data.image_url}`);
    const modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = `
        <h2>Total Views : ${data.total_view ? data.total_view : "no found"}</h2>
        <h3>Author Name : ${data.author.name ? data.author.name : "no found"}</h3>
        <h4>Rating : ${data.rating.number ? data.rating.number : "no found"}</h4>
    `
}
const twoNews = async (category_id) => {
    toggleSpinner(true)
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    displayInternationalNews(data.data);
}
const displayInternationalNews = (data) => {
    const store = document.getElementById("storePoint");
    const total = document.getElementById("total");
    store.textContent = "";
    console.log(data)
    data.forEach(element => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
        <div class="row gy-3">
        <div class="col-md-4">
            <img id="first" src="${element.image_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.details}</p>
                <img id="second" class="rounded" src="${element.author.img
            }" class="rounded-start" alt="...">
            <h5>${element.author.published_date}</h5>
            <i class="fas fa-eye">   ${element.total_view}</i>
            <button onclick="details2('${element._id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
             Details
            </button>
            </div>
        </div>
    </div>
    `
        store.appendChild(div)
        total.innerText = "Total" + " " + store.childElementCount + " " + "news found";
        total.classList.remove("d-none");
        toggleSpinner(false)
    });
}

const details2 = async news_id => {
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
    const res = await fetch(url);
    const data = await res.json();
    detailsUser2(data.data[0])
}

const detailsUser2 = data => {
    const Title = document.getElementById("modalTitle");
    Title.innerText = data.title;
    const images = document.getElementById("images");
    images.setAttribute("src", `${data.image_url}`);
    const modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = `
        <h2>Total Views : ${data.total_view ? data.total_view : "no found"}</h2>
        <h3>Author Name : ${data.author.name ? data.author.name : "no found"}</h3>
        <h4>Rating : ${data.rating.number ? data.rating.number : "no found"}</h4>
    `
}
const threeNews = async (category_id) => {
    toggleSpinner(true)
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    displaySportsNews(data.data);
}
const displaySportsNews = (data) => {
    const store = document.getElementById("storePoint");
    const total = document.getElementById("total");
    store.textContent = "";
    console.log(data)
    data.forEach(element => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
        <div class="row gy-3">
        <div class="col-md-4">
            <img id="first" src="${element.image_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.details}</p>
                <img id="second" class="rounded" src="${element.author.img
            }" class="rounded-start" alt="...">
            <h5>${element.author.published_date}</h5>
            <i class="fas fa-eye">   ${element.total_view}</i>
            <button onclick="details3('${element._id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
             Details
            </button>
            </div>
        </div>
    </div>
    `
        store.appendChild(div)
        total.innerText = "Total" + " " + store.childElementCount + " " + "news found";
        total.classList.remove("d-none");
        toggleSpinner(false)
    });
}

const details3 = async news_id => {
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
    const res = await fetch(url);
    const data = await res.json();
    detailsUser3(data.data[0])
}

const detailsUser3 = data => {
    const Title = document.getElementById("modalTitle");
    Title.innerText = data.title;
    const images = document.getElementById("images");
    images.setAttribute("src", `${data.image_url}`);
    const modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = `
        <h2>Total Views : ${data.total_view ? data.total_view : "no found"}</h2>
        <h3>Author Name : ${data.author.name ? data.author.name : "no found"}</h3>
        <h4>Rating : ${data.rating.number ? data.rating.number : "no found"}</h4>
    `
}
const fourNews = async (category_id) => {
    toggleSpinner(true)
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    console.log(url)
    const res = await fetch(url);
    const data = await res.json();
    displayEntertainmentNews(data.data);
}
const displayEntertainmentNews = (data) => {
    const store = document.getElementById("storePoint");
    const total = document.getElementById("total");
    store.textContent = "";
    console.log(data)
    data.forEach(element => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
        <div class="row gy-3">
        <div class="col-md-4">
            <img id="first" src="${element.image_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.details}</p>
                <img id="second" class="rounded" src="${element.author.img
            }" class="rounded-start" alt="...">
            <h5>${element.author.published_date}</h5>
            <i class="fas fa-eye">   ${element.total_view}</i>
            <button onclick="details4('${element._id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
             Details
            </button>
            </div>
        </div>
    </div>
    `
        store.appendChild(div)
        total.innerText = "Total" + " " + store.childElementCount + " " + "news found";
        total.classList.remove("d-none");
        toggleSpinner(false)
    });
}

const details4 = async news_id => {
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
    const res = await fetch(url);
    const data = await res.json();
    detailsUser4(data.data[0])
}

const detailsUser4 = data => {
    const Title = document.getElementById("modalTitle");
    Title.innerText = data.title;
    const images = document.getElementById("images");
    images.setAttribute("src", `${data.image_url}`);
    const modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = `
        <h2>Total Views : ${data.total_view ? data.total_view : "no found"}</h2>
        <h3>Author Name : ${data.author.name ? data.author.name : "no found"}</h3>
        <h4>Rating : ${data.rating.number ? data.rating.number : "no found"}</h4>
    `
}

const fiveNews = async (category_id) => {
    console.log(category_id)
    toggleSpinner(true)
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    console.log(url)
    const res = await fetch(url);
    const data = await res.json();
    displayCultureNews(data.data);
    console.log(data.data)
}
const displayCultureNews = (data) => {
    const store = document.getElementById("storePoint");
    const total = document.getElementById("total");
    store.textContent = "";
    console.log(data);
    data.forEach(element => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
        <div class="row gy-3">
        <div class="col-md-4">
            <img id="first" src="${element.image_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.details}</p>
                <img id="second" class="rounded" src="${element.author.img
            }" class="rounded-start" alt="...">
            <h5>${element.author.published_date}</h5>
            <i class="fas fa-eye">   ${element.total_view}</i>
            <button onclick="details5('${element._id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
             Details
            </button>
            </div>
        </div>
    </div>
    `
        store.appendChild(div)
        total.innerText = "Total" + " " + store.childElementCount + " " + "news found";
        total.classList.remove("d-none");
        toggleSpinner(false)
    });
}

const details5 = async news_id => {
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
    const res = await fetch(url);
    const data = await res.json();
    detailsUser5(data.data[0])
}

const detailsUser5 = data => {
    const Title = document.getElementById("modalTitle");
    Title.innerText = data.title;
    const images = document.getElementById("images");
    images.setAttribute("src", `${data.image_url}`);
    const modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = `
        <h2>Total Views : ${data.total_view ? data.total_view : "no found"}</h2>
        <h3>Author Name : ${data.author.name ? data.author.name : "no found"}</h3>
        <h4>Rating : ${data.rating.number ? data.rating.number : "no found"}</h4>
    `
}

const sixNews = async (category_id) => {
    toggleSpinner(true)
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    displayArtsNews(data.data);
}
const displayArtsNews = (data) => {
    const store = document.getElementById("storePoint");
    const total = document.getElementById("total");
    store.textContent = "";
    console.log(data)
    data.forEach(element => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
        <div class="row gy-3">
        <div class="col-md-4">
            <img id="first" src="${element.image_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.details}</p>
                <img id="second" class="rounded" src="${element.author.img
            }" class="rounded-start" alt="...">
            <h5>${element.author.published_date}</h5>
            <i class="fas fa-eye">   ${element.total_view}</i>
            <button onclick="details6('${element._id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
             Details
            </button>
            </div>
        </div>
    </div>
    `
        store.appendChild(div)
        total.innerText = "Total" + " " + store.childElementCount + " " + "news found";
        total.classList.remove("d-none");
        toggleSpinner(false)
    });
}

const details6 = async news_id => {
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
    const res = await fetch(url);
    const data = await res.json();
    detailsUser6(data.data[0])
}

const detailsUser6 = data => {
    const Title = document.getElementById("modalTitle");
    Title.innerText = data.title;
    const images = document.getElementById("images");
    images.setAttribute("src", `${data.image_url}`);
    const modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = `
        <h2>Total Views : ${data.total_view ? data.total_view : "no found"}</h2>
        <h3>Author Name : ${data.author.name ? data.author.name : "no found"}</h3>
        <h4>Rating : ${data.rating.number ? data.rating.number : "no found"}</h4>
    `
}

const sevenNews = async (category_id) => {
    toggleSpinner(true)
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    displayAllNews(data.data);
}
const displayAllNews = (data) => {
    const store = document.getElementById("storePoint");
    const total = document.getElementById("total");
    store.textContent = "";
    console.log(data)
    data.forEach(element => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
        <div class="row gy-3">
        <div class="col-md-4">
            <img id="first" src="${element.image_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.details}</p>
                <img id="second" class="rounded" src="${element.author.img
            }" class="rounded-start" alt="...">
            <h5>${element.author.published_date}</h5>
            <i class="fas fa-eye">   ${element.total_view}</i>
            <button onclick="details7('${element._id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
             Details
            </button>
            </div>
        </div>
    </div>
    `
        store.appendChild(div)
        total.innerText = "Total" + " " + store.childElementCount + " " + "news found";
        total.classList.remove("d-none");
        toggleSpinner(false)
    });
}

const details7 = async news_id => {
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
    const res = await fetch(url);
    const data = await res.json();
    detailsUser7(data.data[0])
}

const detailsUser7 = data => {
    const Title = document.getElementById("modalTitle");
    Title.innerText = data.title;
    const images = document.getElementById("images");
    images.setAttribute("src", `${data.image_url}`);
    const modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = `
        <h2>Total Views : ${data.total_view ? data.total_view : "no found"}</h2>
        <h3>Author Name : ${data.author.name ? data.author.name : "no found"}</h3>
        <h4>Rating : ${data.rating.number ? data.rating.number : "no found"}</h4>
    `
}

loadAllNews();