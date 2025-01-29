export default function Navbar() {
  return (
    <nav className="bg-background border-gray-200 my-1">
  <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 relative">
    
    {/* Hamburger Button for Mobile */}
    <button
      data-collapse-toggle="navbar-cta"
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
      aria-controls="navbar-cta"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>

    {/* Name Section */}
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-white font-mono">
        Aidan Williamson
      </span>
    </a>

    {/* Resume Button */}
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button
        type="button"
        className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center bg-buttonactive hover:bg-buttonactivehover focus:ring-blue-800 font-mono"
      >
        Resume
      </button>
    </div>

    {/* Navbar Links (visible on medium and larger screens) */}
    <div
      className="absolute left-1/2 transform -translate-x-1/2 w-full md:flex md:w-auto md:order-1 font-mono"
      id="navbar-cta"
    >
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-14 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 justify-center w-full">
        <li>
          <a
            href="#"
            className="block py-2 px-3 md:p-0 text-white bg-buttonactive rounded-sm md:bg-transparent md:text-buttonactive"
            aria-current="page"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 md:p-0 rounded-sm md:hover:text-buttonactive text-white hover:bg-buttonactive hover:text-white md:hover:bg-transparent border-gray-700"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 md:p-0 rounded-sm md:hover:text-buttonactive text-white hover:bg-buttonactive hover:text-white md:hover:bg-transparent border-gray-700"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
}
