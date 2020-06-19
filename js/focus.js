window.addEventListener('load', function() {
    // 1. 获取元素
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.clientWidth;
    console.log(focusWidth);
    var ul = focus.querySelector('ul');
    var num = 0;
    ul.appendChild(ul.children[0].cloneNode(true));
    // console.log(ul.children.length);  
    var flag = true;
    arrow_r.addEventListener('click', function(){
        if(flag == true){
            flag = false;
            if(num == ul.children.length - 1){
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function(){
                flag = true;
            });
        }
    }) 
    arrow_l.addEventListener('click', function(){       
        if(flag == true){
            flag = false;
            if(num == 0){
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';          
            }       
            num--;
            animate(ul, -num * focusWidth, function(){
                flag = true;
            });
        }
    })

}
)