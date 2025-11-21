import React from "react";

const companies = [
  { name: "Nasdaq", logo: "/src/images/nasdaq.png" },
  { name: "Volkswagen", logo: "/src/images/Volkswagen_logo.webp" },
  { name: "Box", logo: "/src/images/box.png" },
  { name: "Netflix", logo: "/src/images/netflix.png" }
];

function TrustedCompanies() {
  return (
    <section className="trusted-section">
      <h3>Trusted by over 14,000 companies</h3>

      <div className="trusted-logos">
        {companies.map((c) => (
          <img key={c.name} src={c.logo} alt={c.name} />
        ))}
      </div>
    </section>
  );
}

export default TrustedCompanies;
