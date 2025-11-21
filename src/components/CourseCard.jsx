import React from "react";

function CourseCard({ course }) {
  return (
    <a
      href={course.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="course-card">
        <img src={course.image} alt={course.title} />

        <div className="course-info">
          <div className="course-title">{course.title}</div>
          <div className="course-instructor">{course.instructor}</div>

          <div className="course-stats">
            <span className="rating">⭐ {course.rating}</span>
            <span className="students">{course.students.toLocaleString()} students</span>
          </div>

          <div className="course-price">
            <span className="discounted">${course.price}</span>
            <span className="original">${course.originalPrice}</span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default CourseCard;
