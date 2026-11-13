import {
  UserPlus,
  FolderKanban,
  Rocket,
  ArrowRight,
  CheckCircle
} from "lucide-react";

function About() {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Create Your Account",
      description:
        "Sign up in seconds and create your personal workspace to get started.",
    },
    {
      number: "02",
      icon: FolderKanban,
      title: "Organize Your Projects",
      description:
        "Create projects, assign tasks, set deadlines, and invite your team members.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Track & Achieve Goals",
      description:
        "Monitor progress, collaborate with your team, and complete projects on time.",
    },
  ];

  const benefits = [
    "Simple and user-friendly interface",
    "Organize all projects in one place",
    "Improve team productivity",
    "Track progress in real time",
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* About Introduction */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-24">

          <div>
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">
              About TaskFlow
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
              Make Your Work
              <span className="text-indigo-600"> Simple & Organized</span>
            </h2>

            <p className="text-gray-600 text-lg mt-6 leading-relaxed">
              TaskFlow is an all-in-one project management platform
              designed to help individuals and teams manage their work
              efficiently. From planning daily tasks to managing
              complex projects, everything stays organized in one place.
            </p>

            <div className="mt-7 space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <CheckCircle
                    size={20}
                    className="text-indigo-600 shrink-0"
                  />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <a
              href="#pricing"
              className="inline-flex items-center gap-2 mt-9 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Explore Plans
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Visual Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-7 md:p-10">

            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="text-gray-500 text-sm">
                  Project Overview
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">
                  Team Performance
                </h3>
              </div>

              <div className="bg-indigo-100 text-indigo-600 p-3 rounded-xl">
                <Rocket size={25} />
              </div>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-6 mb-6">
              <p className="text-gray-500 text-sm">
                Overall Completion
              </p>

              <div className="flex items-end justify-between mt-3">
                <h2 className="text-5xl font-bold text-indigo-700">
                  85%
                </h2>
                <span className="text-green-600 font-semibold text-sm">
                  +12% this month
                </span>
              </div>

              <div className="w-full bg-indigo-200 h-3 rounded-full mt-5">
                <div className="w-[85%] bg-indigo-600 h-3 rounded-full"></div>
              </div>
            </div>
            <div className="space-y-5">
              <div className="flex justify-between">
                <span className="text-gray-600">Design Team</span>
                <span className="font-semibold text-gray-900">92%</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Development Team</span>
                <span className="font-semibold text-gray-900">78%</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Marketing Team</span>
                <span className="font-semibold text-gray-900">85%</span>
              </div>
            </div>

          </div>
        </div>

        {/* How It Works */}
        <div className="text-center max-w-2xl mx-auto mb-14">

          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">
            How It Works
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
            Get Started in
            <span className="text-indigo-600"> 3 Easy Steps</span>
          </h2>

          <p className="text-gray-500 mt-5 text-lg">
            Getting organized has never been easier.
            Follow these simple steps to improve your workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative bg-white border border-gray-100 p-8 rounded-2xl hover:shadow-xl transition duration-300"
              >
                <div className="flex justify-between items-center mb-7">

                  <div className="bg-indigo-100 text-indigo-600 p-4 rounded-xl">
                    <Icon size={28} />
                  </div>

                  <span className="text-4xl font-bold text-gray-100">
                    {step.number}
                  </span>

                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-500 leading-relaxed">
                  {step.description}
                </p>

                {index !== steps.length - 1 && (
                  <ArrowRight
                    className="hidden md:block absolute -right-7 top-1/2 text-indigo-300"
                    size={24}
                  />
                )}

              </div>
            );
          })}

        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 bg-indigo-600 rounded-3xl p-8 md:p-12">

          {[
            { value: "10K+", label: "Active Users" },
            { value: "5K+", label: "Projects Managed" },
            { value: "95%", label: "Customer Satisfaction" },
            { value: "24/7", label: "Support Available" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                {stat.value}
              </h3>

              <p className="text-indigo-100 mt-2 text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default About;