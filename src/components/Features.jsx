import {
  ClipboardList,
  Users,
  TrendingUp,
  BarChart3,
  ArrowUpRight
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: ClipboardList,
      title: "Task Management",
      description:
        "Create, organize, and prioritize your tasks with an easy-to-use task management system.",
      number: "01",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Connect with your team, share updates, and work together to complete projects faster.",
      number: "02",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description:
        "Track project progress, monitor deadlines, and stay updated on every important task.",
      number: "03",
    },
    {
      icon: BarChart3,
      title: "Smart Analytics",
      description:
        "Get meaningful insights into team performance and improve your productivity.",
      number: "04",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">

          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">
            Our Features
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
            Everything You Need to
            <span className="text-indigo-600"> Work Smarter</span>
          </h2>

          <p className="text-gray-500 mt-5 text-lg">
            Powerful tools designed to simplify your workflow,
            improve collaboration, and help your team achieve more.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.number}
                className="group p-7 rounded-2xl border border-gray-200 bg-white hover:border-indigo-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >

                {/* Card Top */}
                <div className="flex justify-between items-center mb-8">

                  <div className="w-14 h-14 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition">
                    <Icon size={27} />
                  </div>

                  <span className="text-gray-300 font-semibold text-sm">
                    {feature.number}
                  </span>

                </div>

                {/* Card Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-500 leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Bottom Icon */}
                <div className="mt-7 text-indigo-600 flex items-center gap-2 text-sm font-semibold">
                  Learn more
                  <ArrowUpRight
                    size={17}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                  />
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Features;