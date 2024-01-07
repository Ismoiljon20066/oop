/*
OOP

class 

poroperty -> single key value
method    -> function key
memmber   -> property and method


abstraction
ancapsulation

getter
setter

*/

// class person {
//     name
//     surname
//     age

//     constructor(ism, fam, yosh) {
//         this.name = ism
//         this.surname = fam
//         this.age = yosh
//     }
//     fullName() {
//         return this.name + " " + this.surname
//     }
//     x = () => {
//         return this.age
//     }

// }

// const Ismoil=new person('Ismoil','Inomjonov',17)//object
// const Alisher=new person('Alisher','Abduraimov',17)

// console.log(Ismoil)
// console.log(Alisher)


// class User{
//     constructor(ism,fam){
//         this.firstName=ism
//         this.lastName=fam
//     }

//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }

//     set fullName(newValue){
//         [this.firstName,this.lastName]=newValue.split(' ')
//     }
// }

// const user =new User('Ismoil','Inomjonov');
// alert(user.fullName)
// user.fullName="Alisher Abduraimov";
// alert(user.fullName)

class Text {
    elem
    txt
    constructor(obj) {
        this.elem = document.querySelector(obj.el)
        this.txt = this.elem.innerHTML
        this.elem.innerHTML = null
        console.log(this.txt)
    }
    str(x = 0) {
        this.elem.innerHTML = this.elem.innerHTML + this.txt[x]
        x++;
        if (x < this.txt.length) {
            setTimeout(() => {
                this.str(x)
            }, 200)

        }
    }
}
const text = new Text({
    el: ".header__content h1"
})
const text2 = new Text({
    el: ".header__content p"
})

console.log(text.str())
console.log(text2.str())


class Sticky {
    constructor(option) {
        this.nav = document.querySelector(option.el)
        this.nav.style.position = 'fixed'

        window.addEventListener('scroll', () => this.scrollClalc())
    }
    scrollClalc() {
        if (window.innerHeight - this.nav.offsetHeight - window.scrollY > 0) {
            this.nav.style.top = window.innerHeight - this.nav.offsetHeight - window.scrollY + 'px'
        } else {
            this.nav.style.top = 0
        }
    }
}
const navName = new Sticky({
    el: ".header__nav"
})
navName.scrollClalc()