function persona(){
    
    if(cla.value == 1){
        uzumaki.style.display = 'block';
        uchiha.style.display = 'none';
        namikaze.style.display = 'none';
        hyuga.style.display = 'none';
        outros.style.display = 'none';
    }
    if(cla.value == 2){
        uchiha.style.display = 'block';
        uzumaki.style.display = 'none';
        namikaze.style.display = 'none';
        hyuga.style.display = 'none';
        outros.style.display = 'none';
    }
    if(cla.value == 3){
        namikaze.style.display = 'block';
        uzumaki.style.display = 'none';
        uchiha.style.display = 'none';
        hyuga.style.display = 'none';
        outros.style.display = 'none';
    }
    if(cla.value == 4){
        hyuga.style.display = 'block';
        uzumaki.style.display = 'none';
        uchiha.style.display = 'none';
        namikaze.style.display = 'none';
        outros.style.display = 'none';
    }
    if(cla.value == 5){
        outros.style.display = 'block';
        uzumaki.style.display = 'none';
        uchiha.style.display = 'none';
        namikaze.style.display = 'none';
        hyuga.style.display = 'none';
    }
}

function cla_uzumaki(){
if(uzumaki.value == 'Naruto'){
    avatar.src= '../img/'+uzumaki.value+'.gif';
}
}
function cla_uchiha(){
if(uchiha.value == 'Itachi'){
    avatar.src= '../img/'+uchiha.value+'.gif';
}else{
    avatar.src= '../img/'+uchiha.value+'.gif';
}
}

function cla_namikaze(){
if(namikaze.value == 'Minato'){
    avatar.src= '../img/'+namikaze.value+'.gif';
}
}

function cla_hyuga(){
if(hyuga.value == 'hinata'){
    avatar.src= '../img/'+hyuga.value+'.gif';
}else{
    avatar.src= '../img/'+hyuga.value+'.gif';
}
}

function cla_outros(){
if(outros.value == 'lee'){
    avatar.src= '../img/'+outros.value+'.gif';
}else{
    avatar.src= '../img/'+outros.value+'.gif';
}
}
