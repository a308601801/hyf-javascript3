'use strict'

function getHttp(theUrl, showCot, tag, tp) {
    return fetch(theUrl)
        .then(response => {
            if(response.ok) {
                return response.json();
            } 
            throw new Error('Network response was not ok.');
        })
        .then(user => showCot(user, tag, tp))
        .catch(error => {
            console.log('There has been a problem with your fetch operation: ', error.message);
        });
}

async function showCot(str, tag, tp) {
    let tagObj = document.querySelector(tag);
    if(tp == 1) {
        str.map((coter) => {
            let p = document.createElement('p');
            p.innerHTML = `Id: ${coter.id}  Name: ${coter.name}`;
            tagObj.appendChild(p);
        })
    }
    if(tp == 2) {
        tagObj.innerHTML = '';
        try {
            let gitResponse = await fetch(str.contributors_url);
            let gitUser = await gitResponse.json();
        
            gitUser.forEach(x => {
                let p = document.createElement('p');
                p.innerHTML = `userName: <a href ='${x.html_url}'>${x.login}</a> <br>
                    avatar: <br><br>
                    <img src = '${x.avatar_url}' style = 'height:100px; width:100px; border-radius:20px;'/>`;
                tagObj.appendChild(p);})
        } catch(err) {alert(err)};
    }
}
//get all api data
let tUrl = "https://api.github.com/orgs/HackYourFuture/repos";
document.getElementById('Btn')
        .addEventListener('click', () => {
    console.log('you click me');
    getHttp(tUrl, showCot, '#lf-showBox', 1);
});

//get special data
let orgUrl = 'https://api.github.com/repos/HackYourFuture/';
document.getElementById("sBtn")
        .addEventListener("click", () => { 
    let input =  document.getElementsByName("Nm")[0].value;
    let spcUrl = orgUrl + input;
    console.log(spcUrl);
    if(input == '') {
        alert`please type in right string, like: CommandLine.`
        document.getElementsByName("Nm")[0].value = 'CommandLine';
    } else {
        getHttp(spcUrl, showCot, '#rt-showBox', 2);
    }
});

window.addEventListener('error', function(e) {
   alert(e);
}, true);