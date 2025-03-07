import "../components/AboutUs/aboutus.css";
import { useEffect } from "react";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";

const AboutUs = () => {
    useEffect(() => {
        const testimonials = [
            {
                name: "Mustafa Yilmaz",
                text: "An incredible experience! The seamless booking and cozy campsites made my trip unforgettable.",
            },
            {
                name: "Sarah Davis",
                text: "The best way to explore nature without any hassle. The website is intuitive, and the services are top-notch!",
            },
            {
                name: "Avinash Singh",
                text: "Loved every moment of our adventure. The platform made planning so much easier!",
            },
        ];

        const testimonialContainer = document.getElementById("testimonial-list");

        testimonials.forEach((testimonial) => {
            const testimonialCard = document.createElement("div");
            testimonialCard.classList.add("testimonial");

            testimonialCard.innerHTML = `
        <p class="testimonial-text">"${testimonial.text}"</p>
        <h4 class="testimonial-author">- ${testimonial.name}</h4>
      `;

            testimonialContainer.appendChild(testimonialCard);
        });
    }, []);

    return (
        <>
            <Navbar />
            <div className="about-container">
                <section className="about-intro">
                    <h1>About Us</h1>
                    <p>
                        We are more than just a campsite booking platform — we are your gateway to adventure.
                        Whether you are craving a peaceful retreat in the mountains or an adrenaline-pumping
                        night under the stars, we help you find the perfect spot.
                    </p>
                </section>

                <section className="mission">
                    <h2>Our Mission</h2>
                    <p>
                        Our goal is simple: To connect nature lovers with unforgettable experiences.
                        We provide easy-to-use tools, verified locations, and user-driven recommendations
                        to make your next outdoor adventure smooth and stress-free.
                    </p>
                </section>

                <section className="why-choose-us">
                    <h2>Why Choose Us?</h2>
                    <ul>
                        <li>✅ Hassle-free campsite bookings</li>
                        <li>✅ Verified and top-rated locations</li>
                        <li>✅ User reviews and community-driven recommendations</li>
                        <li>✅ Secure payment and easy cancellation</li>
                    </ul>
                </section>

                <section className="testimonials">
                    <h2>What Our Users Say</h2>
                    <div id="testimonial-list"></div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default AboutUs;
