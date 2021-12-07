/*
const Menu = function(liens) {

    this.parent = document.querySelector('nav');
    this.liens = liens;

    this.build = function() {
        this.ul = document.createElement('ul');
        this.ul.className = "menu-list"
        for(let lien of this.liens) {
            const li = document.createElement('li');
            li.appendChild(lien.getHtmlLinkElement())
            this.ul.appendChild(li);
        }
        this.parent.appendChild(this.ul);
    }

    this.attachClickEvent = function(){
        for(let a of this.liens) {
            a.getHtmlLinkElement().addEventListener('click', function(event) {
                event.preventDefault();
                console.log('lien ' + a.titre + ' a été cliqué !');
            });
        }
    }

}


 * A single link HtmlElement.
 * @param lien
 * @param titre
 * @constructor

const Link = function(lien, titre) {
    this.lien = lien;
    this.titre = titre;
    this.aHtmlElement = null;

    this.getHtmlLinkElement = function() {
        if(this.aHtmlElement === null) {
            this.aHtmlElement = document.createElement('a');
            this.aHtmlElement.innerHTML = this.titre;
            this.aHtmlElement.title = this.titre;
            this.aHtmlElement.href = this.lien;
        }
        return this.aHtmlElement;
    }
}
// Menu parent element.
const myMenu = document.querySelector('nav');
const linksMenu = [
    new Link("#", "Home"),
    new Link("#", "Works"),
    new Link("#", "About me"),
    new Link("#", "Contact")
];
*/


document.getElementById("menu").addEventListener("click", ()=>{
    document.getElementById("container").style.top = "0";
});

document.getElementById("exitMenu").addEventListener("click", ()=>{
    document.getElementById("container").style.top = "-105vh";
});
