import { shallowMount } from '@vue/test-utils'
import GraphemeInput from "@/components/GraphemeInput.vue";

describe("GraphemeInput.vue", () => {
    it("maxlength attr passed and the input max length should be matched by using grapheme-splitter", () => {
        const maxlength = 3;
        const wrapper = shallowMount(GraphemeInput, {
            attrs: { maxlength }
        });
        const textInput = wrapper.find('input[type="text"]');
        textInput.setValue("Ĺo͂řȩm̅");
        expect(wrapper.vm.$data.grapheme).toBe("Ĺo͂ř");
    });
});
