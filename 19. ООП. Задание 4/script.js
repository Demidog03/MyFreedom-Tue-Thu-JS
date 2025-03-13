// function render() {

// }

class Logo {
    // this = {}
    constructor(url) {
        this.top = 0;
        this.left = 0;
        this.width = 200;
        this.html = null;
        this.imgUrl = url;
    }

    init() { // initialize - инициализировать (создать)
        const img = document.createElement('img') // <img />
        img.src = this.imgUrl // <img src="ссылка" />
        this.html = img // this.html = <img src="ссылка" />
        this.render() // render() не пишем, именно this.render()
        document.body.style.backgroundColor = 'black'
    }

    render() {
        document.body.appendChild(this.html) // document.body.appendChild(<img src=""/>)
        this.html.style.position = 'fixed' // <img src="" style="position: fixed;"/>
        this.html.style.top = this.top + 'px' // <img src="" style="position: fixed; left: 0px; top: 0px"/>
        this.html.style.left = this.left + 'px'
        this.html.style.width = this.width + 'px' // <img src="" style="position: fixed; left: 0px; top: 0px; width: 200px"/>
        this.html.style.zIndex = 1
    }

    moveUp() {
        this.top -= 20;
        this.render(); // <img src="" style="position: fixed; left: 0px; top: -20px; width: 200px"/>
    }

    moveDown() {
        this.top += 20;
        this.render(); // <img src="" style="position: fixed; left: 0px; top: 20px; width: 200px"/>
    }

    moveLeft() {
        this.left -= 20;
        this.render(); // <img src="" style="position: fixed; left: -20px; top: 0px; width: 200px"/>
    }

    moveRight() {
        this.left += 20;
        this.render(); // <img src="" style="position: fixed; left: 20px; top: 0px; width: 200px"/>
    }

    // return this = {
        // top: 0,
        // left: 0,
        // width: 200,
        // html: null,
        // imgUrl: url,
        // init() {},
        // render() {},
        // moveDown() {},
        // moveUp() {},
        // moveLeft() {},
        // moveRight() {}
    // }
}

const logo1 = new Logo('https://optim.tildacdn.biz/tild6463-3261-4630-b266-343730396462/-/resize/240x/-/format/webp/logofull.png')
logo1.init()
logo1.moveDown()
logo1.moveDown()
logo1.moveRight()
logo1.moveRight()
logo1.moveRight()
logo1.moveRight()
console.log(logo1)

const logo2 = new Logo('https://freelogopng.com/images/all_img/1681039182chatgpt-logo-with-name.png')
logo2.init()
logo2.moveDown()
logo2.moveDown()
logo2.moveDown()
logo2.moveDown()
logo2.moveDown()
logo2.moveDown()
logo2.moveRight()
logo2.moveRight()
logo2.moveRight()
logo2.moveRight()

class Circle {
    constructor(size, color) {
        this.size = size;
        this.color = color;
    }

    render() {
        const div = document.createElement('div') // <div></div>
        div.style.width = this.size + 'px' // <div style="width: 200px"></div>
        div.style.height = this.size + 'px' // <div style="width: 200px; height: 200px"></div>
        div.style.backgroundColor = this.color // <div style="width: 200px; height: 200px; background-color: yellow"></div>
        div.style.borderRadius = '50%' // <div style="width: 200px; height: 200px; background-color: yellow; border-radius: 50%"></div>
        div.style.position = 'fixed'
        div.style.left = '0px'
        div.style.top = '0px'

        document.body.appendChild(div)
    }
}

class Triangle {
    constructor(color) {
        this.color = color
    }

    render() {
        const div = document.createElement('div')
        div.style.width = '0px'
        div.style.height = '0px'
        div.style.border = '100px solid green'
        div.style.borderTop = '0px'
        div.style.borderBottomColor = this.color
        div.style.borderLeftColor = 'transparent'
        div.style.borderRightColor = 'transparent'

        document.body.appendChild(div)
    }
}

const circle1 = new Circle(100, 'yellow')
circle1.render()
console.log(circle1)

const triangle1 = new Triangle('blue')
triangle1.render()
