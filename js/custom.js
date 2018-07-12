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