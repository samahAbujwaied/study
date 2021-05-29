'use strict'
let formarr = []
function FormData(username, age, gender, major, skills) {
    this.username = username;
    this.age = parseInt(age);
    this.gender = gender;
    this.major = major;
    this.skills = skills;
    formarr.push(this);
    console.log(formarr);
    createtable();
    setting();
    gitting();

}

let submitbtn = document.getElementById('form');
submitbtn.addEventListener('submit', addlocal);

function addlocal(event) {
    event.preventDefault();
    let username = event.target.username.value;
    let userage = event.target.userage.value;
    let usergender;
    if (document.getElementById('male').checked)
        usergender = event.target.male.value;
    else if (document.getElementById('female').checked)
        usergender = event.target.female.value;

    let usermajor = event.target.major.value;
    let userskills = event.target.skills.value;

   
            new FormData(username, userage, usergender, usermajor, userskills);
            document.getElementById('username').value = '';
            document.getElementById('userage').value = '';
            document.getElementById('male').checked = false;
            document.getElementById('female').checked = false;
            document.getElementById('major').value = '';
            document.getElementById('skills').value = '';
     
    }

function setting() {
    let data = JSON.stringify(formarr);
    localStorage.setItem('data', data)
}
let table = document.getElementById('table');
let flage = true;
function createtable() {


    if (flage == true) {
        let thead = document.createElement('thead');
        table.appendChild(thead);

        let trhead = document.createElement('tr');
        thead.appendChild(trhead);

        let thhead = document.createElement('td');
        trhead.appendChild(thhead);
        thhead.textContent = 'User name';

        thhead = document.createElement('td');
        trhead.appendChild(thhead);
        thhead.textContent = 'User age';

        thhead = document.createElement('td');
        trhead.appendChild(thhead);
        thhead.textContent = 'User gender';

        thhead = document.createElement('td');
        trhead.appendChild(thhead);
        thhead.textContent = 'User major';

        thhead = document.createElement('td');
        trhead.appendChild(thhead);
        thhead.textContent = 'Skills';
        flage = false;
    }



}


let tbody2 = document.createElement('tbody');
table.appendChild(tbody2);
let i = 0;
function gitting() {
    let data1 = localStorage.getItem('data');
    let data2 = JSON.parse(data1);

    let tr2 = document.createElement('tr');
    tbody2.appendChild(tr2);
    let tdbody = document.createElement('td');
    tr2.appendChild(tdbody);
    tdbody.textContent = data2[i].username;

    tdbody = document.createElement('td');
    tr2.appendChild(tdbody);
    tdbody.textContent = data2[i].age;

    tdbody = document.createElement('td');
    tr2.appendChild(tdbody);
    tdbody.textContent = data2[i].gender;

    tdbody = document.createElement('td');
    tr2.appendChild(tdbody);
    tdbody.textContent = data2[i].major;

    tdbody = document.createElement('td');
    tr2.appendChild(tdbody);
    tdbody.textContent = data2[i].skills;
    i++;

}
