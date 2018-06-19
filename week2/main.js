
let Get = function(bt, theUrl, showCot, tag, bl) {
    document.getElementById(bt)
        .addEventListener('click', () => {
        bUrl = theUrl;
        if(bl) {
            console.log(theUrl);
            let input =  document.getElementsByName('Nm')[0].value;
            theUrl = theUrl + input;
            console.log(input)
            if(input == '') {
                alert('please type in right string, like: CommandLine');
                input = 'CommandLine';
                document.getElementsByName('Nm')[0].value = 'CommandLine';
            }
        }
        console.log('you click me');
        console.log(theUrl); 
        getHttp(theUrl, showCot, tag);
        theUrl = bUrl;
     })
    }

function getHttp(theUrl, showCot, tag) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 && xhr.status == 200) {
            let str = JSON.parse(xhr.responseText);
            showCot(str, tag);
            console.log(JSON.parse(xhr.responseText))
        } 
    }
    xhr.open("GET", theUrl, true);
    xhr.send(null);
}

function showCot(str, tag) {
    let tagObj = document.querySelector(tag);
    str.map((coter) => {
        let p = document.createElement('p');
        p.innerHTML = `Id: ${coter.id}  Name: ${coter.name}`;
        tagObj.appendChild(p);
    })
}

// //get all api data
let tUrl = "https://api.github.com/orgs/HackYourFuture/repos";
let getAllDate = new Get('Btn', tUrl, showCot, '#lf');

//get special data
// let orgUrl = 'https://api.github.com/repos/HackYourFuture/';
// let input = document.getElementsByName('Nm')[0].value;
// let spcUrl = orgUrl + input;
let orgUrl = 'https://api.github.com/repos/HackYourFuture/';

let getSpcData = new Get('sBtn', orgUrl, showSpcCot, '#rt', true);

function showSpcCot(str, tag) {
    let tagObj = document.querySelector(tag);
    let p = document.createElement('p');
    p.innerHTML = `contributors: ${str.contributors_url}`;
    tagObj.appendChild(p);
}