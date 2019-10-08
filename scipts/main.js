//设置图片切换
let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc =myImage.getAttribute('src');
    if(mySrc==='images/test.jpg'){
        myImage.setAttribute('src','images/test_2.png');
    }else{
        myImage.setAttribute('src','images/test.jpg')
    }
}
//设置个性化欢迎信息
//获取新按钮和标题的引用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
//个性化欢迎信息设置函数
function setUsername(){
    let myName = prompt('请输入你的名字：');
    if(!myName||myName === null){
        setUsername();
    }else{
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Mozilla酷毙了,'+myName;
    }
}
//初始化代码：在页面初次读取时进行构造工作：
if(!localStorage.getItem('name')){
    setUsername();
}else{
    let storeName = localStorage.getItem('name');
    myHeading.textContent ='Mozilla 酷毙了,'+storeName;
}
//为按钮设置onclick事件处理器：
myButton.onclick = function () {
    setUsername();
  }


// 我们将 <script> 放在HTML文件的底部附近的原因是
// 浏览器会按照代码在文件中的顺序加载 HTML。
// 如果先加载的 JavaScript 期望修改其下方的 HTML，
// 那么它可能由于 HTML 尚未被加载而失效。因此，将 
// JavaScript 代码放在 HTML页面的底部附近通常是最好的策略。
/*let myVariable;
myVariable='chen';
document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
}*/
