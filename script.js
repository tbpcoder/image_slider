(function(){
    const pics = ["img1", "img2", "img3", "img4", "img5"]
    const btn = document.getElementsByClassName("btn")
    const img = document.getElementById('img-container')

    let counter = 0;

    for (let i = 0; i < btn.length; i++) {
        const b = btn[i];
        b.addEventListener('click', function(e){
            if(b.classList.contains('btn-left')){
                counter--;
            }else{
                counter++;
            }
            if(counter < 0){
                counter = pics.length - 1;
            }
            if(counter == pics.length){
                counter = 0;
            }
            img.style.backgroundImage = `url('images/${pics[counter]}.jpeg')`
        })
    }

})()