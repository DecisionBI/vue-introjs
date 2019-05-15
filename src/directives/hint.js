export default {
    bind(el, binding) {
        el.dataset.hint = binding.value;
        el.dataset._hint = binding.value;
        window.__introjsDiscovery.ping();
    },
    update(el, binding) {
        el.dataset.hint = binding.value;
        el.dataset._hint = binding.value;
        window.__introjsDiscovery.ping();
    }
};
