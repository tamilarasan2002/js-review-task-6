
            // assending order
var val1 = parseInt(prompt("val1"));
var val2 = parseInt(prompt("val2"));
var val3 = parseInt(prompt("val3"));
if(val1<val2 && val1<val3){
    
    if(val2<val3){
        document.write(val1+"<br>"+val2+"<br>"+val3);
    }
    else{
        document.write(val1+"<br>"+val3+"<br>"+val2);
    }
}
else if(val1<val1 && val2<val3 ){
    if(val1<val3){
        document.write(val2+"<br>"+val1+"<br>"+val3);
    }
    else{
        document.write(val2+"<br>"+val3+"<br>"+val1);
    }
}
else{
    if(val1<val2){
        document.write(val3+"<br>"+val2+"<br>"+val1);
    }
    else{
        document.write(val3+"<br>"+val1+"<br>"+val2);
    }
}

