import {
  Layers,
  ArrowUp,
  Code2,
  BriefcaseBusiness,
  Camera,
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Layers size={22} />
              </div>

              <span className="text-2xl font-bold">
                Task<span className="text-indigo-400">Flow</span>
              </span>
            </a>

            <p className="text-gray-400 mt-5 leading-relaxed">
              Simplify your workflow, organize your projects, and achieve more
              with TaskFlow.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/ujjvalpandeytech"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-indigo-400"
              >
                <Code2 size={21} />
              </a>

              <a
                href="https://www.linkedin.com/in/ujjval-pandey-78b00a360"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-indigo-400"
              >
                <BriefcaseBusiness size={21} />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-indigo-400"
              >
                <Camera size={21} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-5">Quick Links</h3>

            <div className="space-y-3 text-gray-400">
              <a href="#home" className="block hover:text-white">
                Home
              </a>
              <a href="#features" className="block hover:text-white">
                Features
              </a>
              <a href="#about" className="block hover:text-white">
                About Us
              </a>
              <a href="#pricing" className="block hover:text-white">
                Pricing
              </a>
              <a href="#contact" className="block hover:text-white">
                Contact
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-5">Features</h3>

            <div className="space-y-3 text-gray-400">
              <p>Task Management</p>
              <p>Team Collaboration</p>
              <p>Progress Tracking</p>
              <p>Smart Analytics</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-5">Get in Touch</h3>

            <div className="space-y-3 text-gray-400">
              <p>ujjvalpandey.tech@gmail.com</p>
              <p>+91 9584307167</p>
              <a
                href="#contact"
                className="inline-block text-indigo-400 hover:text-indigo-300"
              >
                Contact our team
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-7 flex flex-col sm:flex-row justify-between items-center gap-5">
          <p className="text-gray-500 text-sm text-center">
            © {currentYear} TaskFlow. All rights reserved.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm"
          >
            Back to Top
            <ArrowUp size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
