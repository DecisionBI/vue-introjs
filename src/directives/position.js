export default {
    bind(el, binding) {
        el.dataset.position = binding.value;
    },
    update(el, binding) {
        el.dataset.position = binding.value;
    }
};
