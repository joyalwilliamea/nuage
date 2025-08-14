import { useState } from 'react';
import bg from './assets/bg.png';
import logo from './assets/logo.svg';
import NotifyMeForm from './NotifyMeForm';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div
      className="min-h-screen w-full flex flex-col justify-between bg-[#f6f0ea] font-sans relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center flex-1 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10 py-8 sm:py-12 md:py-16">
        <div className="text-center mx-auto flex flex-col items-center justify-center max-w-2xl">
          <img src={logo} alt="NUAGE Logo" className="w-3/5 sm:w-3/5 md:w-3/5 lg:w-4/5 xl:w-4/5 mb-8 sm:mb-12 md:mb-16 object-contain" />
          <p className="text-sm sm:text-normal md:text-md lg:text-lg xl:text-xl mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 font-PTSans text-black text-center px-2 sm:px-4  ">
            TIMELESS ELEGANCE COMING SOON
          </p>
          <button 
            onClick={() => setIsFormOpen(true)}
            style={{ fontWeight: 'lighter' }}
            className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-black text-white text-sm sm:text-base md:text-lg font-PTSans font-normal rounded-none flex items-center gap-2 hover:bg-neutral-800 transition-colors duration-200 mx-auto shadow-md hover:shadow-lg active:scale-95 transform transition-transform"
          >
            Notify Me
            <span className="inline-block ml-1 sm:ml-2">
              <svg className="w-5 h-4 sm:w-6 sm:h-5 md:w-7 md:h-6" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.11687 11.6107L22.0278 11.6373L21.2982 12.1054C20.2434 12.7823 18.4732 14.6207 17.8394 15.6977C16.9171 17.2647 16.2996 19.2947 16.2996 20.7596L16.2996 21.4539L16.9175 21.4539L17.5354 21.4539L17.6071 20.6574C18.0426 15.8187 21.7332 12.1211 26.5561 11.6912C27.2053 11.6334 27.7958 11.5856 27.8682 11.5852C27.9585 11.5846 28 11.389 28 10.964L28 10.3436L26.9379 10.214C24.5939 9.92797 22.6314 8.94961 21.0357 7.27156C19.4119 5.5637 18.5315 3.65208 18.3302 1.39629L18.2497 0.494228L17.6423 0.462392C17.1519 0.436603 17.0218 0.46483 16.967 0.60863C16.8677 0.869167 17.1986 3.03507 17.4602 3.83716C18.2537 6.26996 19.8841 8.42291 21.9728 9.79563L22.7566 10.3108L8.48126 10.3108L-4.8708e-07 10.3108L-4.59252e-07 10.9474L-4.31423e-07 11.584L8.11687 11.6107Z" fill="white" />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <footer className="w-full text-center py-4 sm:py-6 md:py-8 text-xs sm:text-sm md:text-base text-black opacity-70 px-4 sm:px-6 md:px-8 font-PT-Sans relative z-10">
        © 2025 NUAGE. All rights reserved.
      </footer>
      
      <NotifyMeForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </div>
  );
}

export default App;