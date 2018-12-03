/**
 * Created by xuerui on 2018/8/29.
 */
window.onload=function() {
//表单1普通登录1
var form1=document.getElementById("form1");//表单1
var date1=document.getElementById("date1");//密码1
var phone1=document.getElementById("phone1");//手机邮箱1
var btn1=document.getElementById("btn1");//提交按钮
var lable = document.getElementById("lable");//验证码
var myDiv = document.createElement("div");  //插入内容
//表单手机登录2
var form2=document.getElementById("form2");//表单1
var phone2=document.getElementById("phone2");//手机邮箱1
var btn2=document.getElementById("btn2");//提交按钮
var more = document.getElementById("more");//动态密码
var row5=document.getElementsByClassName("section-right-form1-row5")[0];//插入位置
var row4=document.getElementsByClassName("section-right-form2-row4")[0];//插入位置
var falg=false;
//注册普通登录1
btn1.onclick=function(){
    form1.onsubmit=function(){
        return false;
    };
    phone1.onblur(); //手机用户名
    date1.onblur(); //密码
    lable.onblur();  //验证码
};
  if(falg){
     form.submit();
     btn1.style.backgroundColor="red";
}
//手机/邮箱号码验证
phone1.onblur=function(){
    if(this.value==""){
        myDiv.style.display = "block";
        myDiv.innerHTML="请输入注册手机或邮箱";
        myDiv.className="active1";
        form1.insertBefore(myDiv,row5);
        btn1.style.margin="20px 0";
        falg=false;
    }else{
        var reg = /^1[358]\d{9}$/;
        var reg2= /^\w+[@]\w+(\.[a-z]{2,3}){1,2}$/;
        if(reg.test(this.value)||reg2.test(this.value)){
            myDiv .innerHTML="正确";
            myDiv.className="active1";
            form1.insertBefore(myDiv,row5);
            myDiv.style.display = "none";
            flag = true;
        }else{
            myDiv.style.display = "block";
            myDiv.innerHTML="请输入有效的手机号码或邮箱";
            myDiv.className="active1";
            form1.insertBefore(myDiv,row5);
            btn1.style.margin="20px 0";
            flag = false;
        }
    }
};
//密码
date1.onblur=function(){
    //非空验证
    if(this.value == ""){
        myDiv.style.display = "block";
        myDiv.innerHTML="请输入密码";
        myDiv.className="active1";
        form1.insertBefore(myDiv,row5);
        btn1.style.margin="20px 0";
        falg=false;
    }else{
        var reg = /^[a-zA-Z0-9]{6,16}$/;
        if(reg.test(this.value)){
            myDiv .innerHTML="正确";
            myDiv.className="active1";
            form1.insertBefore(myDiv,row5);
            myDiv.style.display = "none";
            flag = true;
        }else{
            myDiv.style.display = "block";
            myDiv.innerHTML="密码错误";
            myDiv.className="active1";
            form1.insertBefore(myDiv,row5);
            btn1.style.margin="20px 0";
            flag = false;
        }
    }
};
//验证码
lable.onblur=function(){
    //非空验证
    if(this.value == ""){
        myDiv.style.display = "block";
        myDiv.innerHTML="请填写图片中的验证码";
        myDiv.className="active1";
        form1.insertBefore(myDiv,row5);
        btn1.style.margin="20px 0";
        falg=false;
    }else{
        var reg = /^[a-zA-Z0-9]{4}$/;
        if(reg.test(this.value)){
            myDiv .innerHTML="正确";
            myDiv.className="active1";
            form1.insertBefore(myDiv,row5);
            myDiv.style.display = "none";
            flag = true;
        }else{
            myDiv.style.display = "block";
            myDiv.innerHTML="请输入正确的验证码";
            myDiv.className="active1";
            form1.insertBefore(myDiv,row5);
            btn1.style.margin="20px 0";
            flag = false;
        }
    }
};

//  手机动态密码登录
btn2.onclick=function(){
    form2.onsubmit=function(){
        return false;
    };
    phone2.onblur(); //手机用户名
    more.onblur();  //动态密码
};
     if(falg){
         form2.submit();
         btn2.style.backgroundColor="red";

}
//手机/邮箱号码验证
phone2.onblur=function(){
    if(this.value==""){
        myDiv.style.display = "block";
        console.log(myDiv,row4);
        myDiv.innerHTML="请输入注册手机号码";
        myDiv.className="active1";
        form2.insertBefore(myDiv,row4);
        btn2.style.margin="20px 0";
        falg=false;
    }else{
        var reg = /^1[358]\d{9}$/;
        if(reg.test(this.value)){
            myDiv .innerHTML="正确";
            myDiv.className="active1";
            form2.insertBefore(myDiv,row4);
            myDiv.style.display = "none";
            flag = true;
        }else{
            myDiv.style.display = "block";
            myDiv.innerHTML="请输入有效的手机号码";
            myDiv.className="active1";
            form2.insertBefore(myDiv,row4);
            btn2.style.margin="20px 0";
            flag = false;
        }
    }
};
//动态密码
more.onblur=function(){
    //非空验证
    if(this.value == ""){
        myDiv.style.display = "block";
        myDiv.innerHTML="请输入动态密码";
        myDiv.className="active1";
        form2.insertBefore(myDiv,row4);
        btn2.style.margin="20px 0";
        falg=false;
    }else{
        var reg = /^[0-9]{4}$/;
        if(reg.test(this.value)){
            myDiv .innerHTML="正确";
            myDiv.className="active1";
            form2.insertBefore(myDiv,row4);
            myDiv.style.display = "none";
            flag = true;
        }else{
            myDiv.style.display = "block";
            myDiv.innerHTML="请输入正确的动态密码";
            myDiv.className="active1";
            form2.insertBefore(myDiv,row4);
            btn2.style.margin="20px 0";
            flag = false;
        }
    }
};
//菜单栏显示隐藏
$(function(){
    //手机登录菜单
    $("#radio2").click(function(){
        $(".section-right-form1").hide();//隐藏
        $("#con1").css("font-size","12px");//第一个字体
        $(".section-right-form2").show();//显示
        $("#con2").css("font-size","16px");//第二个字体
    })
    //普通登录菜单
    $("#radio1").click(function(){
        $(".section-right-form2").hide();//隐藏
        $("#con2").css("font-size","12px");//第二个字体
        $(".section-right-form1").show();//显示
        $("#con1").css("font-size","16px");//第一个字体
    });
    //二维码
    $("#section-right-img1").click(function(){
        $(".section-right-form3").show();//显示

    });
    $("#section-right-form3-img1").click(function(){
        $(".section-right-form3").hide();//显示
    })
    //input
    $(function(){
        if(!placeholderSupport()){   // 判断浏览器是否支持 placeholder
            $('[placeholder]').focus(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                    input.removeClass('placeholder');
                }
            }).blur(function() {
                var input = $(this);
                if (input.val() == '' || input.val() == input.attr('placeholder')) {
                    input.addClass('placeholder');
                    input.val(input.attr('placeholder'));
                }
            }).blur();
        };
    })
    function placeholderSupport() {
        return 'placeholder' in document.createElement('input');
    }
});

//获取激活码
    var link = document.getElementById("link");  //激活码

    console.log(link)
    var clock = '';
    var nums = 6;
    //激活码1
    link.onclick=function() {
        link.disabled = true; //将按钮置为不可点击
        link.value = nums+'秒后可重新获取';
        clock = setInterval(doLoop, 1000); //一秒执行一次
    };
    function doLoop(){
        nums--;
        if(nums > 0){
            link.value = nums+'秒后可重新获取';
        }else{
            clearInterval(clock); //清除js定时器
            link.disabled = false;
            link.value = '点击获取激活码';
            nums = 6; //重置时间
        }
    }
};

