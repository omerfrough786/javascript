

document.getElementById('button').addEventListener('click', GetInfo)
let userName = document.getElementById('username')
let passWord = document.getElementById('password')

function GetInfo(){

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true)

    xhr.onload = function(){
        if(xhr.status === 200){
            let result = JSON.parse(this.responseText)
            let result2 = `<p style="color:red;">The User Name and Password does not Match please</p>`
        result.forEach(function(x){
            if(x.username == userName.value && x.password == passWord.value){
                result2= `<p>${x.profile}</p>
                <a id=${x.username} href="#" onclick="change(this)">Change Data</a>
                `
                
            }
            
        })
        document.querySelector('.info').innerHTML = result2

        
    }}
    xhr.send()

}
