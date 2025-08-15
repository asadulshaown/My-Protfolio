import Contact from "./Contact";


const Header = () => {

  const newdate = new Date();
  const localTime = newdate.toLocaleTimeString();
  const localDate = newdate.toLocaleDateString()

  return (
    <header className='container mt-1 mb-4 grid grid-cols-3 sticky top-0  bg-slate-100 overflow-x-hidden shadow-md shadow-slate-500 z-10'>

      <div className='hidden md:block'>
        <img  className='w-20 h-20 border-8 m-1 border-black  rounded-full ' src="/Images/profile.jpg" alt="Profile Picture" />
      </div>

       <div className='hidden md:block'>
          <h1 className='logo mt-2  md:text-4xl lg:text-5xl font-serif font-bold'>
          AS ASA      
          </h1>

          <h1 className='inline-block  font-mono font-semibold '>
            {localTime}
          </h1>

          <h1 className='inline-block font-mono font-semibold '>
            {localDate}
          </h1>
       </div>


     
       <div>
         {/* Menu (Desktop)  */}
          <nav class="flex space-x-8 text-gray-700 font-bold  m-5">
            <a href="#abouts" class="hover:text-blue-600">About</a>
            <a href="#projects" class="hover:text-blue-600">Projects</a>
            <a href="#skills" class="hover:text-blue-600">Skills</a>
            <a href="#contacts" class="hover:text-blue-600">Contact</a>
          </nav>

          {/* Mobile Menu Button 
          <div class=" container md:hidden fixed bottom-0 ">
              <Contact />             
        </div> */}

        </div>
            
    </header>
  )
}

export default Header