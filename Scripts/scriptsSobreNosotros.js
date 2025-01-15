document.addEventListener("DOMContentLoaded", function() {
    var sections = [
        { element: document.getElementById("historia"), animationClass: "flip-in-hor-top" },
        { element: document.getElementById("ubicacion"), animationClass: "tilt-in-top-1" },
        { element: document.getElementById("alcance"), animationClass: "slide-in-blurred-bottom" }
    ];

    sections.forEach(function(section) {
        var observer = new IntersectionObserver(function(entries) {
            if (entries[0].isIntersecting) {
                section.element.style.visibility = 'visible';
                section.element.classList.add(section.animationClass);
                observer.disconnect();
            }
        }, { threshold: 0.5 });

        observer.observe(section.element);
    });
});

