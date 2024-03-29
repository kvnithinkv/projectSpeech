
//console.log(window);

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults=true;
const p=document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

//this is for printing content..

//events

recognition.addEventListener('result', e =>
{
    const transcript =[...e.results]
    .map(result=>result[0])
    .map(result=>result.transcript)
    .join('');
    p.innerHTML=transcript;//p.textcontent=transcript;
    if(e.result[0].isFinal){
        p=document.createElement('p');
        words.appendChild(p);
        p.textContent=transcript;
    }
});

recognition.addEventListener('end',recognition.start);
recognition.start();

