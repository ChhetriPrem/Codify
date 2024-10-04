import { generateCourseCard } from "../components/profile_cards/card.js";

document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item a");
  const sections = document.querySelectorAll(".section");

  // Function to set the default section
  const setDefaultSection = (defaultSectionId) => {
    sections.forEach((section) => (section.style.display = "none")); // Hide all sections
    document.getElementById(defaultSectionId).style.display = "block"; // Show default section
  };

  // Set Section 1 as default
  setDefaultSection("section1");

  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const targetSection = item.getAttribute("data-target");
      console.log(`Navigating to: ${targetSection}`);

      // Hide all sections
      sections.forEach((section) => (section.style.display = "none"));

      // Show the clicked section
      document.getElementById(targetSection).style.display = "block";

      // Set the clicked item as active
      navItems.forEach((nav) => nav.parentNode.classList.remove("active"));
      item.parentNode.classList.add("active");
    });
  });
  



  // Example course card generation
  generateCourseCard({
    courseName: "UI Design Landing Page",
    description: "Our basic exploration UI/UX design course.",
    price: "$135.00",
    rating: "4.8",
    instructor: "Heydenya",
    avatarUrl:
      "https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
    courseImageUrl:
      "https://themeselection-cdn.b-cdn.net/wp-content/uploads/2022/09/best-free-uiux-design-course.png",
  });

  // Second course card with different data
  generateCourseCard({
    courseName: "Advanced UI Design",
    description: "Deep dive into advanced UI/UX design principles.",
    price: "$200.00",
    rating: "4.9",
    instructor: "Jane Doe",
    avatarUrl:
      "https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
    courseImageUrl:
      "https://themeselection-cdn.b-cdn.net/wp-content/uploads/2022/09/best-free-uiux-design-course.png",
  });
});
