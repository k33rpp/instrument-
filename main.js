function start(){
    navigator.mediaDevices.getUserMedia({ audio: true });
    teachable=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Tc7coocbe/model.json',modelTaiyar);
}

function modelTaiyar(){
    console.log("Ready to set things on fire ");
    teachable.classify(getresult);
}

function getresult(error, jawab){
    if(error) {
        console.error(error);
    }
    else{
        console.log(jawab);
    }
}