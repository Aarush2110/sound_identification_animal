function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/10rt8zoe1/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults)
}

function gotResults(error, results)
{
    if (error)
    {
        console.error(error)
    }
    else {
        console.log(results)
        var random_number_r = Math.floor(Math.random()*255)+1;
        var random_number_g = Math.floor(Math.random()*255)+1;
        var random_number_b = Math.floor(Math.random()*255)+1;

        document.getElementById("result_animal").innerHTML = 'I can hear -' + results[0].label;
        document.getElementById("result_count").innerHTML = 'Accuracy -' + (results[0].confidence*100).toFixed(2) + "%"
        document.getElementById("result_animal").style.color = "rgb(" + random_number_r+","+ random_number_g+","+ random_number_b+")";
        document.getElementById("result_count").style.color = "rgb(" + random_number_r+","+ random_number_g+","+ random_number_b+")";

        img = document.getElementById('Dog');
        img1 = document.getElementById('Cat');
    

        if(results[0].label == "Dog")
        {
            img.src = 'download.jpg';
            

        }   else if(results[0].label == "Cat")
        {
            img1.src = 'download(1).jpg';
       }
console.log("Got Result");
    }
}


