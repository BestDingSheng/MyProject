<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div>
    <img src="images/${fileName}" style="position:absolute; left:0px; top:0px;" onclick="showBigImg();">  
    <!-- 给执行的节点加框 -->  
    <c:forEach items="${coordinateObjs}" var="coordinateObj">
    	<div style="position:absolute; border:2px solid red;left:${coordinateObj.x-1}px;top:${coordinateObj.y-1}px;width:${coordinateObj.width}px;height:${coordinateObj.height}px;"></div>
    </c:forEach> 
</div>  
