<h2>仿卖座电影的一个简易小网站页面</h2>
<div>
<img src="screenshots/nowplaying.png" width="30%" />
<img src="screenshots/comingsoon.png" width="29%" />
</div>

数据来源于截取的卖座电影的接口

头部导航栏使用二级路由进行跳转

“正在热映”组件下的电影数据由动态路由跳转到电影详情中

底部导航栏使用一级路由进行跳转

“即将上映”组件下的电影数据由Vuex的异步请求进行获取
