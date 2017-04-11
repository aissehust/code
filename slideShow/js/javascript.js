/**
 * Created by qimengmeng on 17/4/11.
 */
var activity=1;
function clickEvent(srcObject, targetObject,LeftAndTops) {
    var i=10;

    srcObject.on("click",function () {
//            var top=srcObject.offset().top;
//            var left=srcObject.offset().left;

        if(targetObject.attr('class')==="div1"){
            activity=1;
        }else if(targetObject.attr('class')==="div2"){
            activity=2;
        }else if(targetObject.attr('class')==="div3"){
            activity=3;
        }
        var LeftAndTop=getInitLeftAndTop(srcObject.attr('class'),LeftAndTops);
        srcObject.animate({
            "width":200+"px",
            "height":200+"px",
            "font-size":12+"px",
            "z-index":i+=1,
            "top":LeftAndTop.top,
            "left":LeftAndTop.left
        },1000);
//            $("html,body").animate({
//                "scrollTop":650+"px",
//                "scrollLeft":200+"px"
//            },800);
        targetObject.animate({
            "width":400+"px",
            "height":400+"px",
            "font-size":24+"px",
            "top":400+"px",
            "left":400+"px",
            "z-index":i+=2
        },1000);
        $("img").animate({
            "width":30+"px",
            "height":30+"px"
        },1000);
    })
}
//div 的变换
function divChange(srcObject, targetObject,LeftAndTops){
    var i=10;
    if(targetObject.attr('class')==="div1"){
        activity=1;
    }else if(targetObject.attr('class')==="div2"){
        activity=2;
    }else if(targetObject.attr('class')==="div3"){
        activity=3;
    }
    var LeftAndTop=getInitLeftAndTop(srcObject.attr('class'),LeftAndTops);
    srcObject.animate({
        "width":200+"px",
        "height":200+"px",
        "font-size":12+"px",
        "z-index":i+=1,
        "top":LeftAndTop.top,
        "left":LeftAndTop.left
    },1000);

    targetObject.animate({
        "width":400+"px",
        "height":400+"px",
        "font-size":24+"px",
        "top":400+"px",
        "left":400+"px",
        "z-index":i+=2

    },1000);
    $("img").animate({
        "width":30+"px",
        "height":30+"px"
    },1000);
}
function getTopLeft(targetObject) {
    var Top=targetObject.offset().top;
    var Left=targetObject.offset().left;

}
//获取div 初始时候的 left 和top
function getInitLeftAndTop(className,LeftAndTops){

    var LeftAndTop = {};

    if(className==="div1"){
        LeftAndTop.top=LeftAndTops[0];
        LeftAndTop.left=LeftAndTops[1];

    }else if(className==="div2"){
        LeftAndTop.top=LeftAndTops[2];
        LeftAndTop.left=LeftAndTops[3];

    }else if(className==="div3"){
        LeftAndTop.top=LeftAndTops[4];
        LeftAndTop.left=LeftAndTops[5];
    }
    return LeftAndTop;
}
function divClick(id){
    alert("div"+id);
    $("div"+id).trigger("click");
}
$(function () {
    var LeftAndTops=new Array();
    var div1=$(".div1");
    var div2=$(".div2");
    var div3=$(".div3");
    LeftAndTops[0]=div1.css("top");
    LeftAndTops[1]=div1.css("left");
    LeftAndTops[2]=div2.css("top");
    LeftAndTops[3]=div2.css("left");
    LeftAndTops[4]=div3.css("top");
    LeftAndTops[5]=div3.css("left");


    clickEvent(div1,div2,LeftAndTops);
    clickEvent(div2,div3,LeftAndTops);
    clickEvent(div3,div1,LeftAndTops);


    // 添加键盘事件
    $(document).keydown(function(event){
        event.preventDefault();
        switch(event.keyCode) {
            case 39:
            case 13:
            case 40:
//                    alert("down");

                switch(activity){
                    case 1:
                        divChange(div1,div2,LeftAndTops);
                        break;
                    case 2:
                        divChange(div2,div3,LeftAndTops);
                        break;
                    case 3:
                        divChange(div3,div1,LeftAndTops);
                        break;
                }
                break;
            case 37:
            case 38:
//                    alert("up");
                switch(activity){
                    case 1:
                        divChange(div1,div3,LeftAndTops);
                        break;
                    case 2:
                        divChange(div2,div1,LeftAndTops);
                        break;
                    case 3:
                        divChange(div3,div2,LeftAndTops);
                        break;
                }
                break;
        }
        return false;
    });

//            $("img").animate({
//                "width":400+"px",
//                "height":200+"px"
//            },1000)
//        })
})