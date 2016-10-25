//选择城市区域
function setcityPicker(pop){
	var cityData = localStorage.getItem("city_list");
	if(cityData == null){
		$.ajax({
			type:"get",
			url:webRoot+"/app/commonpicker/cityAndDistrictList",
			needValidateLogin: false,
			success : function(data){
				pop.setData(data);
				localStorage.setItem("city_list",JSON.stringify(data));
			}
		});
	}else{
		pop.setData(JSON.parse(cityData));
	}
}

//选择汽车品牌型号
function setbrandPicker(popPicker){
	var brandData = localStorage.getItem("brand_picker_list");
	if(brandData==null){
		$.ajax({
		type:"get",
		url:webRoot+"/app/commonpicker/carBrandAndmodelList",
		needValidateLogin: false,
		success : function(jsonData){
			popPicker.setData(jsonData);
			localStorage.setItem("brand_picker_list",JSON.stringify(jsonData));
		}
		});	
	}else{
		popPicker.setData(JSON.parse(brandData));
	}
}





