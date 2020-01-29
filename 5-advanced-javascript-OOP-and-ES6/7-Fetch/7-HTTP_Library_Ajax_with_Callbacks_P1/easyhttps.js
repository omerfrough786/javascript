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
easyHTTP.prototype.get = function (url, callback) {
    this.http.open('Get', url, true);

    this.http.onload = () => {
        if (this.http.status === 200) {
            // console.log(self.http.responseText)

            callback(null, this.http.responseText)
        } else {
            callback(`Mother Fucker : ${this.http.status}`)

        }
    }
    this.http.send()
}
//Make  an HTTp Post Request
//Make  an HTTp Put Request
//Make  an HTTp Delete Request