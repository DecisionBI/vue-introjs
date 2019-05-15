export default {
    bind(el, binding) {
        el.dataset.step = binding.value;
    },
    update(el, binding) {
        el.dataset.step = binding.value;
    }
};
