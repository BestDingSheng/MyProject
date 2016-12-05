Ext.define('Evcorp.override.form.Basic', {
    override: 'Ext.form.Basic',
   	
    getParamForQuery : function(){
    	var fields  = this.getFields();
    	var param = {};
    	var exps= [];
//    	Date.prototype.toJSON = function(){
//    		return this.getTime();
//    	}
    	fields.each(function(item,index){
    		var queryExp = {
									"propertyName" : item.getName(),
									"operator" : item.getOperator()
						}
			if(item.getOrder() && item.getOrder()>0){
				queryExp.order = item.getOrder();
				queryExp.orderDirection=item.getOrderDirection();
			}
			if(item.getValue() instanceof Date){
				queryExp.valueDate = item.getValue();
			}else if(item.getValue() instanceof Number){
				queryExp.valueNum = item.getValue();
			}
			else if(item.getValue() instanceof Boolean){
				queryExp.valueBoolean = item.getValue();
			}
			else if(item.getValue() instanceof String){
				queryExp.valueStr = item.getValue();
			}else{
				queryExp.value =  item.getValue();
			}
    		exps[index] = queryExp;

//    		alert(item.getName()+" "+
//    		item.getOperator()+" "+
//    		item.getOrderDirection()+" "+
//    		item.getValue());
//    		if(item.getValue() instanceof Date){
//    			alert(item.getValue().toJSON());
//    			alert("GMT : "+item.getValue().toGMTString());		
//    			alert("UTC : "+item.getValue().toUTCString());
//    		}
    	});
    	param.expressions = exps;
    	alert(JSON.stringify(param));
    	param = {"parametersJson":JSON.stringify(param)};
    	return param;
    }
    
    

});