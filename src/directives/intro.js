export default {
    bind(el, binding) {
        el.dataset.intro = binding.value;
        el.dataset._intro = binding.value;
        window.__introjsDiscovery.ping();
    },
    update(el, binding) {
        el.dataset.intro = binding.value;
        el.dataset._intro = binding.value;
        window.__introjsDiscovery.ping();
    }
};
