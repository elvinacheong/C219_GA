anime({
    targets: '.searchBar',
    translateY: [-30, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeInOutQuad'
});

anime({
    targets: '.search-header',
    translateY: [-30, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeInOutQuad'
})

anime({
    targets: '.project-filter li',
    translateY: [30, 0],
    opacity: [0, 1],
    duration: 1000,
    delay: anime.stagger(100, { start: 500 }),
    easing: 'easeInOutQuad'
});

anime({
    targets: '.card',
    translateX: [-150, 0],
    opacity: [0, 1],
    duration: 1000,
    delay: anime.stagger(100, { start: 500 }),
    easing: 'easeInOutQuad'
});

anime({
    targets: '.genre-chart',
    translateX: [50, 0],
    opacity: [0, 1],
    duration: 1000,
    delay: anime.stagger(100, { start: 500 }),
    easing: 'easeInOutQuad'
});
