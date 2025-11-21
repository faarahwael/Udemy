import React, { useState, useRef, useEffect } from "react";

const categories = [
  "Development",
  "Business",
  "Finance & Accounting",
  "IT & Software",
  "Office Productivity",
  "Personal Development",
  "Design",
  "Marketing",
  "Lifestyle",
  "Photography & Video",
  "Health & Fitness",
  "Music",
  "Teaching & Academics"
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src="/src/images/Udemy.png" alt="Udemy Logo" />
        </div>

        <div className="categories-dropdown" ref={ref}>
          <button className="categories-btn" onClick={() => setOpen(!open)}>
            Categories ▾
          </button>

          {open && (
            <ul className="dropdown-menu-wide">
              {categories.map((cat) => (
                <li key={cat}>
                  <a
                    href="https://www.udemy.com/courses/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="navbar-center">
        <div className="search-bar">
          <input type="text" placeholder="Search for anything" />
        </div>
      </div>

      <div className="navbar-right">
        <button className="btn-outline">Log in</button>
        <button className="btn-filled">Sign up</button>
      </div>
    </nav>
  );
}

export default Navbar;
