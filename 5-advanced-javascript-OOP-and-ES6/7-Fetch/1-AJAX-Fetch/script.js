document.getElementById('button').addEventListener('click', loadDate)
let div = document.getElementById('output')


//Event Handler
function loadDate() {
    //Creat XHR Request Object

    const xhr = new XMLHttpRequest();

    //Open
    xhr.open('GET', 'data.txt', true);


    //onload method
    xhr.onload = function () {
        div.innerHTML
    }
    xhr.send();
}