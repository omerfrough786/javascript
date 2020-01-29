// function easyHTTP(){
//     this.http = new XMLHttpRequest()
// }

// //Make an HTTP GET Request
// easyHTTP.prototype.get = function(url, callback){
//     this.http.open('GET', url,true);
//     let self = this
//     this.http.send();
//     this.http.onload = function(){
//         if(self.http.status === 200){
//              console.log(self.http.responseText)
//             callback(self.http.responseText);
//         }else{
//             callback('its an errror')
//         }
//     }
//     this.http.onerror = ()=>{
//         callback("Not Sound")
//     }

// }
// //Make an HTTP POST Request
// //Make an HTTP PUT Request
// //Make an HTTP DELETE Request

// let result = Math.floor(Math.random() * 50) + 1
// //console.log(result)

// let promise = new Promise(function(resolve,reject){
//    if(result<35){
//        resolve('you are success')
//    }
//    else{
//        reject('you are failed')
//    }

// })

// promise.then(function(resolve){
//     console.log(resovle)
// })

// var promise = new Promise(function(resolve, reject) {
//   let xhr = new XMLHttpRequest();

//   xhr.open("GET",'https://api.myjson.com/bins/11uh1e', true);

//   xhr.onload = () => {
//     if (xhr.status == 200) {
//       resolve(xhr.responseText);
//     } else {
//       reject("your request is rejected");
//     }
//   };

//   xhr.onerror = function(error) {
//     reject(error);
    
//   };
//   xhr.send();
// });



// promise.then(function(result) {
//   console.log(result);
// });

function easyHTTP() {
  this.http = new XMLHttpRequest()
}
//Make  an HTTp Get Request
// easyHTTP.prototype.get = function (url) {
//     this.http.open('Get', url, true);
//     this.http.onload =  () => {
//         if (this.http.status === 200) {
//             console.log(this.http.responseText);
//         }
//     }
//     this.http.send()
// }
///////////sloution 2///////////
// easyHTTP.prototype.get = function (url, callback) {
//   this.http.open('Get', url, true);
//   this.http.onload = () => {
//       if (this.http.status === 201) {
//           // console.log(self.http.responseText)
//           callback(null, this.http.responseText)
//       } else {
//           callback(`Page Not Found : ${this.http.status}`)
//       }
//   }
//   this.http.send()
// }

//Make  an HTTp Post Request
// easyHTTP.prototype.post = function(url, data, action){
//   this.http.open('POST', url, true)
//   this.http.setRequestHeader('Content-type', 'application/json')
//   this.http.onload = () => {
//     if(this.http.status === 201){
//       action(null, this.http.responseText)
//     }else{
//       action(`Page Not Found : ${this.http.status}`)
//     }

//   }
//   this.http.send(JSON.stringify(data))
// }


//Make  an HTTp Put Request
// easyHTTP.prototype.put = function(url, data, action){
//   this.http.open('PUT', url, true)
//   this.http.setRequestHeader('Content-type', 'application/json')
//   this.http.onload = () => {
//     if(this.http.status === 200){
//       action(null, this.http.responseText)
//     }else{
//       action(`Page Not Found : ${this.http.status}`)
//     }

//   }
//   this.http.send(JSON.stringify(data))
// }
//Make  an HTTp Delete Request

easyHTTP.prototype.delete = function(url, data, action){
  this.http.open('DELETE', url, true)
  this.http.onload = () => {
    if(this.http.status === 200){
      action(null, 'Deleted')
    }else{
      action(`Failed to delete : ${this.http.status}`)
    }

  }
  this.http.send()
}
