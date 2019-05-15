export default {
    bind(el, binding) {
        if (binding.value === false) {
            delete el.dataset.intro;
            delete el.dataset.hint;
        }
    },
    update(el, binding) {
        if (binding.value) {
            el.dataset.intro = el.dataset._intro;
            el.dataset.hint = el.dataset._hint;
        } else {
            delete el.dataset.intro;
            delete el.dataset.hint;
        }
    },
};
