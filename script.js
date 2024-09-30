const mappings = [
    { divId: 'nanami', liId: 'one'},
    { divId: 'mei', liId: 'two' },
    { divId: 'yaga', liId: 'three' },
    { divId: 'leiri', liId: 'four' },
    { divId: 'atsuya', liId: 'five' },
    { divId: 'lori', liId: 'six' },
    { divId: 'panda', liId: 'seven' },
    { divId: 'maki', liId: 'eight' },
    { divId: 'toge', liId: 'nine' },
    { divId: 'miwa', liId: 'ten' },
    { divId: 'gakuganji', liId: 'eleven' },
    { divId: 'mai', liId: 'twelev' },
    { divId: 'karnu', liId: 'thirteen' },
    { divId: 'momo', liId: 'fourteen' },
    { divId: 'aoi', liId: 'fifteen' }
];

mappings.forEach(mapping => {
    const divElement = document.getElementById(mapping.divId);
    const liElement = document.getElementById(mapping.liId);

    divElement.addEventListener('mouseover', function() {
        liElement.style.fontWeight = 'bold';
        liElement.style.color = '';
        liElement.style.borderBottom = '1px solid white';
        liElement.style.transition = '0.2s';
        liElement.style.textShadow = '0 0 10px darkred';
    });

    divElement.addEventListener('mouseout', function() {
        liElement.style = "";
        bdel.style = "none";
    });
});

const mappings2 = [
    {divId:'Juzo', liId:'Uone'},
    {divId:'Geto', liId:'Utwo'},
    {divId:'Mimiko', liId:'Uthree'},
    {divId:'Haruta', liId:'Ufour'},
    {divId:'Uraume', liId:'Ufive'},
    {divId:'Toji', liId:'Usix'},
    {divId:'Dagon', liId:'Sone'},
    {divId:'Mahito', liId:'Stwo'},
    {divId:'Eso', liId:'Sthree'},
    {divId:'Hanami', liId:'Sfour'},
    {divId:'Choso', liId:'Sfive'},
    {divId:'Jogo', liId:'Ssix'},
];

mappings2.forEach(mappings2 => {
    const divEl = document.getElementById(mappings2.divId);
    const liEl = document.getElementById(mappings2.liId);


    divEl.addEventListener('mouseover', function() {
        liEl.style.fontWeight = 'bold';
        liEl.style.color = 'darkred';
        liEl.style.textShadow = '0 0 5px red';
        liEl.style.borderBottom = '1px solid darkred';
        liEl.style.transition = '0.2s';
    });

    divEl.addEventListener('mouseout', function() {
        liEl.style = "none";
    });
});

function Switch(){
    const darkEl = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>';
    const lightEl = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>';
    
    if(document.querySelector('body').style.backgroundColor == 'white') {
        document.getElementById('switch').style.transition = '0.2s';
        document.getElementById('character').style.transition = '0.2s';
        document.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('body').style.transition = '0.2s';
        document.getElementById('character').style.color = 'white';
        document.getElementById('switch').innerHTML = `${lightEl}`;
        document.getElementById('switch').style.backgroundColor = 'white';
    }
    else{
        document.getElementById('switch').style.transition = '0.2s';
        document.querySelector('body').style.transition = '0.2s';
        document.getElementById('character').style.transition = '0.2s';
        document.querySelector('body').style.backgroundColor = 'white';
        document.getElementById('character').style.color = 'black';
        document.getElementById('switch').innerHTML = `${darkEl}`;
        document.getElementById('switch').style.backgroundColor = 'black';
    }
}

let vidEl = document.getElementById('danger');
let fire = 'true';
vidEl.addEventListener('mouseover',function(){
    fire = true;
    document.getElementById('container').style.boxShadow = '0 0 90px 15px yellow';
    document.getElementById('container').style.transition = '0.2s';
})

vidEl.addEventListener('mouseout',function(){
    if(fire){
        document.getElementById('container').style.boxShadow = '0 0 90px 15px #345e96';
        document.getElementById('container').style.transition = '0.2s';
    }
})

vidEl.addEventListener('click',function(){
    fire = false;
    document.getElementById('myvid').style.display = 'block';
    document.getElementById('myvid').play();
    document.getElementById('container').style.boxShadow = '0 0 90px 15px red';
    document.getElementById('container').style.transition = '0.2s';
    //document.getElementById('danger').style.display = 'none';
})





