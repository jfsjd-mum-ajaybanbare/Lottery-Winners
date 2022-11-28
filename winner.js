function lottery(){
    let randomnumber= document.getElementById('one').innerHTML=Math.floor(Math.random()*6+1);
    let x = document.createElement("img");
    switch(randomnumber){
           case 1:
            img.src="images/1.jpg";
            document.body.appendChild(x);
            break;
            case 2:
            img.src="images/2.jpg";
            document.body.appendChild(x);
            break;
            case 3:
            img.src="images/3.jpg";
            document.body.appendChild(x);
            break;
            case 4:
            img.src="images/4.jpg";
            document.body.appendChild(x);
            break;
            case 5:
            img.src="images/5.jpg";
            document.body.appendChild(x);
            break;
           ;

    }
    let anothernumber = document.getElementById('two').innerHTML=Math.floor(Math.random()*6+1);
    let y = document.createElement("img1");
    switch(anothernumber){
           case 1:
            img1.src="images/1.jpg";
            document.body.appendChild(y);
            break;
            case 2:
            img1.src="images/2.jpg";
            document.body.appendChild(y);
            break;
            case 3:
            img1.src="images/3.jpg";
            document.body.appendChild(y);
            break;
            case 4:
            img1.src="images/4.jpg";
            document.body.appendChild(y);
            break;
            case 5:
            img1.src="images/5.jpg";
            document.body.appendChild(y);
            break;
           
    }
    let thridnumber = document.getElementById('three').innerHTML=Math.floor(Math.random()*6+1);
    let z = document.createElement("img2");
    switch(thridnumber){
           case 1:
            img2.src="images/1.jpg";
            document.body.appendChild(z);
            break;
            case 2:
            img2.src="images/2.jpg";
            document.body.appendChild(z);
            break;
            case 3:
            img2.src="images/3.jpg";
            document.body.appendChild(z);
            break;
            case 4:
            img2.src="images/4.jpg";
            document.body.appendChild(z);
            break;
            case 5:
            img2.src="images/5.jpg";
            document.body.appendChild(z);
            break;
            
   
}
}