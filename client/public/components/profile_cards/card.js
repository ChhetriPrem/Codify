// card.js
export function generateCourseCard({
  courseName = "UI Design Landing Page",
  description = "In this course, you'll learn the fundamentals of UI/UX design including how to create wireframes, design prototypes, and conduct user research.",
  price = "$135.00",
  rating = "4.8",
  instructor = "Heydenya",
  avatarUrl = "https://via.placeholder.com/40", // Placeholder avatar image
  courseImageUrl = "https://via.placeholder.com/280x150", // Placeholder course image
}) {
  const container = document.getElementById("course-card-container");

  const cardHTML = `
      <div class="course-card">
        <img class="course-image" src="${courseImageUrl}" alt="${courseName}">
        <div class="image-section">
          <img src="${avatarUrl}" alt="Instructor avatar">
          <h3 class="title">${courseName}</h3>
        </div>
        <p>${description}</p>
        <div class="details-section">
          <div class="rating">
            ⭐ <span>${rating}</span>
          </div>
          <div class="price">${price}</div>
        </div>
        <button id class="join-now-btn">Join Now</button>
      </div>
    `;

  // Append the generated card to the container
  container.innerHTML += cardHTML;
}
