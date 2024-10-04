import { showToast } from "../components/toast/toast.js";

const toStudent = () => {
  showToast("success", "Login Success");
  const student = document.getElementById("student-signup-page");
  const instructor = document.getElementById("instructor-signup-page");
  const landingPage = document.getElementById("landing-page-info");

  student.style.display = "block";
  instructor.style.display = "none";
  landingPage.style.display = "none";
};

const toInstructor = () => {
  const student = document.getElementById("student-signup-page");
  const instructor = document.getElementById("instructor-signup-page");
  const landingPage = document.getElementById("landing-page-info");

  student.style.display = "none";
  instructor.style.display = "block";

  landingPage.style.display = "none";
};

// getting values from input --- student edition

const studetnSignupAction = async () => {
  const name = document.getElementById("rs-email").value;
  const email = document.getElementById("rs-password").value;
  const password = document.getElementById("rs-email").value;
  try {
    const response = await axios.post("/api/signup", {
      name,
      email,
      password,
    });

    if (response.data.success) {
      Cookies.set("token", response.data.token, { expires: 7 });
      console.log("Success");
      showToast("success", "Login Success");

      window.location.href = "/preview";
    } else {
      console.log("Unsuccess");
    }
  } catch (error) {
    console.log("Error", error);
  }
};

// getting values from input --- student edition

const instructorSignupAction = async () => {
  const name = document.getElementById("ri-email").value;
  const email = document.getElementById("ri-password").value;
  const password = document.getElementById("ri-email").value;
  try {
    const response = await axios.post("/api/signup", {
      name,
      email,
      password,
      role: "instructor",
    });

    if (response.data.success) {
      Cookies.set("token", response.data.token, { expires: 7 });
      console.log("Success");
      showToast("success", "Login Success");
      if (response.data.role === "instructor") {
        console.log("gusa");
      } else {
        window.location.href = "/preview";
      }
    } else {
      console.log("Unsuccess");
    }
  } catch (error) {
    console.log("Error", error);
  }
};

// ---test code 

const createCourse = () => {
  const pictureUrl = document.getElementById('').value
  const title = document.getElementById('').value
  const description = document.getElementById('').value
  const price = document.getElementById('').value

  const response = axios.post('/createCourse', {
    pictureUrl,
    title,
    description,
    price,
  })
}


document
  .getElementById("submit-student")
  .addEventListener("click", studetnSignupAction);
document
  .getElementById("submit-instructor")
  .addEventListener("click", instructorSignupAction);

document.getElementById("student-btn").addEventListener("click", toStudent);
document
  .getElementById("instructor-btn")
  .addEventListener("click", toInstructor);
