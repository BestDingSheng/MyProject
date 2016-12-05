var preloadimg = function(arr,comp){
    var n = 0;
    var loadImg = function(src){
        var img = new Image();
        img.onload = function(){
            n++;
            var t = Math.round(n/l*100);
            $("#loading span").html(t+" %");
            if(n == l){
                comp();
            }
        };
        img.src = src;
    };
    if(typeof(arr) == "string"){
        var l = 1;
        var w = new loadImg(arr);
    }else{
        var l = arr.length;
        for(var i=0;i<l;i++){
            var w = new loadImg(arr[i]);
        }
    }
}

$(function(){
    var coverAnimate;
    var callbackNum;
    var win = false;
    var sub;
   
    function canvasTitle(id,name,size,callbackNum,newpic,status,speed){//status为1是png,2是jpg
        this.name = name;
        this.size = size;
        this.newpic = newpic;
        var num = newpic;
        var canvas = document.getElementById(id),
            ctx = canvas.getContext('2d');
        canvas.width = 1920;
        canvas.height = 364;
        var waterBg = new Image();
        function changeImg(){
            if(num >= size){
                $('#'+id).stop();
                return false;
            }
            num++;
            if(status==1){
                waterBg.src = 'bg/'+name+num+'.png';
            }else{
                waterBg.src = 'bg/'+name+num+'.png';
            }
            waterBg.onload = function(){
                ctx.clearRect(0,0,canvas.width,canvas.height);
                ctx.drawImage(waterBg,0,0,canvas.width,canvas.height);
            };
            setTimeout(changeImg,speed);
        }
        changeImg();
    }

    function cover(){
            var imgArr = ['bg/ev39.png'];

            for(var x=0;x<=39;x++){
                imgArr.push('bg/ev'+x+'.png');
                if(x==39){
                    preloadimg(imgArr,function(){
                        coverAnimate = new canvasTitle('newCanvas','ev',39,1,0,2,20);
                    });
                }
            }
        };
        setTimeout(function(){
            cover();
        },3000);
});
