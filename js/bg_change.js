window.onload = function(){
    var imgs = document.querySelectorAll('img');
    var btn = document.querySelector('.signup_btn');
    var colors = ['linear-gradient(45deg,#33176b,#1afff8)','linear-gradient(45deg,rgb(62, 28, 122),#fcd3fd)','linear-gradient(45deg,rgb(22, 15, 47),rgb(255, 255, 221)'];
    for (var i = 0; i < imgs.length; i++) {
       imgs[i].index = i; 
    }
    for(var i = 0; i < imgs.length; i++) {				
        imgs[i].onclick = function() {
            document.body.style.backgroundImage = 'url(' + this.src + ')';
            for(var i = 0; i < imgs.length; i++) {
                btn.style.background = '';
            }
            btn.style.background = colors[this.index];
        }
    

    }
}