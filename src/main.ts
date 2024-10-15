import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
//引入路由
import router from './router'

const app = createApp(App)
 
app.use(ElementPlus, {
    locale: zhCn,
})

//svg插件需要的配置代码
import 'virtual:svg-icons-register'
//引入自定义插件对象：注册整个项目的全局组件
import globalComponent from '@/components'
//安装自定义插件
app.use(globalComponent)
//引入模版的全局的样式
import '@/styles/index.scss'
//注册模版路由
app.use(router)

app.mount('#app')
