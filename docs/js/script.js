document.addEventListener('DOMContentLoaded', () => {
 
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navLinksLi = document.querySelectorAll('.nav-links li');

    burgerMenu.addEventListener('click', () => {
      
        navLinks.classList.toggle('nav-active');

     
        burgerMenu.classList.toggle('toggle');

        navLinksLi.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('nav-active');
                burgerMenu.classList.remove('toggle');
            });
        });
    });

   
    const featureItems = document.querySelectorAll('.feature-item');

    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.2 
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target); 
            }
        });
    };

    const featureObserver = new IntersectionObserver(observerCallback, observerOptions);

    featureItems.forEach(item => {
        featureObserver.observe(item);
    });

  
    const aboButtons = document.querySelectorAll('.abo-card .btn');

    aboButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const aboName = button.closest('.abo-card').querySelector('h3').textContent;
            alert(`Sie haben Interesse am "${aboName}"-Paket bekundet! Wir melden uns in Kürze bei Ihnen.`);
           
        });
    });

  
    const heroButton = document.querySelector('.hero-section .btn-primary');
    if (heroButton) {
        setTimeout(() => {
            heroButton.style.opacity = '1';
            heroButton.style.transform = 'translateY(0)';
        }, 500); 
    }

  
    const sections = document.querySelectorAll('main section');
    const navLis = document.querySelectorAll('.nav-links li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLis.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });

   
    if(heroButton) {
        heroButton.style.opacity = '1';
        heroButton.style.transform = 'translateY(0)';
    }

});