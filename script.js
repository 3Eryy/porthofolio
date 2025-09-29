// Popup functionality
        let userName = '';
        
        function submitName() {
            const nameInput = document.getElementById('nameinput');
            userName = nameInput.value.trim();
            
            if (userName) {
                document.getElementById('wellcomeMasage').textContent = `Selamat datang, ${userName}! 👋`;
                document.getElementById('popup').style.display = 'none';
            } else {
                alert('Silakan masukkan nama Anda!');
            }
        }

        // Slider functionality for about section
        let currentSlide = 0;
        const slides = document.querySelectorAll('.item');
        const totalSlides = slides.length;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(currentSlide);
        }

        // Event listeners for slider buttons
        document.querySelector('.next').addEventListener('click', nextSlide);
        document.querySelector('.prev').addEventListener('click', prevSlide);

        // Auto slide every 5 seconds
        setInterval(nextSlide, 5000);

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Header background change on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(26, 26, 26, 0.98)';
            } else {
                header.style.background = 'rgba(26, 26, 26, 0.95)';
            }
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe project cards for animation
        document.querySelectorAll('.project-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });

        // Show popup on page load
        window.addEventListener('load', () => {
            document.getElementById('popup').style.display = 'flex';
        });

        // Handle Enter key for name input
        document.getElementById('nameinput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                submitName();
            }
        });