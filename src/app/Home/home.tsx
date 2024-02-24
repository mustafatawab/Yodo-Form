import React from "react";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to Your MSP Marketplace
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Find the best tools and services for your MSP business
          </p>
          <button className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-full shadow-md">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Key Features
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Testimonials
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <p className="italic text-lg">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              </p>
              <p className="text-gray-600">- John Doe, Company Name</p>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <p className="italic text-lg">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              </p>
              <p className="text-gray-600">- Jane Smith, Company Name</p>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <p className="italic text-lg">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              </p>
              <p className="text-gray-600">- Michael Johnson, Company Name</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-900 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg">
            Join our marketplace today and grow your MSP business
          </p>
          <a href="/register">
            <button className="mt-8 bg-white text-indigo-900 py-2 px-6 rounded-full shadow-md">
              Sign Up
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
