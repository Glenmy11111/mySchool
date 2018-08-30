$(function(){
	// 获得焦点时发生的情况
	$("table input").on('focus',function(){

		$(this).next().text("").hide();																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																												
	})

	// 失去焦点时发生的情况
	$("#username").on('blur',function(e){
		var current=$(e.target);//当前元素
		var value=current.val();
		mutFun(current,value,"username","用户名不能为空","输入的用户名不符合规范");
		
	})
	$("#email").on('blur',function(e){
		var current=$(e.target);//当前元素
		var value=current.val();
		mutFun(current,value,"email","邮箱不能为空","输入的邮箱格式不符合规范")

	})
	$("#number").on('blur',function(e){
		var current=$(e.target);//当前元素
		var value=current.val();
      mutFun(current,value,"number","联系方式不能为空","输入的号码不符合规范")
		
	})
	$("#age").on('blur',function(e){
		var current=$(e.target);
		var value=current.val();
		mutFun(current,value,"age","输入你的年龄","您输入的年龄格式错误");
	})

	//封装重复的代码
	function mutFun(current,value,name,text1,text2){
		if(value==""){
			current.next().text(text1).show();
		}else if(checkFun(name,value)){
			current.next().text("").hide();
		}else{
			current.next().text(text2).show();
		}
	}


// 用于描述各项的正则表达式
  function checkFun(name,value){
  	var filter;
  	if(name==""){
  		return true;
  	}
  switch(name){
    case "username":
       filter=/^[1-9 a-z A-Z][0-9 a-z A-Z]{1,9}$/;
       break;
       case "number":
       filter=/^[1-9][0-9]{6,10}$/;
       break;
       case "email":
       filter=/^[0-9 a-z A-Z]{3,}(@[a-z A-Z]{2,}\.com)$/;
       break;
       case "age":
       filter=/^[0]([1-9]){1,3}$/;
   }
   if(filter.test(value)){
   	return true;
   }
   else{
   	return false;
   }
  }
  $("input[type='submit']").bind('click',function(){
  	if($("#username").val()==""||$("#number").val()==""||$("#email").val()==""){
        alert("填入的信息不全，无法提交");
        return false;
  	}
  	else{
  		alert("username="+$("#username").val()+";number="+$("#number").val()+";email="
  		+$("#email").val()+";age="+$("#age").val()+";address="+$("#address").val());
  	    return true;
  	}
  	
  })
});