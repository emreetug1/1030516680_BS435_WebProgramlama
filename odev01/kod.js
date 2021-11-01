
const array = document.querySelectorAll('.kart');
var number = Math.floor(Math.random() * 3);
var sayac=0;
for (let index = 0; index < array.length; index++) {
  if(number == index){
      array[index].classList.add('cat');
    
  }
  else{
      array[index].classList.add('dog');
     
  }

}

function bastan(){
   let array = document.querySelectorAll('.kart');
    number = Math.floor(Math.random() * 3);
    sayac=0;
for (let index = 0; index < array.length; index++) {
  if(number == index){
      array[index].classList.add('cat');
    
  }
  else{
      array[index].classList.add('dog');
    
  }

}
}

function oyunbastan(event){
   
    
    for (let index = 0; index < array.length; index++) {
      if(number == index){
        
          array[index].classList.remove('cat');
          array[index].removeAttribute('src');
      }
      else{
          array[index].removeAttribute('src');
          array[index].classList.remove('dog');
        
      }

    }
    const yenildi = document.getElementById('yenildiId');
    const kazandi = document.getElementById('kazandiId');
    const alan = document.getElementById('alanId');
    yenildi.style.display ="none";
    kazandi.style.display="none";
    alan.textContent="Kedi kartını bulmak için kartın üzerine tıklamalısınız.";
    bastan();
}

   


function tiklama(event){
    sayac++;
    const alan = document.getElementById('alanId');
    const yenildi = document.getElementById('yenildiId');
    const kazandi = document.getElementById('kazandiId');
 var nesne = event.target.classList[2];
 if(nesne == 'cat'){
    alan.textContent ='Kazandın !!! Tebrik ederiz :)';
    yerlestir();
    kazandi.style.display="block";
   
 }  
 else{
     if(sayac==1){
         event.target.src='dog.jpg';
     }
    if(sayac>=2){
        alan.textContent ='Kaybettin :(';
        yenildi.style.display="block";
        yerlestir();
        
    }
 }
}

function yerlestir(){
    for (let index = 0; index < array.length; index++) {
        if(number == index){
          
           array[index].src='cat.jpg';
        }
        else{
           
            array[index].src='dog.jpg';
        }
      }
}