const posts = [{
        title: 'post one',
        body: 'This is amazing post one'
    },
    {
        title: 'post tow',
        body: 'This is amazing post tow'
    }
]

//asynchronized Callback Function
function creatPost(post,callback) {
    setTimeout(function () {
        posts.push(post);
        callback()
    }, 3000);
    //console.log()
}

function getPosts() {
    setTimeout(function () {
        let output = '';
        posts.forEach(function (item) {
            output += `<li>${item.body}</li>`
        });
        document.body.innerHTML = output

    }, 2000)
}

let p1 = {
    title : 'Post three',
    body : 'This is amazing post three'
}

creatPost(p1,getPosts)

// callback()

//getPosts()