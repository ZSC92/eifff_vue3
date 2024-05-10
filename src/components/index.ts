// 引入项目中全部的全局组件
import SvgIcon from '@/components/SvgIcon/index.vue'
import Pagination from '@/components/Pagination/index.vue'
// 全局对象
const allGlobalComponent = { SvgIcon, Pagination }

// 对外暴露插件对象
export default {
  // 必须叫做install
  install(app: any) {
    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key, allGlobalComponent[key as keyof typeof allGlobalComponent])
    })
  },
}
