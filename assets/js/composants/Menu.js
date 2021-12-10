/* const Menu = function(parent,liens) {

    this.parent = parent;
    this.liens = liens;

    this.build = function() {
        this.ul = document.createElement('ul');
        this.ul.className = "menu-list"
        for(let lien of this.liens) {
            const li = document.createElement('li');
            li.appendChild(lien.getLink())
            this.ul.appendChild(li);
            let i = document.createElement("i");
            li.appendChild(i);
        }
        this.parent.appendChild(this.ul);
    }

    this.ClickEvent = function(){
        for(let a of this.liens) {
            a.getLink().addEventListener('click', function(event) {
                event.preventDefault();
                console.log('lien ' + a.titre + ' a été cliqué !');
            });
        }
    }

    this.build();
    this.ClickEvent();
}


 /** A single link HtmlElement.
  * @param lien
  * @param titre
  * @param i
  * @param target
  * @constructor

const Link = function(lien, titre,i,target) {
    this.lien = lien;
    this.titre = titre;
    this.i = i;
    this.target = target;
    this.aElement = null;

    this.getLink = function() {
        if(this.aElement === null) {
            this.aElement = document.createElement('a');
            this.aElement.innerHTML = this.titre;
            this.aElement.title = this.titre;
            this.aElement.i = this.i;
            this.aElement.href = this.lien;
            this.aElement.target = this.target;
        }
        return this.aElement;
    }
}
// Menu parent element.
const myMenu = document.querySelector('.menu');
const linksMenu = [
    new Link("#", "Home"),
    new Link("https://www.google.com", "Works","_blank"),
    new Link("#aboutMe", "About me","_blank"),
    new Link("mailto:elodiechristin@gmail.com", "Contact","_blank")
];

const a = new Menu(myMenu,linksMenu);
*/



