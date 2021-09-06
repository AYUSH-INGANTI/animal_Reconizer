// https://teachablemachine.withgoogle.com/models/xy4e0y3Rt/model.json

cat = 0;
cow = 0;
lion = 0;
dog = 0;

result_label = document.getElementById("result_label");

function startClassification()
{
  navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/xy4e0y3Rt/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResult);
}

function gotResult(error, results){
 if(error){
     console.error(error);
 }else{
     console.log(results);

     random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'Detected'+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img1 = document.getElementById("dog")
    img2 = document.getElementById("cat")
    img3 = document.getElementById("lion")
    img4 = document.getElementById("cow")

    if(result.label[0] == "dog"){
     result_label.innerHTML = "I can hear - dog";
    }else if(result.label[0] == "cat"){
      result_label.innerHTML = "I can hear - cat";
    }else if(result.label[0] == "cow"){
      result_label.innerHTML = "I can hear - cow";
    }else if(result.label[0] == "lion"){
      result_label.innerHTML = "I can hear - lion";
    }
 }
}