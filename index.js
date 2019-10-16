var box = document.getElementsByClassName('textCon')[0];
    function init(){
        var width=box.offsetWidth;
        var height= box.offsetHeight;
        var count=parseInt(width / 10);
        for(var i=0;i<count;i++){
            var ele=document.createElement('div');
            var size=ran(6,10);
            ele.className = 'item';
            ele.style.width=size+'px';
            ele.style.height=size+'px';
            ele.style.left=ran(0,100)+'%';
            ele.style.top=ran(20,80)+'%';
            ele.style.animationDelay = ran(0,30)/10+'s';//动画延迟
            box.appendChild(ele);
        }
    }
    init();
    // 随机数
    function ran(min,max){
        min = parseInt(min);
        max = parseInt(max);
        return Math.floor(Math.random()*(max-min)+min);
    }