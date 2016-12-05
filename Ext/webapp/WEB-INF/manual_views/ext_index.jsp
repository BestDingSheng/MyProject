<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<spring:url value="/resources/ext5_app/app.js" var="app_js" />
<spring:url value="/resources/j_spring_security_logout" var="logout" />
<script src="${app_js}"  type="text/javascript"></script>
<script type="text/javascript">
<!--
 var loginName = '<sec:authentication property="principal.username" />';
//-->
</script>
<div style="display:none;">
        <!-- Start page content -->
        <div id="start-div">
            <div style="margin-left:100px;">
                <h2>Welcome!</h2>
                <p>this is simple demo!</p>
            </div>
        </div>
        
        <div id="card-tabs-details">
            <div style="margin-left:100px;">
                <h2>user info</h2>
                <p>maintain user info</p>
            </div>
        </div>
 </div> 