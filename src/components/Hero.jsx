import { ArrowRight, CheckCircle } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 bg-linear-to-br from-indigo-50 via-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <div>
          <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            ✨ Smart Project Management
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Plan Smarter.
            <span className="text-indigo-600"> Work Better.</span>
            Achieve More.
          </h1>

          <p className="text-gray-600 text-lg mt-6 leading-relaxed">
            Manage your projects, organize tasks, and collaborate
            with your team — all in one powerful workspace.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#pricing"
              className="bg-indigo-600 text-white px-7 py-3.5 rounded-lg flex items-center gap-2 hover:bg-indigo-700 transition"
            >
              Get Started
              <ArrowRight size={19} />
            </a>

            <a
              href="#about"
              className="border border-gray-300 text-gray-800 px-7 py-3.5 rounded-lg hover:bg-gray-100 transition"
            >
              Learn More
            </a>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap gap-5 mt-8 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <CheckCircle size={17} className="text-green-500" />
              Easy to use
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle size={17} className="text-green-500" />
              Team friendly
            </span>
          </div>
        </div>

        {/* Right Dashboard Illustration */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 md:p-7">

            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-sm text-gray-500">Dashboard</p>
                <h2 className="text-xl font-bold text-gray-900">
                  Welcome back!
                </h2>
              </div>

              <div className="bg-indigo-100 text-indigo-700 px-3 py-2 rounded-lg text-sm">
                My Workspace
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-indigo-50 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Total Projects</p>
                <h3 className="text-3xl font-bold text-indigo-700 mt-2">
                  12
                </h3>
              </div>

              <div className="bg-purple-50 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Completed Tasks</p>
                <h3 className="text-3xl font-bold text-purple-700 mt-2">
                  84
                </h3>
              </div>
            </div>

            {/* Progress */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-800">
                  Website Redesign
                </span>
                <span className="text-indigo-600 font-semibold">75%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-indigo-600 h-3 rounded-full w-3/4"></div>
              </div>
            </div>
            {/* Tasks */}
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-gray-700">Design Homepage</span>
                <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  Completed
                </span>
              </div>

              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-gray-700">Develop Dashboard</span>
                <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                  In Progress
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-700">Testing & Launch</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                  Pending
                </span>
              </div>
            </div>
          </div>

          <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-60"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;