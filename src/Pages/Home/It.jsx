import React from "react";
export default function MyPortfolio() {
  return (
    <section className="portfolio--section bg-gray-100 py-10" id="MyPortfolio">
      <div className="portfolio--container-box max-w-6xl mx-auto">
        <div className="portfolio--container text-center mb-10">
          <h2 className="section--heading text-4xl font-bold text-teal-500">Business Activities</h2>
          <p className="sub--title text-xl text-gray-500 mt-2">IT Support & Software Development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-semibold text-teal-500 mb-4">IT Support</h3>
            <p className="text-gray-600">
              We provide comprehensive IT support services to ensure your systems operate smoothly.
              Our team is dedicated to resolving technical issues and maximizing uptime.
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
              <li>24/7 Technical Support</li>
              <li>Network Maintenance</li>
              <li>Hardware and Software Troubleshooting</li>
              <li>Cloud Services and Virtualization</li>
              <li>Security and Compliance Management</li>
            </ul>
            <p className="extra-info mt-4 text-teal-500">
              Our proactive approach to IT management helps prevent issues before they arise.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-semibold text-teal-500 mb-4">Software Development</h3>
            <p className="text-gray-600">
              Our software development team creates custom solutions tailored to your business needs.
              We specialize in building scalable applications that drive efficiency and innovation.
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
              <li>Custom Application Development</li>
              <li>Mobile and Web Solutions</li>
              <li>System Integration</li>
              <li>API Development and Integration</li>
              <li>Data Management and Analytics</li>
            </ul>
            <p className="extra-info mt-4 text-teal-500">
              We deliver solutions that evolve with your business and support growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
