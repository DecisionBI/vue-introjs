export default {
    bind(el, binding) {
        el.dataset.hintposition = binding.value;
    },
    update(el, binding) {
        el.dataset.hintposition = binding.value;
    }
};
