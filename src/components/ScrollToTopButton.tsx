"use client";

import { useEffect, useState } from 'react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to a certain amount
  const toggleVisibility = () => {
    if (window.scrollY > 300) { // Adjust scroll threshold as needed
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 z-50
        ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}
        bg-gradient-to-br from-green-500 to-green-700 text-white
        hover:from-green-600 hover:to-green-800
        focus:ring-green-500 focus:ring-offset-gray-900
        transform hover:scale-110 active:scale-95
        border-2 border-green-400
      `}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{
        boxShadow: isVisible ? '0 0 25px rgba(32, 139, 15, 0.7)' : 'none',
        backgroundColor: '#208b0f',
        borderColor: '#2bad12',
      }}
    >
      <svg
        className="w-6 h-6 transform -rotate-90"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        ></path>
      </svg>
    </button>
  );
}
