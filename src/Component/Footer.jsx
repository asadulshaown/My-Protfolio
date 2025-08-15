    import React from 'react'

    const Footer = () => {
      return (
      
    <footer class="bg-gray-900 text-gray-300 py-10 mt-20">
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* About / Brand  */}
        <div>
          <h2 class="text-2xl font-bold text-white" data-aos="fade-down">MD ASADUL SHAOWN</h2>
          <p class="mt-4 text-gray-400" data-aos="fade-up">
            Passionate web developer. I build modern, responsive, and accessible websites and web apps.
          </p>
        </div>

       {/* Quick Links  */}
        <div>
          <h3 class="text-xl font-semibold text-white mb-4" data-aos="fade-down">Quick Links</h3>
          <ul class="space-y-2" data-aos="fade-down">
            <li><a href="#abouts" class="hover:text-white">About Me</a></li>

            <li><a href="#projects" class="hover:text-white">Projects</a></li>

            <li><a href="#contacts" class="hover:text-white" >Contact</a></li>

            <li><a href="#resume" class="hover:text-white">Resume</a></li>
          </ul>
        </div>

         {/* Social Media  */}
        <div>
          <a href="#contacts">
              <h3 class="text-xl font-semibold text-white mb-4" data-aos="fade-down">Follow Me</h3>
          </a>
          <div class="flex space-x-4">
            <a href="#" class="hover:text-white text-xl" ><i class="fab fa-facebook"></i></a>

            <a href="#" class="hover:text-white text-xl" ><i class="fab fa-linkedin"></i></a>

            <a href="#" class="hover:text-white text-xl" ><i class="fab fa-github"></i></a>

            <a href="#" class="hover:text-white text-xl" ><i class="fab fa-twitter"></i></a>
          </div>
        </div>

      </div>

       {/* Bottom  */}
      <div class="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; 2025 MD ASADUL SHAOWN. All rights reserved.
      </div>
    </footer>

      )
    }

    export default Footer