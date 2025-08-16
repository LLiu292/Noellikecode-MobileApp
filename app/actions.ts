"use server"

export async function sendContactMessage(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const role = formData.get("role") as string
  const message = formData.get("message") as string

  // In a real implementation, you would integrate with an email service like:
  // - Resend
  // - SendGrid
  // - Nodemailer with SMTP
  // For now, we'll just log the data
  console.log("Contact form submission:", {
    firstName,
    lastName,
    email,
    role,
    message,
    to: "fluentmind.ai@gmail.com",
  })

  // Return success response
  return { success: true, message: "Message sent successfully!" }
}
