function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
function loadword (){
    readTextFile("word/examination-outline.json", function(text)
    {
        var random = Math.round(Math.random()*9);
        var data = JSON.parse(text);
        var translate = new Array(1000);
        var word = new Array(1000);
        for(var i = 0;i <= 9;i++)
        {
            word[i] = data.word[i];
            translate[i] = data.translate[i];
        }
        document.getElementById("demo").innerHTML = translate[random];
        document.getElementById("answertrue").value = word[random];
    });
}

loadword();

