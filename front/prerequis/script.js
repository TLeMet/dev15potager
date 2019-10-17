
class PeakyBlinders extends HTMLElement{
    constructor(){
        super(); // Pour initialiser les attributs de la méthode mère.
    }


    // Fonction s'exécute quand on arrive sur une page
    connectedCallback(){
        console.log('ouah!');

        //this.innerHTML = "<p>The Peaky fucking Blinders are coming</p>";

        // let : pour déclarer une variable.
        let templ = document.querySelector('#mytemplate');
        this.innerHTML = templ.innerHTML;
    }
}



window.customElements.define('thomas-shelby', PeakyBlinders);