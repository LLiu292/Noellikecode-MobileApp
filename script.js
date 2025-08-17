// FAQ Toggle functionality
function toggleFAQ(button) {
  const content = button.nextElementSibling
  const icon = button.querySelector("span")

  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden")
    icon.textContent = "−"
    button.classList.add("text-purple-400")
  } else {
    content.classList.add("hidden")
    icon.textContent = "+"
    button.classList.remove("text-purple-400")
  }
}

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault()

  const formData = new FormData(this)
  const data = Object.fromEntries(formData)

  // Create mailto link
  const subject = encodeURIComponent("FluentMinds Contact Form Submission")
  const body = encodeURIComponent(`
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Role: ${data.role}

Message:
${data.message}
    `)

  const mailtoLink = `mailto:fluentmind.ai@gmail.com?subject=${subject}&body=${body}`
  window.location.href = mailtoLink

  // Show success message
  alert("Thank you for your message! Your email client should open with the message ready to send.")

  // Reset form
  this.reset()
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add scroll effect to navigation
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav")
  if (window.scrollY > 100) {
    nav.classList.add("bg-slate-900")
  } else {
    nav.classList.remove("bg-slate-900")
  }
})
