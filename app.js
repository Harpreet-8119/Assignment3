const btn = document.querySelector('.burger')
const navLinks = document.querySelector('.nav-links')
AOS.init();
btn.addEventListener('click', () => {
    navLinks.classList.toggle('show-nav')
    btn.classList.toggle('toggle')

})

const tl = gsap.timeline({ defaults: { ease: 'power4' } })


tl.to('.navbar', { opacity: 0, duration: 0 })
tl.to('.text', { y: '0%', duration: 1.2 })
tl.to('.intro', { y: '-100%', duration: 1.2, delay: .7 })
tl.to('.navbar', { opacity: 1, duration: 1 })
tl.to('.hero-heading', { opacity: 1, duration: .5 })
