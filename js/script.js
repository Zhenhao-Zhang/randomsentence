document.addEventListener('DOMContentLoaded', function() {
    var images = ['randomsentence/img/1.jpg'];
    
    
    var randomIndex = Math.floor(Math.random() * images.length);
    var selectedImage = images[randomIndex];
    
    document.getElementById('randomImageBackground').style.backgroundImage = 'url(' + selectedImage + ')';
});
