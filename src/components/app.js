import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const scrollSkill = () => {
  document.getElementById("main-target").scrollIntoView({
    behavior: "smooth",
  });
};

export const scrollProject = () => {
  document.getElementById("project-target").scrollIntoView({
    behavior: "smooth",
  });
};

export const HandelContact = (e) => {
  e.preventDefault();
  const name = document.getElementById("Name").value;
  const email = document.getElementById("Email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    fetch("https://nexthire-backend.vercel.app/user/contact/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    })
      .then((res) => {
        if (res.ok) {
          toast.success(
            "Thank you for reaching out! I'll get back to you soon."
          );
        } else {
          toast.error("Something went wrong. Please try again later.");
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error(
          "Unable to send your message. Please check your connection."
        );
      });
  } else {
    toast.error("Please fill out all fields before submitting.");
  }

};
