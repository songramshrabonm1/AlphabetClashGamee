function ElementHide(ElementId){
    const Elements = document.getElementById(ElementId);
    Elements.classList.add('hidden');
}

function ElementVisible(ElementId){
    const Elements = document.getElementById(ElementId);
    Elements.classList.remove('hidden');

}



function getARandomAlphabet(){
    const AllAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const SplitAllAlphabet= AllAlphabet.split('');
    console.log(SplitAllAlphabet);
    const RandomNumber = Math.random()*25;
    console.log(RandomNumber);
    const RoundRandomNumber = Math.round(RandomNumber);
    console.log(RoundRandomNumber);
    const singleRandomAlphabet = SplitAllAlphabet[RoundRandomNumber];
    console.log(singleRandomAlphabet);
    return singleRandomAlphabet;
}

// SetBackgroundColor key 
function BackgroundColorKey(alphabet){
    const key = document.getElementById(alphabet);
    // key.style.backgroundColor = 'red';
    key.classList.add('bg-orange-400');
}


function BackgroundColorKeyInvisible(alphabet){
    const key = document.getElementById(alphabet);
    key.classList.remove('bg-orange-400');
}
