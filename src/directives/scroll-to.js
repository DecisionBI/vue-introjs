export default {
    bind(el, binding) {
        el.dataset.scrollto = binding.value;
    },
    update(el, binding) {
        el.dataset.scrollto = binding.value;
    }
};
