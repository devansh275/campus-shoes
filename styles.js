* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: #333;
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Navigation */
.navbar {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
}

.nav-logo h2 {
    font-size: 1.8rem;
    font-weight: 800;
    color: #1E40AF;
}

.nav-logo span {
    color: #F97316;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-menu a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
}

.nav-menu a:hover {
    color: #1E40AF;
}

.nav-menu a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #F97316;
    transition: width 0.3s ease;
}

.nav-menu a:hover::after {
    width: 100%;
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background: #333;
    margin: 3px 0;
    transition: 0.3s;
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%);
    color: white;
    padding: 120px 0 80px;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="rgba(255,255,255,0.1)"><polygon points="0,0 1000,100 1000,0"/></svg>');
    background-size: cover;
}

.hero-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    position: relative;
    z-index: 1;
}

.hero-content h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.2;
}

.highlight {
    color: #F97316;
}

.hero-subtitle {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
    line-height: 1.6;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.btn {
    padding: 12px 30px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    display: inline-block;
    text-align: center;
}

.btn-primary {
    background: #F97316;
    color: white;
    box-shadow: 0 4px 15px rgba(249, 115, 22, 0.3);
}

.btn-primary:hover {
    background: #EA580C;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(249, 115, 22, 0.4);
}

.btn-secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
}

.btn-secondary:hover {
    background: white;
    color: #1E40AF;
}

.hero-image {
    position: relative;
}

.hero-image img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

/* Features Section */
.features {
    padding: 80px 0;
    background: #F8FAFC;
}

.features h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #1E40AF;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.feature-card {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.feature-card h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: #1E40AF;
}

.feature-card p {
    color: #666;
    line-height: 1.6;
}

/* Products Section */
.products {
    padding: 80px 0;
    background: white;
}

.products h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #1E40AF;
}

.section-subtitle {
    text-align: center;
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 3rem;
}

.product-categories {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
}

.category-btn {
    padding: 10px 20px;
    border: 2px solid #1E40AF;
    background: transparent;
    color: #1E40AF;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
}

.category-btn.active,
.category-btn:hover {
    background: #1E40AF;
    color: white;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.product-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.product-card:hover {
    transform: translateY(-5px);
}

.product-image {
    height: 250px;
    overflow: hidden;
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.product-card:hover .product-image img {
    transform: scale(1.05);
}

.product-info {
    padding: 1.5rem;
}

.product-info h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: #1E40AF;
}

.product-info p {
    color: #666;
    margin-bottom: 1rem;
}

.product-price {
    font-size: 1.5rem;
    font-weight: 700;
    color: #F97316;
    margin-bottom: 1rem;
}

/* About Section */
.about {
    padding: 80px 0;
    background: #F8FAFC;
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.about-text h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #1E40AF;
}

.about-text p {
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.8;
}

.about-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 2rem;
}

.stat {
    text-align: center;
}

.stat h3 {
    font-size: 2.5rem;
    color: #F97316;
    margin-bottom: 0.5rem;
}

.stat p {
    color: #666;
    font-weight: 500;
}

.about-image img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Testimonials Section */
.testimonials {
    padding: 80px 0;
    background: white;
}

.testimonials h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #1E40AF;
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.testimonial-card {
    background: #F8FAFC;
    padding: 2rem;
    border-radius: 15px;
    position: relative;
}

.testimonial-card::before {
    content: '"';
    position: absolute;
    top: -10px;
    left: 20px;
    font-size: 4rem;
    color: #F97316;
    font-weight: bold;
}

.testimonial-content p {
    font-style: italic;
    margin-bottom: 1.5rem;
    color: #666;
    line-height: 1.6;
}

.testimonial-author h4 {
    color: #1E40AF;
    margin-bottom: 0.5rem;
}

.testimonial-author span {
    color: #666;
    font-size: 0.9rem;
}

/* Contact Section */
.contact {
    padding: 80px 0;
    background: #F8FAFC;
}

.contact h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #1E40AF;
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-top: 3rem;
}

.contact-info h3,
.contact-form h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #1E40AF;
}

.contact-item {
    margin-bottom: 1.5rem;
}

.contact-item strong {
    color: #1E40AF;
    display: block;
    margin-bottom: 0.5rem;
}

.contact-item p {
    color: #666;
    line-height: 1.6;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 12px;
    border: 2px solid #E5E7EB;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #1E40AF;
}

/* Footer */
.footer {
    background: #1E40AF;
    color: white;
    padding: 40px 0 20px;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-section h3 {
    margin-bottom: 1rem;
    color: #F97316;
}

.footer-section h4 {
    margin-bottom: 1rem;
    color: white;
}

.footer-section p {
    color: #CBD5E1;
    line-height: 1.6;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 0.5rem;
}

.footer-section ul li a {
    color: #CBD5E1;
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-section ul li a:hover {
    color: #F97316;
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-links a {
    font-size: 1.5rem;
    text-decoration: none;
    transition: transform 0.3s ease;
}

.social-links a:hover {
    transform: scale(1.2);
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid #374151;
    color: #CBD5E1;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }

    .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background-color: white;
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
        padding: 2rem 0;
    }

    .nav-menu.active {
        left: 0;
    }

    .hero-container {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
    }

    .hero-content h1 {
        font-size: 2.5rem;
    }

    .hero-buttons {
        justify-content: center;
    }

    .about-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .about-stats {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .features-grid {
        grid-template-columns: 1fr;
    }

    .products-grid {
        grid-template-columns: 1fr;
    }

    .testimonials-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .hero-content h1 {
        font-size: 2rem;
    }

    .hero-subtitle {
        font-size: 1rem;
    }

    .btn {
        padding: 10px 20px;
        font-size: 0.9rem;
    }

    .features h2,
    .products h2,
    .about h2,
    .testimonials h2,
    .contact h2 {
        font-size: 2rem;
    }

    .product-categories {
        flex-direction: column;
        align-items: center;
    }

    .footer-content {
        grid-template-columns: 1fr;
    }
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in-up {
    animation: fadeInUp 0.6s ease-out;
}

/* Smooth scrolling */
html {
    scroll-behavior: smooth;
}

/* Loading animation */
.loading {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;
}

.loading.loaded {
    opacity: 1;
    transform: translateY(0);
}
