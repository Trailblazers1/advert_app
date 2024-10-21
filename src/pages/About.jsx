import pic from "../pages/images/vi.jpg";
import pic1 from "../pages/images/mi.jpeg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <Navbar/>
    <div className="bg-gradient-to-b from-gray-500 to-gray-500 text-white p-10 md:p-16 lg:p-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-center mb-12 tracking-wider drop-shadow-lg">
          Welcome to Adport
        </h1>
        <p className="text-xl sm:text-2xl text-center mb-12 leading-relaxed tracking-wide">
          Revolutionizing digital advertising with a dynamic platform that
          effortlessly connects brands and creators. Experience seamless
          advertising with real-time analytics and customizable solutions.
        </p>

        <div className="space-y-16">
          {/* Mission Section */}
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <div className="md:w-1/2 space-y-6 md:text-left text-center">
              <h2 className="text-3xl font-bold mb-4 tracking-tight drop-shadow-md">
                Our Mission
              </h2>
              <p className="leading-relaxed text-lg">
                We empower businesses to reach their audiences through smart,
                data-driven advertising. By bridging the gap between brands and
                customers with transparency and innovative tools, we enable
                effective marketing solutions.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src={pic1}
                alt="Our Mission"
                className="rounded-xl shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out"
              />
            </div>
          </div>

          {/* Vision Section */}
          <div className="flex flex-col md:flex-row-reverse items-center md:space-x-12">
            <div className="md:w-1/2 space-y-6 md:text-left text-center">
              <h2 className="text-3xl font-bold mb-4 tracking-tight drop-shadow-md">
                Our Vision
              </h2>
              <p className="leading-relaxed text-lg">
                Our vision is to become the global leader in digital
                advertising, fostering innovation and customer success. We aim
                to reshape the marketing landscape by making it accessible,
                efficient, and scalable for all.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src={pic}
                alt="Our Vision"
                className="rounded-xl shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out"
              />
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-6 tracking-tight drop-shadow-md">
              Why Choose Us?
            </h2>
            <p className="leading-relaxed text-xl sm:text-2xl max-w-2xl mx-auto">
              Our comprehensive solutions are powered by cutting-edge technology
              and expert support, ensuring that you achieve success with every
              campaign.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default About;
