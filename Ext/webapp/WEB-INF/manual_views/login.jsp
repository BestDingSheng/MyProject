<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<spring:message code="OSS" var="app_name" htmlEscape="false" />
<title><spring:message code="welcome_h3" arguments="${app_name}" /></title>

<spring:url value="/resources/styles/login.css" var="login_css_url" />
<link rel="stylesheet" type="text/css" href="${login_css_url}" />

<spring:url value="/resources/js/jquery.js" var="jquery_js_url" />
<spring:url value="/resources/js/jquery.slides.min.js" var="jquery_slides_min_js_url" />
<script src="${jquery_js_url}" type="text/javascript"></script>
<script src="${jquery_slides_min_js_url}" type="text/javascript"></script>

<spring:url value="/resources/images/favicon.ico" var="favicon" />
<link rel="shortcut icon" href="${favicon}"/>
<link rel="bookmark" href="${favicon}"/>

<spring:url value="/resources/j_spring_security_check" var="form_url"/>

<script>
    $(function() {
      $('#slides2').slidesjs({
        width: 1000,
        height:395,
        navigation: false,
        start:1,
        play: {
          auto: true
        }
      });
    });
</script>
</head>
<body>
<div class="header">
  <div class="header_logo"><img src="images/login/logo.png"></div>
  <div class="header_right"><a class="login" id="Login_btn"><img src="images/login/login.png"></a></div>
  <div class="header_right">
  	<c:if test="${not empty param.login_error}">
		<span style="color:red; font-size:18px; margin-right:20px; height:40px; line-height:40px;">• <spring:message code="security_login_unsuccessful"/></span>
	</c:if>
  </div>
</div>
<div class="slide">
  <div id="slides2">
    <img src="images/login/page1.jpg" alt="">
    <img src="images/login/page2.jpg" alt="">  
         
  </div>
</div>
<div class="footer"><img src="images/login/footer.png"></div>

<form method="POST" action="${form_url}" name="f" id="login_form">
<div style="display: none;" id="LoginBox">
    <div class="row1">
        <img src="images/login/userlogin.png">
        <a style="color:rgb(255, 255, 255);" href="javascript:void(0)" title="关闭窗口" class="close_btn" id="closeBtn">×</a>
    </div>
    <div class="row">
        <img src="images/login/user.png">
        <input type="text" name="j_username" id="j_username" class="login_input"/>
    </div>
    <div class="row">
        <img src="images/login/pwd.png">
        <input type="password" name="j_password" id="j_password" class="login_input"/>
    </div>
    <div class="row">
        <a id="loginbtn" class="loginbtn"><img src="images/login/login_btn.png"></a>
    </div>
</div>
</form>

<script type="text/javascript">
var login=function(){
    var j_username = $("#j_username").val();
    var j_password = $("#j_password").val();
    if (j_username == "" || j_username == undefined || j_username == null || j_password == "" || j_password == undefined || j_password == null) {
        alert("请输入用户名或密码");
        return;
    }
    $("#login_form").submit();
  }
  $(function ($) {
    //弹出登录
    $("#Login_btn").hover(function () {
      $(this).stop().animate({
        opacity: '0.5'
      }, 600);
    }, function () {
      $(this).stop().animate({
        opacity: '0.6'
      }, 1000);
    }).on('click', function () {
      $("body").append("<div id='mask'></div>");
      $("#mask").addClass("mask").fadeIn("slow");
      $("#LoginBox").fadeIn("slow");
    });
    //
    //按钮的透明度
    $("#loginbtn").hover(function () {
      $(this).stop().animate({
        opacity: '1'
      }, 600);
    }, function () {
      $(this).stop().animate({
        opacity: '1'
      }, 1000);
    });
    $("#loginbtn").on('click', login);
    $(function(){
    	document.onkeydown = function(e){ 
    	    var ev = document.all ? window.event : e;
    	    if(ev.keyCode==13) {
    	           login();
    	     }
    	}
    	}); 
    //关闭
    $(".close_btn").hover(function () { $(this).css({ color: '#ccc' }) }, function () { $(this).css({ color: '#fff' }) }).on('click', function () {
      $("#LoginBox").fadeOut("fast");
      $("#mask").css({ display: 'none' });
    });
  });
  </script>

</body>
</html>