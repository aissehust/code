/**
 * Created by qimengmeng on 2017/5/2.
 */
var active=0;
var count=10;//move div 的数量
var curOldLeftAndTop={};
$(function(){
//alert("sss");
    init(1);

    $(".move").bind("click",function(){//点击事件
        var id=$(this).attr('id');
        var idNum=parseInt(id);
        if(idNum==active)
            changeToNext(id);

    } );
    $(document).keydown(function(event){// 添加键盘事件
        event.preventDefault();
        switch(event.keyCode) {
            case 39:
            case 13:
            case 40://down
                changeToNext(active+"");
                break;
            case 37:
            case 38://up
                changeToPre(active+"");
                break;
        }
        return false;
    });


});

function init (activeVlaue){//页面加载首先出现div
    active=activeVlaue;
    curOldLeftAndTop.top=$("#"+active).css("top");
    curOldLeftAndTop.left=$("#"+active).css("left");
    $("#"+active).animate({
        "width":500+"px",
        "height":500+"px",
        "font-size":24+"px",
        "top":400+"px",
        "left":200+"px",
        "z-index":2
    },1000);
}

function changeToNext(id){//后面的出现
    var cur=parseInt(id);
    active=(cur+1)%count==0?count:(cur+1)%count;
    //当前回原位
    $("#"+cur).animate({
        "width":200+"px",
        "height":200+"px",
        "font-size":12+"px",
        "top":curOldLeftAndTop.top,
        "left":curOldLeftAndTop.left,
        "z-index":0
    },1000);
    //下一个出现
    curOldLeftAndTop.top=$("#"+active).css("top");
    curOldLeftAndTop.left=$("#"+active).css("left");
    $("#"+active).animate({
        "width":400+"px",
        "height":400+"px",
        "font-size":24+"px",
        "top":500+"px",
        "left":500+"px",
        "z-index":2
    },1000);

}

function changeToPre(id){//前面的出现
    var cur=parseInt(id);
    active=(cur-1)%count==0?count:(cur-1)%count;
    //当前回原位
    $("#"+cur).animate({
        "width":200+"px",
        "height":200+"px",
        "font-size":12+"px",
        "top":curOldLeftAndTop.top,
        "left":curOldLeftAndTop.left,
        "z-index":0
    },1000);
    //前一个出现
    curOldLeftAndTop.top=$("#"+active).css("top");
    curOldLeftAndTop.left=$("#"+active).css("left");
    $("#"+active).animate({
        "width":400+"px",
        "height":400+"px",
        "font-size":24+"px",
        "top":500+"px",
        "left":500+"px",
        "z-index":2
    },1000);

}
