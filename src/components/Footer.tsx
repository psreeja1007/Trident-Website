
export const Footer = () => {
  return (
    <footer className="w-full py-10 bg-transparent flex justify-center">
      <div className="flex flex-col items-center text-center gap-3">

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-purple-800">Trident</h2>

        {/* TAGLINE */}
        <p className="text-purple-700 text-sm -mt-1">
          your home away from home
        </p>

        {/* SOCIALS */}
        <div className="flex gap-4 mt-2">
          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/company/trident-hostel-15/posts/?feedView=all"
            target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-purple-300 hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="#7c3aed" viewBox="0 0 16 16">
              <path d="M1.5 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM0 5h3v10H0V5zm5 
              0h3v1.5h.1c.4-.7 1.4-1.5 2.9-1.5C15 5 16 6.5 16 9.3V15h-3V9.8c0-1.2-.4-2-1.4-2-1 
              0-1.6.7-1.6 2V15H7V5z"/>
            </svg>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/trident.iitb/"
            target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-purple-300 hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="#7c3aed" viewBox="0 0 16 16">
              <path d="M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
              <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 
              3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm10 2a1 1 0 0 1 1 
              1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 
              1 0 0 1 1-1h10z"/>
              <circle cx="12.5" cy="3.5" r="1" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};
