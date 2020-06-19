window.onload = function(){
    setheight();
    var url = decodeURI(location.search)  ;
    // console.log(url);
    var uname = url.split('&')[0].split('=')[1];
    // console.log(uname);
    var wel = document.querySelector('.content h1');
    // console.log(wel);
    if(uname == undefined){
        uname = 'Edward';
    }
    wel.innerHTML = "Welcome to " + uname + "'s Blog";
    
}