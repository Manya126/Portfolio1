import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Making API request to: http://localhost:1337/api/abouts?populate=*");
    
    axios
      .get("http://localhost:1337/api/abouts?populate=*")
      .then((response) => {
        // Comprehensive debugging
        console.log("=== FULL RESPONSE DEBUG ===");
        console.log("Status:", response.status);
        console.log("Full response object:", response);
        console.log("Response data:", response.data);
        console.log("Response data type:", typeof response.data);
        console.log("Response data keys:", Object.keys(response.data || {}));
        
        if (response.data.data) {
          console.log("response.data.data:", response.data.data);
          console.log("response.data.data type:", typeof response.data.data);
          console.log("response.data.data is array:", Array.isArray(response.data.data));
          console.log("response.data.data length:", response.data.data?.length);
        }
        
        // Your Strapi uses the newer format where data is directly in the array
        let data = null;
        
        if (response.data.data && Array.isArray(response.data.data) && response.data.data.length > 0) {
          // In newer Strapi versions, data is directly in the array item, not in attributes
          data = response.data.data[0];
          console.log("✓ Using direct data[0]:", data);
        }
        else if (response.data.data && Array.isArray(response.data.data) && response.data.data.length === 0) {
          console.log("✗ Data array is empty - no records found in Strapi");
          setError("No records found in the database. Please add content in Strapi admin.");
        }
        else {
          console.log("✗ Could not determine data structure");
          console.log("Available keys in response.data:", Object.keys(response.data || {}));
        }

        if (data) {
          console.log("Final data to set:", data);
          setAboutData(data);
        } else if (!error) {
          setError("Unable to parse response data structure");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("=== API ERROR ===");
        console.error("Error object:", error);
        console.error("Error message:", error.message);
        console.error("Error response:", error.response);
        console.error("Error status:", error.response?.status);
        console.error("Error data:", error.response?.data);
        
        setError(`API Error: ${error.message} ${error.response?.status ? `(${error.response.status})` : ''}`);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section
        id="about"
        className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
      >
        <div className="flex justify-center items-center min-h-[50vh]">
          <p className="text-white text-center text-xl">Loading...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id="about"
        className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
      >
        <div className="flex justify-center items-center min-h-[50vh]">
          <p className="text-red-500 text-center text-xl">{error}</p>
        </div>
      </section>
    );
  }

  if (!aboutData) {
    return (
      <section
        id="about"
        className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
      >
        <div className="flex justify-center items-center min-h-[50vh]">
          <p className="text-red-500 text-center text-xl">No data found.</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            {aboutData.greeting || "Hi, I am"}
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            {aboutData.name || "Name"}
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            {aboutData.typingTitles && aboutData.typingTitles.length > 0 && (
              <ReactTypingEffect
                text={aboutData.typingTitles}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <span className="text-[#8245ec]">{cursor}</span>
                )}
              />
            )}
          </h3>
          {/* About Me Paragraph */}
          <div className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            {aboutData.description && Array.isArray(aboutData.description) 
              ? aboutData.description.map((block, index) => (
                  <p key={index} className="mb-2">
                    {block.children?.map((child, i) => {
                      let className = "text-gray-400";
                      if (child.bold && child.italic) {
                        className += " font-bold italic";
                      } else if (child.bold) {
                        className += " font-bold";
                      } else if (child.italic) {
                        className += " italic";
                      }
                      
                      return (
                        <span key={i} className={className}>
                          {child.text}
                        </span>
                      );
                    })}
                  </p>
                ))
              : <p className="text-gray-400">{aboutData.description || "No description available"}</p>
            }
          </div>
          {/* Resume Button */}
          {aboutData.resumeUrl && (
            <a
              href={aboutData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
              }}
            >
              DOWNLOAD CV
            </a>
          )}
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-60 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            {aboutData.profileImage?.formats?.medium?.url ? (
              <img
                src={`http://localhost:1337${aboutData.profileImage.formats.medium.url}`}
                alt={aboutData.name || "Profile"}
                className="w-full h-full rounded-full object-contain drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-gray-600 flex items-center justify-center">
                <span className="text-white text-lg">No Image</span>
              </div>
            )}
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;