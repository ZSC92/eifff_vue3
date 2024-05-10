import { createApp } from 'vue'
import App from '@/App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'virtual:svg-icons-register'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
  // 国际化配置
})

// 引入自定义插件对象：注册整个项目全局组件
import globalComponent from '@/components'
// 安装自定义插件
app.use(globalComponent)

// 引入模板的全局样式
import '@/style/index.sass'

// console.log(import.meta.env)
app.mount('#app')
