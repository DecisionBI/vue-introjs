export default {
    bind(el, binding) {
        el.dataset.disableInteraction = binding.value;
    },
    update(el, binding) {
        el.dataset.disableInteraction = binding.value;
    }
};
