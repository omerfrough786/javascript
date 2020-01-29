// let promise = new Promise(function(resolve,reject){
//     //executor (the producing code 'the singer give his result')
// })
// let promise = new Promise(function(resolve, reject){

//     setTimeout(() => resolve('done'), 1000)

// })

// // let promise = new Promise(function(resolve, reject){

// //     setTimeout(() => reject(new Error('Oooooohhhhh')), 1000)

// // })

// //resolve runs the first function in .then
// promise.then(
//     result => alert(result), // shows 'done' after one second 
//     error => alert(error)
// )
//console.log(promise)

const posts = [{title: 'post one', body: 'This is post one'}, {title: 'post two', body: 'This is post two'}]


function createPost(post){
    return new Promise((resolve,reject)=>{
        // setTimeout(()=> resolve(posts),2000)
    setTimeout(()=>{
        posts.push(post);
        const error = false
        if(!error){
            resolve()
        }else{
            reject(new Error('Something went wrong!!!'))
        }
    },2000)
    })
}

function getPost(){
    setTimeout(() => {
        let output = ''
        posts.forEach(item=>output+=`<li>${item.title} ${item.body}</li>`)
        document.body.innerHTML = output
    }, 2000);
}



// createPost(posts2).then(getPost).catch(function(err){
//     console.log(err)
// })

createPost().then(getPost).catch((e)=>{
    console.log(e)
})
