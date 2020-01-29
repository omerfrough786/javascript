// const http = new easyHTTP;

// function getData(post){
//     console.log(post)
// }

// // Get posts
// http.get('https://jsonplaceholder.typicode.com/posts/2',getData)


// let name = 'omer';
// function doThing(other){
//     setTimeout(() => {
//         console.log('hi')
//     }, 3000);
    
//     other(name)
// }

// function other(name){
//     console.log('hello',name)
// }

// doThing(other)
const http = new easyHTTP;

function callback(err, responseText) {
    let ul = document.createElement('ul')
    if (err) {
        // console.log(err)
        ul.innerHTML = err
        
        
    } else {
        // console.log(response)
        let data = JSON.parse(responseText)
        let html = `<li>${data.userId}</li>
                    <li>${data.title}</li>
                    <li>${data.body}</li>`
        ul.innerHTML = html

        //    response.valet output = ''lue.forEach(function (item) {
        //        output += `<li>${item.joke}</li>`
        //    })
    }
    document.body.appendChild(ul)

}

//Get Posts
http.get('https://jsonplaceholder.typicode.com/posts/1', callback)