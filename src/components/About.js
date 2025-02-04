import React from "react";

export default function About() {
  return (
    <div className="container my-5">
      <h1 className="text-center">About Us</h1>
      <p className="mt-3">
        Welcome to our website! We are passionate about providing the best tools
        and resources to enhance your experience.
      </p>

      <h2 className="mt-4">Our Mission</h2>
      <p>
        Our mission is to deliver high-quality solutions that help users improve
        their productivity and efficiency.
      </p>

      <h2 className="mt-4">Why Choose Us?</h2>
      <ul>
        <li>🚀 Fast and reliable services</li>
        <li>🎯 User-friendly interface</li>
        <li>💡 Continuous innovation and improvements</li>
      </ul>

      <h2 className="mt-4">Get in Touch</h2>
      <p>
        Have questions or feedback? Contact us at{" "}
        <a href="mailto:support@example.com">support@example.com</a>
      </p>
    </div>
  );
}
