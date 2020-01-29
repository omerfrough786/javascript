document.getElementById('button').addEventListener('click', LoadData)
let div = document.getElementById('output');


//Event Handler
function LoadData(){
    //Create XHR Request Object
    const xhr = new XMLHttpRequest();

    //OPEN
    xhr.open('GET', 'data.txt', true);
    
    //onload method
    xhr.onload = function(){
        console.log('the HTTP Status', this.status)
       

    //    //HTTP Statuses
    //    //200: Ok
    //    //403: Forbidden
    //    //404: Not Found
       if(this.status === 200){
        // div.innerHTML = `<h1>${this.responseText}</h1>`;
        let str = JSON.parse(this.responseText)
        div.innerHTML = JSON.stringify(str[1])
        console.log(str[0])
        
        
       }
      
       }
  xhr.onprogress = function(){
        // console.log('READYSTATE:', xhr.readyState)

    //readystate values
    // 0: request not intialized
    // 1 server connnection 
    // 2 request received 
    // 3 processing request 
    // 4 request finished and response is ready
    }
  
    xhr.onreadystatechange = function(){
        console.log('ReadyState', xhr.readyState)
        if(this.status === 200 && this.readyState === 4){
            console.log(this.responseText)
        }

        xhr.onerror = function(){
            console.log('Request error...')
        }
    }
    xhr.send()
}

