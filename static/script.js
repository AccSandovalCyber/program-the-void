document.addEventListener("DOMContentLoaded", function() {
    var lazyIframes = [].slice.call(document.querySelectorAll("iframe.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyIframeObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyIframe = entry.target;
                    lazyIframe.src = lazyIframe.dataset.src;
                    lazyIframe.classList.remove("lazy");
                    lazyIframeObserver.unobserve(lazyIframe);
                }
            });
        });

        lazyIframes.forEach(function(lazyIframe) {
            lazyIframeObserver.observe(lazyIframe);
        });
    }
});
