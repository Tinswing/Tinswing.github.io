## 购物车宣传（宣传页，活动页，h5宣传页）

#### 全屏切换效果
> 通过鼠标的滚轮 切换全屏页面
 - 监听鼠标滚轮 widow.onmousewheel
 - FullPage插件 (jQuery的插件)

  - 1.fullpage使用
	1.引入
	2.初始化

 - 2.动画
	1.jq
	2.原生js的animate
	3.css3的animation，transition
     + js是帧动画：使用定时器，每个一段时间，更改当前元素的状态
     + c3是补间动画：过渡动画transtion（起始状态，结束状态），只有状态发生改变产出动画 ##浏览器自己渲染，性能更好
     + animation: 多个节点来控制动画，移动端节约性能
     + js动画兼容性好，在支持h5c3的浏览器尽可能使用css3动画尤其是移动端开发
     + transition 组合写法(transition:all[所有元素] 3s[3s过渡] linear[匀速] 1s[延时1s])
                的拆分写法 transition-property:all;  transtion-duration:3s; transition-timing-function:linear; transition-delay:1s;
            1.定义动画序列