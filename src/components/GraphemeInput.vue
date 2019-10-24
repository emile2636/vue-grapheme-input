<script>
import GraphemeSplitter from 'grapheme-splitter';
let splitter = new GraphemeSplitter();
export default {
    inheritAttrs: false,
    data(){
        return {
            grapheme:'',
            maxLength:undefined,
        }
    },
    methods:{
        onInput(e){
            let graphemeAry = splitter.splitGraphemes(e.target.value).slice(0, this.maxLength);
            this.grapheme = graphemeAry.join('')
            this.$emit('onInput', this.grapheme)
        }
    },
    created(){
        this.maxLength = this.$attrs.maxlength
    },
}
</script>
<template>
    <input v-model="grapheme" v-bind="{...$attrs, maxlength:undefined, type:'text'}" @input="onInput"/>
</template>
<style lang="scss" scoped>

</style>