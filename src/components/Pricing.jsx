import { Check, X, ArrowRight } from "lucide-react";

function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      description: "Perfect for individuals getting started.",
      features: [
        { name: "Up to 3 projects", included: true },
        { name: "Basic task management", included: true },
        { name: "Personal workspace", included: true },
        { name: "Team collaboration", included: false },
        { name: "Advanced analytics", included: false },
        { name: "Priority support", included: false },
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "₹499",
      description: "Everything you need to grow your team.",
      features: [
        { name: "Unlimited projects", included: true },
        { name: "Advanced task management", included: true },
        { name: "Team collaboration", included: true },
        { name: "Progress tracking", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Priority support", included: true },
      ],
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">

          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">
            Pricing Plans
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
            Simple Pricing,
            <span className="text-indigo-600"> Powerful Results</span>
          </h2>

          <p className="text-gray-500 mt-5 text-lg">
            Choose the right plan for your needs.
            Start for free and upgrade whenever you want.
          </p>

        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {plans.map((plan) => (

            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 border transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.popular
                  ? "border-indigo-600 bg-indigo-50/40 shadow-lg"
                  : "border-gray-200 bg-white"
              }`}
            >

              {/* Popular Badge */}
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-5 py-2 rounded-full text-xs font-semibold">
                  MOST POPULAR
                </span>
              )}

              {/* Plan Details */}
              <h3 className="text-2xl font-bold text-gray-900">
                {plan.name} Plan
              </h3>

              <p className="text-gray-500 mt-3">
                {plan.description}
              </p>

              <div className="flex items-end gap-2 mt-7">

                <h2 className="text-5xl font-bold text-gray-900">
                  {plan.price}
                </h2>

                <span className="text-gray-500 mb-2">
                  / month
                </span>

              </div>

              <div className="border-t border-gray-200 my-8"></div>

              {/* Features */}
              <div className="space-y-5">

                {plan.features.map((feature) => (

                  <div
                    key={feature.name}
                    className="flex items-center gap-3"
                  >

                    {feature.included ? (
                      <Check
                        size={20}
                        className="text-green-600 shrink-0"
                      />
                    ) : (
                      <X
                        size={20}
                        className="text-gray-400 shrink-0"
                      />
                    )}
                    <span
                      className={
                        feature.included
                          ? "text-gray-700"
                          : "text-gray-400"
                      }
                    >
                      {feature.name}
                    </span>

                  </div>

                ))}

              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`mt-10 w-full py-4 rounded-xl flex justify-center items-center gap-2 font-semibold transition ${
                  plan.popular
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                Choose {plan.name}
                <ArrowRight size={18} />
              </a>

            </div>

          ))}

        </div>

        <p className="text-center text-gray-400 text-sm mt-10">
          No credit card required for the Free Plan.
        </p>

      </div>

    </section>
  );
}

export default Pricing;