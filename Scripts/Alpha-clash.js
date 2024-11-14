console.log("hello")
function continueGame(){
    // Generate random alphabet
    console.log('hello start Game');
    const Alpha = getARandomAlphabet();

    // Set randomly generate Alphabet into the Screen 
    const DisplayElement = document.getElementById('current_alphabet');
    console.log(DisplayElement);
    DisplayElement.innerText = Alpha;

    // SetBackground color key 
    BackgroundColorKey(Alpha);

}
function play(){
    // step - 1 : hide the home screen . to hide the screen add the hidden class to the home section 
    // step - 2 : show the playground  
    console.log("Clicking");
    
    ElementHide('homeScreen');
    ElementHide('final_score');
    ElementVisible('play_ground');

    console.log('clicking');

    // BackgroundColorKeyInvisible(document.getElementById('current_alphabet'));
    SetInnerText('Score',0);
    SetInnerText('LifeScore',5);


    continueGame();
}
function GetInnerText(elementId){
    return document.getElementById(elementId).innerText;

}
function SetInnerText(elementId,val){
    document.getElementById(elementId).innerText = val;
}
function KeyUpPressedEvent(event){
    const PlayerPressedKey = event.key;
    const ExpectedPressKey = document.getElementById('current_alphabet').innerText.toLowerCase();

    if(PlayerPressedKey == 'Escape'){
        BackgroundColorKeyInvisible(ExpectedPressKey);
        SetInnerText('Score',0);
        SetInnerText('LifeScore',5);
        ElementHide('play_ground');
        ElementHide('final_score');
        ElementVisible('homeScreen');
        


    }       
    else if(PlayerPressedKey == ExpectedPressKey){
        let ScoreValue = parseInt(GetInnerText('Score'));
        ScoreValue += 1 ;
        SetInnerText('Score',ScoreValue);
        BackgroundColorKeyInvisible(ExpectedPressKey)

        continueGame();

        

    }else{
        let LifeScoreVal = parseInt(GetInnerText('LifeScore'));
        LifeScoreVal-=1 ; 
        SetInnerText('LifeScore',LifeScoreVal);
        BackgroundColorKeyInvisible(ExpectedPressKey)
        

        if(LifeScoreVal == 0){
            gameOver();
        }else{
            continueGame();
        }


    }

}
document.addEventListener('keyup' , KeyUpPressedEvent);
function gameOver(){
    ElementHide('play_ground');
    ElementVisible('final_score');

    SetInnerText('FinalScoreResult',document.getElementById('Score').innerText);
    SetInnerText('Score',0);
    SetInnerText('LifeScore',5);
    
}