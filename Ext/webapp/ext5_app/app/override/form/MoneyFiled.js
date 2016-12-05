Ext.define('Evcorp.override.form.MoneyFiled', {
    override: 'Ext.form.field.Number',
    alias: 'widget.moneyfield',
    trulyValue:null,
    isMoney:false
//    setValue: function(v) {
//    	if(isNaN(v)||null==v){
//    		this.setRawValue('');
//            this.trulyValue = null;
//    	}else{
//    		if(this.isMoney){
//    			console.log(v);
//        		this.setRawValue(v.toFixed(2));
////    			this.setRawValue(fmoney(v,2));
//    		}else{
//    			this.setRawValue(v);
//    		}
//    		 this.trulyValue = v;
//    	}
//    },
//    getFormatValue:function(v){
//        return v.toFixed(2);
//    },
//    getSubmitValue: function() {
//        return this.trulyValue;
//    },
//    parseValue: function(value){
//        value = parseFloat(String(value).replace(this.decimalSeparator, ".").replace(/,/g, ""));
//        return isNaN(value) ? '' : value.toFixed(2);
//    }
});
function fmoney(s, n)   
{   
   n = n > 0 && n <= 20 ? n : 2;   
   s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";   
   var l = s.split(".")[0].split("").reverse(),   
   r = s.split(".")[1];   
   t = "";   
   for(i = 0; i < l.length; i ++ )   
   {   
      t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");   
   }   
   return t.split("").reverse().join("") + "." + r;   
} 