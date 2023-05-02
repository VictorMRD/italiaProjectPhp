let box3 = document.getElementById('idBox3');
console.log(box3);

let flag = false;
function moveSocial(obj){
    obj = document.getElementById('idBox3');
    obj.style.transition = '2s';
    if(flag == false){
        flag = true;
        obj.style.background = 'white';
        obj.style.color = 'black';
        obj.style.height = '300%';
        obj.style.borderTopColor = 'black';
        obj.style.borderWidth = '4px';
    }else{
        flag = false;
        obj.style.background = 'black';
        obj.style.color = 'white';
        obj.style.height = '60px';
        obj.style.borderTopColor = 'white';
        obj.style.borderWidth = '3px';
    }
}

let flag2 = false;
function moveDecisiones(obj){
    obj = document.getElementById('optc');
    obj.style.transition = '1s';
    obj2 = document.getElementById('historia');
    obj2.style.transition = '1s';
    obj3 = document.getElementById('optionst');
    console.log(obj3);
    obj3.style.transition = '1s';
    if(flag2 == false){
        flag2 = true;
        obj.style.background = 'black';
        obj.style.color = 'black';
        obj.style.height = '100%';
        obj.style.borderTopColor = 'black';
        obj.style.borderWidth = '4px';
        
        obj2.style.height = 0;
        
        obj3.style.background = 'white';
        obj3.style.color = 'black';
    }else{
        flag2 = false;
        obj.style.background = 'white';
        obj.style.color = 'black';
        obj.style.height = '0';
        obj.style.borderTopColor = 'black';
        obj.style.borderWidth = '3px';
        
        obj2.style.height = '100%';
        
        obj3.style.background = 'black';
        obj3.style.color = 'white';
    }
}

function showMessage(){
    console.log("HEEY")
    obj = document.getElementById('LifeMessage');
    obj.style.display = 'block';
    obj.style.opacity = '0';
    setTimeout(function() {
        obj.style.opacity = '0.6';
    }, 1); // wait for 1 second before changing opacity to 0.6
    obj2 = document.getElementById('Message');
    obj2.style.display = 'block';
    obj2.style.opacity = '0';
    setTimeout(function() {
        obj2.style.opacity = '1';
    }, 1);
}

function hide(obj){
    console.log("HEEY")
    obj.style.opacity = '0';
    setTimeout(function() {
        obj.style.display = 'none';
    }, 500); // wait for 1 second before changing opacity to 0.6

    obj2 = document.getElementById('Message');
    obj2.style.opacity = '0';
    setTimeout(function() {
        obj2.style.display = 'none';
    }, 500);
}