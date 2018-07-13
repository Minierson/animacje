var box = document.querySelector('#box1');

box.addEventListener('mouseover', function(){
    var x = 0;
    for (var i = 0; i<=500; i++){
        x = i; 
        this.style.left = x + 'px';
    }
})

$('#box2').mouseover(function(){
    $(this).animate({left: '500px'}, 1000)
})

$('#svg').on('click', function(){
    TweenMax.to($(this), 2, {x:600, rotation:360, ease:Linear.easeNone})
})