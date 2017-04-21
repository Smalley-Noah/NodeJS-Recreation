let doc = document;
let state = false;
let element = doc.getElementsByClass('div_buttons');
function hover(a,b){
    state = true;
    if(a = 1){
        hoverOn(a);
    }
    else{
        hoverOn(b);
    }
}

function hoverOn(x){
    if(state === true){
        element.style.opacity="0.5";
        state = false;
    }
    else{
        doc.getElementsByClass('div_buttons').style.opacity="1";
    }
    function hover(n){
        let doc = document;
        hoverOn(doc,n);
        hoverOff(doc,n);
    }

    function hoverOn(page,n){
        alert('working');
        let elementA = page.getElementById('dbutton1');
        let elementB = page.getElementById('dbutton2')
        if(n === a){
            alert('a');
            elementA.style.opacity="0.5";
        }
        else{
            alert('b');
            elementB.style.opacity="0.5";
        }
    }
