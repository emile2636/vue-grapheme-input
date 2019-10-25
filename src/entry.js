import Vue from "vue";
import VueGraphemeInput from "./components/GraphemeInput.vue";

const Components = {
    VueGraphemeInput,
};

Object.keys(Components).forEach(name=>{
    Vue.component(name, Components[name])
})

export default Components