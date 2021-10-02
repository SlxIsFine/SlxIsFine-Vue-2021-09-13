import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index.js'
import { ElUpload, ElIcon, ElDialog ,ElTimeline,ElTimelineItem} from 'element-plus';
import 'element-plus/packages/theme-chalk/src/base.scss'
import "./utils/jsBridge"
import VueUploadComponent from 'vue-upload-component'
const app = createApp(App)
app.component(ElUpload.name, ElUpload);
app.component(ElIcon.name, ElIcon);
app.component(ElDialog.name, ElDialog);
app.component(ElTimeline.name, ElTimeline);
app.component(ElTimelineItem.name, ElDialog);
app.component('file-uploader', VueUploadComponent)
// app.component(ElRow.name,ElRow)
// app.component(ElCol.name,ElCol)
app.use(router).use(store).mount('#app')

