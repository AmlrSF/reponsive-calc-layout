const  show = document.getElementById('open');
const hide = document.getElementById('close');


let nav = document.querySelector('#nav');


//--------------show navbar menu
show.addEventListener('click' ,() => {

    nav.style.left = '0';

});

//--------------hide navbar menu
hide.addEventListener('click' ,() => {

    nav.style.left = '-4000px';

})

//-------------------calaculator

const mainDisplay = document.querySelector('.main-res');

const prevDisplay = document.querySelector('.prev-res');

const buttons = document.querySelectorAll('button');

// const numberButton = document.querySelectorAll('button ')

buttons.forEach(btn => {

    btn.addEventListener('click',mainFunction);

});


function mainFunction(){
    if(this.innerText === "Ac"){

        mainDisplay.innerText = "0";
        prevDisplay.innerText = '';
        mainDisplay.style.animation = 'main  0.4s ease';
        prevDisplay.style.animation = 'previous 0.4s ease';

    }else if (this.innerText === "Del") {

        prevDisplay.innerText =
        prevDisplay
        .textContent
        .slice(0,prevDisplay.textContent.length - 1);

    } else if (this.innerText ==="=") {

        mainDisplay.innerText = eval(prevDisplay.textContent);
        mainDisplay.style.animation = 'main  0.4s ease forwards';
        prevDisplay.style.animation = 'previous 0.4s ease forwards';
        
    }else {

        prevDisplay.textContent += this.innerText;
    };

};



