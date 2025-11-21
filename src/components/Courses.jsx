import React from "react";
import CourseCard from "./CourseCard";

const popularCourses = [
  {
    title: "The Complete Python Bootcamp 2025",
    instructor: "Jose Portilla",
    rating: 4.6,
    students: 512000,
    price: 19.99,
    originalPrice: 129.99,
    image: "https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg",
    url: "https://www.udemy.com/course/complete-python-bootcamp/"
  },
  {
    title: "React – The Complete Guide",
    instructor: "Maximilian Schwarzmüller",
    rating: 4.7,
    students: 380000,
    price: 22.99,
    originalPrice: 149.99,
    image: "https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",
    url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
  },
  {
    title: "JavaScript: From Zero to Expert",
    instructor: "Jonas Schmedtmann",
    rating: 4.8,
    students: 650000,
    price: 17.99,
    originalPrice: 119.99,
    image: "https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
    url: "https://www.udemy.com/course/the-complete-javascript-course/"
  }
];

function Courses() {
  return (
    <section className="courses-wrapper">
      <div className="course-section">
        <h2>Popular on Udemy</h2>

        <div className="course-container">
          {popularCourses.map((c) => (
            <CourseCard key={c.title} course={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
