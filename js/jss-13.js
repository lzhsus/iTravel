/**
 * Created by xuerui on 2018/8/29.
 */
window.onload=function() {
//   手机注册
    var form1 = document.getElementById("form1");//表单1
    var form2 = document.getElementById("form2");//表单2
    var btn1 = document.getElementById("btn1");//按钮1
    var btn2 = document.getElementById("btn2"); //按钮2
    var contact = document.getElementById("contact");  //国家1
    var phone = document.getElementById("phone");  //手机1
    var date1 = document.getElementById("date1");  //密码1
//var user1=document.getElementById("user1");//验证1
//   邮箱注册
    var email = document.getElementById("email");  //邮箱2
    var date2 = document.getElementById("date2");//密码2
//var user2=document.getElementById("user2");//验证1

    var falg = false;
//   手机注册
    btn1.onclick = function () {
        form1.onsubmit = function () {
            return false;
        };
        contact.onblur();
        phone.onblur();
        date1.onblur();
    };
    if (falg) {
        form.submit();
    }
//国家验证
    contact.onblur = function () {
        if (this.value == "") {
            this.nextElementSibling.innerHTML = "国家不能为空";
            this.nextElementSibling.style.color = "#fa6363";
            this.nextElementSibling.className = "active1";
            falg = false;
        } else {
            this.nextElementSibling.className = "active1 off";
            this.nextElementSibling.style.color = "transparent";
            flag = true;
        }
    }
//手机号码验证
    phone.onblur = function () {
        if (this.value == "") {
            this.nextElementSibling.innerHTML = "手机号码不能为空";
            this.nextElementSibling.style.color = "#fa6363";
            this.nextElementSibling.className = "active1";
            falg = false;
        } else {
            var reg = /^1[358]\d{9}$/;
            if (reg.test(this.value)) {
                this.nextElementSibling.className = "active1 off";
                this.nextElementSibling.style.color = "transparent";
                flag = true;
            } else {
                this.nextElementSibling.innerHTML = "手机必须为11位的数字";
                this.nextElementSibling.className = "active1";
                flag = false;
            }
        }
    }
//密码
    date1.onblur = function () {
        //非空验证
        if (this.value == "") {
            this.nextElementSibling.innerHTML = "密码不能为空";
            this.nextElementSibling.style.color = "#fa6363";
            this.nextElementSibling.className = "active1";
            flag = false;
        } else {
            var reg = /^[a-zA-Z0-9]{6,16}$/;
            console.log(reg.test(this.value));
            if (reg.test(this.value)) {
                this.nextElementSibling.className = "active1 off";
                this.nextElementSibling.style.color = "transparent";
                flag = true;
            } else {
                this.nextElementSibling.innerHTML = "密码必须为6-16位的字符数字";
                this.nextElementSibling.style.color = "#fa6363";
                this.nextElementSibling.className = "active1";
                flag = false;
            }
        }
    }
//   邮箱注册
    btn2.onclick = function () {
        form2.onsubmit = function () {
            return false;
        };
        email.onblur();//邮箱
        date2.onblur();//密码
    };
    if (falg) {
        form2.submit();
    }
//邮箱验证
    email.onblur = function () {
        //非空验证
        if (this.value == "") {
            this.nextElementSibling.innerHTML = "邮箱不能为空";
            this.nextElementSibling.className = "active1";
            flag = false;
        } else {
            var reg = /^\w+[@]\w+(\.[a-z]{2,3}){1,2}$/;
            if (reg.test(this.value)) {
                this.nextElementSibling.style.color = "transparent";
                this.nextElementSibling.className = "active1 off";
                flag = true;
            } else {
                this.nextElementSibling.innerHTML = "邮箱必须包含@和.";
                this.nextElementSibling.className = "active1";
                flag = false;
            }
        }
    };
//密码
    date2.onblur = function () {
        //非空验证
        if (this.value == "") {
            this.nextElementSibling.innerHTML = "密码不能为空";
            this.nextElementSibling.style.color = "#fa6363";
            this.nextElementSibling.className = "active1";
            flag = false;
        } else {
            var reg = /^[a-zA-Z0-9]{6,16}$/;
            if (reg.test(this.value)) {
                this.nextElementSibling.className = "active1 off";
                this.nextElementSibling.style.color = "transparent";
                flag = true;
            } else {
                this.nextElementSibling.innerHTML = "密码必须为6-16位的字符数字";
                this.nextElementSibling.style.color = "#fa6363";
                this.nextElementSibling.className = "active1";
                flag = false;
            }
        }
    }


    $(function () {
        //手机注册菜单
        $("#radio2").click(function () {
            $("#form1").hide();//隐藏
            $("#con1").css("font-size", "12px");//第一个字体
            $("#form2").show();//显示
            $("#con2").css("font-size", "16px");//第二个字体
        })
        //普通注册菜单
        $("#radio1").click(function () {
            $("#form2").hide();//隐藏
            $("#con2").css("font-size", "12px");//第二个字体
            $("#form1").show();//显示
            $("#con1").css("font-size", "16px");//第一个字体
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



    //})
//获取激活码

    var link1 = document.getElementById("link1");  //激活码1
    var link2 = document.getElementById("link2");//激活码2
    console.log(link2)
    var clock1 = '';
    var clock2 = '';
    var nums = 6;
    //激活码1
    link1.onclick = function () {
        link1.disabled = true; //将按钮置为不可点击
        link1.value = nums + '秒后可重新获取';
        clock1 = setInterval(doLoop, 1000); //一秒执行一次
    }
    //激活码2
    link2.onclick = function () {
        console.log(1)
        link2.disabled = true; //将按钮置为不可点击
        link2.value = nums + '秒后可重新获取';
        clock2 = setInterval(doLoop2, 1000); //一秒执行一次
        console.log(link2)
    }
    function doLoop() {
        nums--;
        if (nums > 0) {
            link1.value = nums + '秒后可重新获取';
        } else {
            clearInterval(clock1); //清除js定时器
            link1.disabled = false;
            link1.value = '点击获取激活码';
            nums = 6; //重置时间
        }
    }
    function doLoop2() {
        nums--;
        if (nums > 0) {
            link2.value = nums + '秒后可重新获取';
        } else {
            clearInterval(clock2); //清除js定时器
            link2.disabled = false;
            link2.value = '点击获取激活码';
            nums = 6; //重置时间
        }
    }

}
