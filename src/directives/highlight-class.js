export default {
    bind(el, binding) {
        el.dataset.highlightclass = binding.value;
    },
    update(el, binding) {
        el.dataset.highlightclass = binding.value;
    }
};
