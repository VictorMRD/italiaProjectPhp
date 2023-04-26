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