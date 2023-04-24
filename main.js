//https://teachablemachine.withgoogle.com/models/FsTJhyNe9/

function start_classification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json',model_ready)
}

function model_ready(){
    classifier.classify(got_results);
}

function got_results(error,results){
    if( error){
        console.error(error)
    }
    else{
        console.log(results)
        randomr=Math.floor(Math.random()*255)+1;
        randomg=Math.floor(Math.random()*255)+1;
       randomb=Math.floor(Math.random()*255)+1;
       document.getElementById("result_label").innerHTML="I can hear -"+results[0].label;
       document.getElementById("result_confidence").innerHTML="Accuracy -"+(results[0].confidence*100).toFixed(2);
       document.getElementById("result_label").style.color="rgb("+randomr+","+randomg+","+randomb+")";
       document.getElementById("result_confidence").style.color="rgb("+randomr+","+randomg+","+randomb+")";
       img1=document.getElementById("alien_1");
       img2=document.getElementById("alien_2");
       img3=document.getElementById("alien_3");
       img4=document.getElementById("alien_4");
       if(results[0].label=="Clap"){
           img1.src="aliens-01.gif"
           img2.src="aliens-02.png"
           img3.src="aliens-03.png"
           img4.src="aliens-04.png"
       }
       else if(results[0].label=="Bell"){
        img1.src="aliens-01.png"
        img2.src="aliens-02.gif"
        img3.src="aliens-03.png"
        img4.src="aliens-04.png"
    }
    else if(results[0].label=="Snapping"){
        img1.src="aliens-01.png"
        img2.src="aliens-02.png"
        img3.src="aliens-03.gif"
        img4.src="aliens-04.png"
    }
    else{
        img1.src="aliens-01.png"
        img2.src="aliens-02.png"
        img3.src="aliens-03.png"
        img4.src="aliens-04.gif"
    }
    }
}


