
function getHttp(theUrl, showCot, tag, tp) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 && xhr.status == 200) {
            let str = JSON.parse(xhr.responseText);
            showCot(str, tag, tp);
            console.log(JSON.parse(xhr.responseText))
        } 
// The XMLHttpRequest's readystate has 4 states:
// 0 - no request initialized
// 1 - connected to server
// 2 - request was received 
// 3 - processing
// 4 - Done, response received
// The onreadystatechange handler (lines 4-11) will fire for states 1 through 4.
//      In the else if statement you need to console.log only in the case of the 'Done' state (4) 
//  just like you are doing in the first if statement. Add a check for the xhr.readystate 
//  in there for state 4 and you will get only one console.log display.
        
        else if(xhr.readyState == 4 && xhr.status == 404) {
            alert('Error:' + xhr.status);
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
        p.innerHTML = `contributors: ${str.contributors_url} <br><br>
        avatar: `;
        tagObj.appendChild(p);

        let img = document.createElement('img');
        img.src = str.owner.avatar_url;
        tagObj.appendChild(img);
    }
}

// //get all api data
let tUrl = "https://api.github.com/orgs/HackYourFuture/repos";
document.getElementById('Btn')
        .addEventListener('click', () => {
    console.log('you click me');
    getHttp(tUrl, showCot, '#lf', 1);
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
        getHttp(spcUrl, showCot, '#rt', 2);
    }
});
