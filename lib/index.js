// 全局 less
import './components/atomui.less';





import Atmui from './util/index.js'; // util

// 全局 方法
//import Alert from './components/Alert/index.js';
import Dialog from './components/Dialog/index.js';
import Loading from './components/Loading/index.js';
// import Picker from './components/Picker/Picker.js';


// 按钮
import Button from './components/Button/button.vue';

// 图标
import Icon from './components/Icon/Icon.vue';

// // 表单
import Input from './components/Input/Input.vue';

// // 底部barTab 
import BarTab from './components/BarTab/BarTab.vue';
import BarTabItem from './components/BarTab/barTabItem.vue';

// // Tab 
import Tab from './components/Tab/Tab.vue';
import TabItem from './components/Tab/TabItem.vue';

// // List
import Lists from './components/List/List.vue';
import ListItem from './components/List/ListItem.vue';

// // 日历
// import Calendar from './components/Calendar/Calendar.vue';

// // switch
import Switchs from './components/Switchs/index.js';

// // 轮播
// import Swiper from './components/Silder/Silder.js';
import Silder from './components/Silder/Silder.vue';
import SilderItem from './components/Silder/SilderItem.vue';

// //form 表单
import InputBox from './components/Form/Form.vue';
import inputItem from './components/Form/inputItem.vue';

// // // SearchBar
import SearchBar from './components/SearchBar/SearchBar.vue';

// // // SearchHistory
import SearchHistory from './components/SearchHistory/SearchHistory.vue';
import SearchHistoryItem from './components/SearchHistory/SearchHistoryItem.vue';


// // 上传
// import Upload from './components/Upload/Upload.vue';

// picker选择
// import Picker from './components/Picker/Picker.vue';

//下拉刷新，上拉加载
// import Uprefresh from './components/Uprefresh/Uprefresh.vue';

// import Swipeout from './components/Swipeout/swipeout.vue';
// import SwipeoutItem from './components/Swipeout/swipeoutItem.vue';
// import SwipeoutButton from './components/Swipeout/swipeButton.vue';

// 自定义指令 
import tap from './directive/v-tap.js';
import focus from './directive/v-focus.js';


const atmui = {
    Button,
    Icon,
    Input,

    BarTab,
    BarTabItem,

    Tab,
    TabItem,

    Lists,
    ListItem,

    // Calendar,

    Switchs,

    Silder,
    SilderItem,

    InputBox,
    inputItem,

    SearchBar,
    SearchHistory,
    SearchHistoryItem,

    // Upload,

    // Uprefresh,

    // Swipeout,
    // SwipeoutItem,
    // SwipeoutButton
}




// const // install = {
// const installs = (Vue) => {
        
//     Object.keys(atomui).forEach(key => {
//         Vue.component(key, atomui[key]);
//     })

//     // Vue.prototype.$Atmui = Atmui;

//     // Vue.prototype.$Dialog = Dialog;
//     // Vue.prototype.$Loading = Loading;
//     // Vue.prototype.$Swiper = Swiper;
//     // Vue.prototype.$Picker = Picker;


//     
// }


const version = '0.1.3';

const install= (Vue) => {
    Object.keys(atmui).forEach(key => {
        Vue.component(key, atmui[key]);
    });
    

    Vue.prototype.$Atmui = Atmui;
    Vue.prototype.$Dialog = Dialog;
    Vue.prototype.$Loading = Loading;
    //Vue.prototype.$Picker = Picker;

    Vue.directive('tap', tap);
    Vue.directive('focus', focus);
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    version,
    install,
};

// export default plug;


export {
    Button,
    Icon,
    // Input,

    // BarTab,
    // BarTabItem,

    // Tab,
    // TabItem,

    // Lists,
    // ListItem,

    // Calendar,

    // Switchs,

    // Silder,
    // SilderItem,

    // InputBox,
    // inputItem,

    // SearchBar,
    // SearchHistory,
    // SearchHistoryItem,

    // Upload,

    // Uprefresh,

    // Swipeout,
    // SwipeoutItem,
    // SwipeoutButton
}


