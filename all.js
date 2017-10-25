window.onscroll = function () {
    if(window.pageYOffset > 0){
        document.getElementById('header').style.position = 'fixed';
        document.getElementById('header').style.width = '100%';
        document.getElementById('header').style.backgroundColor = '#fff';
        document.getElementsByTagName('img')[0].style.height = '60px';
        document.getElementsByTagName('img')[0].style.width = '180px';
        var links = document.getElementsByClassName('header-links');
        for(var i = 0 ; i < links.length;i++){
                links[i].style.height = '40px';
                links[i].style.lineHeight = '40px';
                links[i].style.color = 'black';
        }
        var links = document.getElementsByClassName('a-home');
            links[0].style.height = '40px';
            links[0].style.lineHeight = '40px';
            links[0].style.color = 'black';
    }
    else{
        document.getElementById('header').style.position = 'absolute';
        document.getElementById('header').style.width = '100%';
        document.getElementById('header').style.backgroundColor ='';
        document.getElementById('header').style.opacity = '1';
        document.getElementsByTagName('img')[0].style.height = '70px';
        document.getElementsByTagName('img')[0].style.width = '198px';
        var links = document.getElementsByClassName('header-links');
        for(var i = 0 ; i < links.length;i++){
            links[i].style.height = '50px';
            links[i].style.lineHeight = '50px';
            links[i].style.color = '#fff';
        }
        var links = document.getElementsByClassName('a-home');
        links[0].style.height = '50px';
        links[0].style.lineHeight = '50px';
        links[0].style.color = '#fff';
    }

};