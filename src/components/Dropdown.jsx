import { useState } from "react";
import { useNavigate } from "react-router-dom";
import profileImage from "../assets/images/profile.png"; 


const DropdownMenu = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const signOut = () => {
        // Clear localStorage or any other storage (if any)
        localStorage.removeItem("authToken"); // or any key you are using to store authentication details
        localStorage.clear(); // if you want to clear all data
    
        // Redirect to login page
        navigate("/");
      };
  
    return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleMenu}
          className="flex items-center space-x-2 focus:outline-none bg-transparent text-white"
          id="user-menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <span className="text-sm font-medium">John Doe</span>
          <img
            className="h-8 w-8 rounded-full"
            src={profileImage}
            alt="User Avatar"
          />
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
              role="menuitem"
              id="menu-item-2"
              onClick={signOut}
            >
              Sign out
            </a>
          </div>
        </div>
      )}
    </div>
    );
  };
  
  export default DropdownMenu;