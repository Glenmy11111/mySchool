// JavaScript Document
        var timer;
		window.onload=init;
		function init(){
			var obj=document.getElementById("l1");
			obj.style.background="orange";
            //初始化第一个标签背景颜色
			timer=window.setInterval("fn()",1000);
		}
		var i=1;
		function fn(){
          i++;
          if(i>6)
          {
          	i=1;
          }
			var obj=document.getElementById('images');
			//获取imges对象.注意：src是img才有的属性，故obj获取的是img对象
             obj.src="../images/"+i+".jpg"
			//修改img对象的src对象属性。因为图片命名有规律分别为123456.故添加一个变量来表示src中路径改变

			//修改li标签的背景颜色
			ys();
			var yanse=document.getElementById("l"+i);
			yanse.style.background="orange";
		}

		function imgstop(){
			window.clearInterval(timer);
		}
        function imgstart(){
        	window.clearInterval(timer);
        	timer =window.setInterval("fn()",1000);
        	//必须前面有个定时器名称，不然当鼠标离开一次会有一个定时器，多个定时器会让切换速度变快
        } //1、图片自动切换


        //2、让鼠标放在右侧的li数字上时，显示对应名称的图片
        function stop(n,m){
          i=n;
        	var obj=document.getElementById("images");
        	obj.src="../images/"+n+".jpg";
        
            ys();//调用清除颜色

        	window.clearInterval(timer);
        	m.style.background="orange";

        }

//两个参数间div中用逗号隔开。this表示当前对象，用于区分谁发生了mouseover，形参有了，对应位置必须写实参（m，n）


        //3、鼠标移开li标签后让图片继续自动切换
        function start(){

        	timer=window.setInterval("fn()",1000);
        //移开后图片顺序乱了，由于全局变量i和局部变量n冲突了。故需要协调彼此关系。故需要在2、中加入i=n；
        }
        //清除颜色样式
        function ys(){
         //把所有标签的背景色变成白色
         for (j=1;j<=6;j++){
	     var Allobj=document.getElementById("l"+j);
	     Allobj.style.background="white";
        }
  }