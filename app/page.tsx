import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Heart,
  Brain,
  Gamepad2,
  Clock,
  Headphones,
  Shield,
  Mail,
  Users,
  Star,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react"
import { sendContactMessage } from "./actions"

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

export default function FluentMindsWebsite() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/fluentminds-square-logo.png" alt="FluentMinds" className="h-8" />
              <span className="font-serif font-bold text-xl text-foreground">FluentMinds</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#features" className="text-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#faq" className="text-foreground hover:text-primary transition-colors">
                FAQ
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-purple-pink opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Fluency First,{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Greatness Follows
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              FluentMinds is a free AI-powered mobile app designed to support children who stutter or clutter through
              gamified speech practice, real-time feedback, and mindfulness activities.
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                className="gradient-purple-cyan text-white px-8 py-3 text-lg font-medium hover:opacity-90 transition-opacity"
              >
                Try the Prototype
              </Button>
            </div>
            <div className="mt-12 flex justify-center">
              <img
                src="/app-main-screen.webp"
                alt="FluentMinds app interface"
                className="rounded-2xl shadow-2xl max-w-sm border border-border/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              FluentMinds was created by students who understand the challenges children face with speech fluency. Our
              mission is to provide a supportive, engaging tool that complements traditional speech therapy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Student-Driven Development</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our team consists of passionate students from various disciplines who came together with a shared
                vision: to create technology that makes a real difference in children's lives. We believe that
                innovation comes from understanding real needs and creating solutions with empathy.
              </p>
              <div className="flex items-center space-x-4">
                <Users className="h-6 w-6 text-primary" />
                <span className="text-foreground font-medium">Built by students, for families</span>
              </div>
            </div>
            <div className="gradient-card rounded-2xl p-8 shadow-lg border border-border/20">
              <div className="flex items-center space-x-4 mb-4">
                <Heart className="h-8 w-8 text-primary" />
                <h4 className="font-serif text-xl font-bold text-foreground">Important Note</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                FluentMinds is designed as a <strong>complementary tool</strong> to support speech therapy, not replace
                it. We encourage families to work with qualified speech-language pathologists for comprehensive care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powerful Features for Speech Development
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our AI-powered tools are designed to make speech practice engaging, effective, and accessible for
              children.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="gradient-card hover:shadow-lg transition-all duration-300 border border-border/20 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg gradient-purple-cyan">
                    <Gamepad2 className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="font-serif">Beat Bridge</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Gamified speech fluency practice that makes learning fun. Children can practice speaking patterns
                  through interactive games and challenges.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="gradient-card hover:shadow-lg transition-all duration-300 border border-border/20 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg gradient-cyan-green">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="font-serif">Pacing Tools</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Multiple pacing modes help children develop natural speech rhythm and timing, with visual and audio
                  cues for guidance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="gradient-card hover:shadow-lg transition-all duration-300 border border-border/20 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg gradient-purple-cyan">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="font-serif">Real-time Feedback</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  AI-powered analysis provides instant, encouraging feedback on speech patterns, helping children
                  understand and improve their fluency.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="gradient-card hover:shadow-lg transition-all duration-300 border border-border/20 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg gradient-cyan-green">
                    <Headphones className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="font-serif">Mindfulness Activities</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Breathing exercises and relaxation techniques help children manage anxiety and build confidence in
                  their speaking abilities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="gradient-card hover:shadow-lg transition-all duration-300 border border-border/20 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg gradient-purple-cyan">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="font-serif">Progress Tracking</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Visual progress reports help children and parents celebrate improvements and identify areas for
                  continued focus.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="gradient-card hover:shadow-lg transition-all duration-300 border border-border/20 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg gradient-purple-cyan">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="font-serif">Safe & Private</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Child-safe design with robust privacy protections ensures a secure environment for learning and
                  growth.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Common questions from parents, educators, and speech-language pathologists.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="therapy-support" className="gradient-card rounded-lg px-6 border border-border/20">
              <AccordionTrigger className="text-left font-medium">
                How does FluentMinds support traditional speech therapy?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                FluentMinds is designed as a complementary tool that reinforces concepts learned in speech therapy
                sessions. It provides additional practice opportunities between appointments and helps children maintain
                engagement with their speech development goals. We recommend using FluentMinds alongside regular
                sessions with a qualified speech-language pathologist.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="privacy" className="gradient-card rounded-lg px-6 border border-border/20">
              <AccordionTrigger className="text-left font-medium">
                How do you protect my child's privacy and data?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                We take privacy seriously, especially when it comes to children. FluentMinds follows strict data
                protection guidelines, including COPPA compliance. Voice recordings are processed locally when possible,
                and any data that must be transmitted is encrypted and anonymized. Parents have full control over their
                child's data and can request deletion at any time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cost" className="gradient-card rounded-lg px-6 border border-border/20">
              <AccordionTrigger className="text-left font-medium">
                Is FluentMinds really free? Are there hidden costs?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Yes, FluentMinds is completely free to use. There are no hidden costs, premium features, or subscription
                fees. As a student-driven project, our goal is to make speech support tools accessible to all families,
                regardless of their financial situation. The app is supported through educational grants and
                partnerships.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="age-range" className="gradient-card rounded-lg px-6 border border-border/20">
              <AccordionTrigger className="text-left font-medium">
                What age range is FluentMinds designed for?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                FluentMinds is primarily designed for children ages 6-18 (subject to change), though it can be
                beneficial for younger or older users depending on their individual needs and comfort with technology.
                The interface and activities are designed to be engaging and age-appropriate for a wide range of
                students.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="effectiveness" className="gradient-card rounded-lg px-6 border border-border/20">
              <AccordionTrigger className="text-left font-medium">
                How effective is FluentMinds compared to traditional therapy?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                FluentMinds is not intended to replace traditional speech therapy but to enhance it. While we've
                designed our tools based on evidence-based practices, the most effective approach combines regular
                sessions with a qualified speech-language pathologist and supplementary practice with tools like
                FluentMinds. We encourage families to discuss incorporating FluentMinds into their child's overall
                treatment plan.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="availability" className="gradient-card rounded-lg px-6 border border-border/20">
              <AccordionTrigger className="text-left font-medium">
                When will FluentMinds be available for download?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                We're currently in the final stages of development and testing. FluentMinds will be available for iOS
                devices in August 2025.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions? We'd love to hear from speech-language pathologists, parents, and educators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">fluentmind.ai@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">For SLPs and Professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">For Parents and Families</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-serif text-lg font-bold text-foreground mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="p-2 bg-transparent" asChild>
                    <a href="https://www.instagram.com/fluentminds.ai/" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="p-2 bg-transparent" asChild>
                    <a href="https://www.tiktok.com/@fluentmind.ai" target="_blank" rel="noopener noreferrer">
                      <TikTokIcon />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="p-2 bg-transparent" asChild>
                    <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="p-2 bg-transparent" asChild>
                    <a href="https://www.youtube.com/@FluentMinds-AI" target="_blank" rel="noopener noreferrer">
                      <Youtube className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="mt-8 p-6 gradient-card rounded-lg border border-border/20">
                <h4 className="font-serif text-lg font-bold text-foreground mb-3">For Professionals</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We're actively seeking partnerships with speech-language pathologists and educational institutions. If
                  you're interested in collaborating or providing feedback on our development, please reach out.
                </p>
              </div>
            </div>

            <Card className="gradient-card border border-border/20">
              <CardHeader>
                <CardTitle className="font-serif">Send us a message</CardTitle>
                <CardDescription>We typically respond within 24 hours during business days.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form action={sendContactMessage} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="text-sm font-medium text-foreground mb-2 block">
                        First Name
                      </label>
                      <Input id="firstName" name="firstName" placeholder="Your first name" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="text-sm font-medium text-foreground mb-2 block">
                        Last Name
                      </label>
                      <Input id="lastName" name="lastName" placeholder="Your last name" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                  <div>
                    <label htmlFor="role" className="text-sm font-medium text-foreground mb-2 block">
                      I am a...
                    </label>
                    <select
                      name="role"
                      className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground"
                      required
                    >
                      <option>Parent/Guardian</option>
                      <option>Speech-Language Pathologist</option>
                      <option>Educator</option>
                      <option>Researcher</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your interest in FluentMinds or any questions you have..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full gradient-purple-cyan text-white font-medium hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src="/fluentminds-square-logo.png" alt="FluentMinds" className="h-6" />
              <span className="font-serif font-bold text-lg text-foreground">FluentMinds</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-muted-foreground text-sm">
                © 2025 FluentMinds. A student-driven project dedicated to supporting children's speech development.
              </p>
              <p className="text-muted-foreground text-xs mt-1">Not a replacement for professional speech therapy.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
