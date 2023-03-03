const url = "https://jsonplaceholder1.typicode.com/posts"

const loadingElement = document.querySelector("#loading");
const postElement = document.querySelector("#posts-container");


async function getAllPosts(){
    const resposta = await fetch(url)    
    const data = await resposta.json();
   
    loadingElement.classList.add("hide");

    data.map((posts) => {
        console.log(posts.body)
        const div = document.createElement("div");
        const body = document.createElement("p");

        body.innerText = posts.body;

        div.appendChild(body);
        postElement.appendChild(div);

    })
}

getAllPosts();