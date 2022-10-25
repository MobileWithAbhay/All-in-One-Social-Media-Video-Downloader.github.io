// accordion function
const accordion = document.getElementsByClassName("contentbox");

for(i=0; i<accordion.length;i++){
  accordion[i].addEventListener('click',function(){
    this.classList.toggle('active');
  });
}

// input box
const link = document.querySelector('.link');

// download function
function download() {
  if(link.value!=""){

  var url2 = `https://convert2mp3s.com/api/widgetv2?url=${link.value}`;
  
  document.querySelector('.result2').innerHTML = `<iframe id="widgetApi" src="${url2}" width="100%" height="100%" allowtransparency="true" scrolling="yes" style="border:none"></iframe>`;
  }
}
