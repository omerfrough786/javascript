class UI {
    constructor(arrItems) {
        this.listItems = arrItems
    }

    createUl() {
        const ul = document.createElement('ul')
        // document.querySelector('body').appendChild(ul)
        return this.creatList(ul)
    }
    creatList(ul) {


        this.listItems.forEach(function (item) {
            let li = document.createElement('li')
            li.innerHTML = `${item}`
            ul.appendChild(li)

        })
        return ul

    }

}

const arr = ['banan', 'eat', 'fishing']
const list = new UI(arr)
div.appendChild(list.createUl())
//console.log(body.appendChild(list.createUl()))