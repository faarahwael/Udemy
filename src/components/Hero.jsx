import React, { useState } from "react";

const slides = [
  {
    title: "Learn more for less — Courses as low as E£249.99",
    subtitle: "Upgrade your skills today. Limited-time discounts.",
    image: "/src/images/Hero.jpg"
  },
  {
    title: "Thousands of courses to choose from",
    subtitle: "Learn at your own pace from expert instructors.",
    image: "/src/images/Hero2.jpg"
  },
  {
    title: "Unlock your potential with new skills",
    subtitle: "Transform your future by learning something new.",
    image: "/src/images/Hero3.jpg"
  }
];

function Hero() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="hero">
      <div className="hero-slider-container">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`hero-slide ${i === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${s.image})` }}
          >
            <div className="hero-overlay-box">
              <h1>{s.title}</h1>
              <p>{s.subtitle}</p>

              <button
                onClick={() =>
                  window.open("https://www.udemy.com/courses/", "_blank")
                }
              >
                Explore Courses
              </button>
            </div>
          </div>
        ))}

        <button className="hero-arrow left" onClick={prev}>❮</button>
        <button className="hero-arrow right" onClick={next}>❯</button>
      </div>
    </section>
  );
}

export default Hero;
