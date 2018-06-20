

function getHttp(theUrl, showCot, tag, tp) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 && xhr.status == 200) {
            let str = JSON.parse(xhr.responseText);
            showCot(str, tag, tp);
            console.log(JSON.parse(xhr.responseText))
        } else if(xhr.status == 404) {
            console.log('please type in right string, like: CommandLine');
            alert`1`;
            document.querySelector('div').innerHTML = xhr.status;
        }
    }
    xhr.open("GET", theUrl, true);
    xhr.send(null);
}

function showCot(str, tag, tp) {
    let tagObj = document.querySelector(tag);
    if(tp == 1) {
    str.map((coter) => {
        let p = document.createElement('p');
        p.innerHTML = `Id: ${coter.id}  Name: ${coter.name}`;
        tagObj.appendChild(p);
    })
}
    if(tp == 2) {
        let p = document.createElement('p');
        p.innerHTML = `contributors: ${str.contributors_url}
        avatar: `;
        tagObj.appendChild(p);

        let img = document.createElement('img');
        img.src = str.owner.avatar_url
        tagObj.appendChild(img);


    }
}

// //get all api data
let tUrl = "https://api.github.com/orgs/HackYourFuture/repos";

document.getElementById('Btn')
        .addEventListener('click', () => {
    console.log('you click me');
    getHttp(tUrl, showCot, '#lf', 1);
})

//get special data
let orgUrl = 'https://api.github.com/repos/HackYourFuture/';


document.getElementById("sBtn")
        .addEventListener("click", () => { 
    let input =  document.getElementsByName("Nm")[0].value;
    let spcUrl = orgUrl + input;
    console.log(spcUrl);
    getHttp(spcUrl, showCot, '#rt', 2);
});
