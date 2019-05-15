export default {
    bind(el, binding) {
        el.dataset['tooltipclass'] = binding.value;
    },
    update(el, binding) {
        el.dataset['tooltipclass'] = binding.value;
    }
};
