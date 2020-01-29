document.getElementById('button').addEventListener('click', LoadData);
let output = document.getElementById('output');

function LoadData(){

    let xhr = new XMLHttpRequest()

    xhr.open('GET', 'data.txt')

    xhr.onload = function(){
        
        console.log('the HTTP status is: ', this.status)
        if(this.status === 200){
            let arr = JSON.parse(this.responseText)
            output.innerHTML = JSON.stringify(arr)
        }
        
    }
    xhr.send()

}