document.getElementById('btn1').addEventListener('click', LoadCustomer)
document.getElementById('btn2').addEventListener('click', LoadCustomers)



//Load Single Customer
function LoadCustomer() {

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true)

    xhr.onload = function () {
        if (this.status === 200) {
            let customer = JSON.parse(this.responseText)

            const output = `
        <ul class = "list-group">
        
        <li class = "list-group-item list-group-item-primary"> ID: ${customer.id} </li>
            
        
        <li class = "list-group-item list-group-item-secondary" > Name: ${customer.name} </li>
            
        
        <li class = "list-group-item list-group-item-success"> Company: ${customer.company} </li>
            
        
        <li class = "list-group-item list-group-item-danger"> Phone: ${ customer.phone} </li>
           
        </ul>`


            document.getElementById('customer').innerHTML = output

        }
    }
    xhr.send()
}


function LoadCustomers() {
    let color = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'whight']
    let counter = 0
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true)

    xhr.onload = function () {
        let customers = JSON.parse(this.responseText)

        customers.forEach(function (e) {
            let ul = document.createElement('ul')
            ul.className = "list-group"
            for (value in e) {
                let random = Math.round(Math.random() * 8)
                //Random from 0 to 7

                console.log(random)
                let li = document.createElement('li')
                li.className = "list-group-item"
                li.classList.add('list-group-item-' + color[random])
                li.innerHTML = `${value}: ${e[value]}`;
                ul.appendChild(li)
                counter++
            }
            document.getElementById('customers').appendChild(ul)
        })

    }
    xhr.send()
}