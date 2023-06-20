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
        var random = Math.round(Math.random()*114);
        var data = JSON.parse(text);
        var translate = new Array(1000);
        var word = new Array(1000);
        for(var i = 0;i <= 114;i++)
        {
            word[i] = data.word[i];
            translate[i] = data.translate[i];
        }
        document.getElementById("demo").innerHTML = translate[random];
        document.getElementById("answertrue").value = word[random];
    });
}

//type:success, error, info
//time:ms
function displayAlert(type, data, time)
{
    var lunbo=document.createElement("div");
    if(type == "success") 
    {
        lunbo.style.backgroundColor = "#009900";
        lunbo.id="lunbo";
        lunbo.style.position = "absolute";
        lunbo.style.width = "200px";
        lunbo.style.height = "60px";
        lunbo.style.top = "50%";
        lunbo.style.left = "50%";
        lunbo.style.right = "0";
        lunbo.style.bottom = "0";
        lunbo.style.transform = "translate(-50%, -50%)";
        lunbo.style.color = "white";
        lunbo.style.fontSize = "25px";
        lunbo.style.borderRadius = "20px";
        lunbo.style.textAlign="center";
        lunbo.style.lineHeight="60px";
    } 
    else if(type == "error") 
    {
        lunbo.style.backgroundColor = "#990000";
        lunbo.id="lunbo";
        lunbo.style.position = "absolute";
        lunbo.style.width = "200px";
        lunbo.style.height = "60px";
        lunbo.style.top = "50%";
        lunbo.style.left = "50%";
        lunbo.style.right = "0";
        lunbo.style.bottom = "0";
        lunbo.style.transform = "translate(-50%, -50%)";
        lunbo.style.color = "white";
        lunbo.style.fontSize = "25px";
        lunbo.style.borderRadius = "20px";
        lunbo.style.textAlign="center";
        lunbo.style.lineHeight="60px";
    }
    else if(type == "info")
    {
        lunbo.style.backgroundColor = "#e6b800";
        lunbo.id="lunbo";
        lunbo.style.position = "absolute";
        lunbo.style.width = "200px";
        lunbo.style.height = "120px";
        lunbo.style.top = "50%";
        lunbo.style.left = "50%";
        lunbo.style.right = "0";
        lunbo.style.bottom = "0";
        lunbo.style.transform = "translate(-50%, -50%)";
        lunbo.style.color = "white";
        lunbo.style.fontSize = "20px";
        lunbo.style.borderRadius = "20px";
        lunbo.style.textAlign="center";
        lunbo.style.lineHeight="60px";
    }

    if(document.getElementById("lunbo")==null)
    {
        document.body.appendChild(lunbo);
        lunbo.innerHTML=data;
        setTimeout(function(){document.body.removeChild(lunbo);} ,time);
    }
}

function truely() 
{
    displayAlert("success", "答案正确", 1500);
}

function wrongly() 
{
    displayAlert("error", "答案错误", 1500);
}
function information() 
{
    displayAlert("info", "作者 : NoNameGMM 版本 : V1.1.0", 1500);
}

loadword();

