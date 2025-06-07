import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const SidebarDrawer = ({
  isSidebarOpen,
  setIsSidebarOpen,
  menuItems,
}) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed top-20 left-0 h-[calc(100vh-5rem)] w-48 md:w-64 z-50 transition-transform duration-300 transform bg-[rgba(128,128,128,0.4)] backdrop-blur-md border border-gray-400 text-white rounded-r-2xl shadow-md p-4 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <aside className="w-full h-full overflow-y-auto">
          <ul className="space-y-3">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    navigate(item.path);
                    setIsSidebarOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 rounded-xl text-base text-white hover:bg-black hover:text-white hover:[text-shadow:_0_0_6px_white] focus:bg-black focus:text-white focus:[text-shadow:_0_0_8px_white] transition-all duration-300 shadow-sm"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* Toggle Button */}
      <button
        className="fixed top-3/4 left-0 z-50 rounded-r-full shadow-md transition-transform duration-300"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <div className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 border border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 32 32"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 md:size-6 drop-shadow"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isSidebarOpen
                  ? 'M5.25 4.5l7.5 7.5-7.5 7.5M11.25 4.5l7.5 7.5-7.5 7.5'
                  : 'M18.75 4.5l-7.5 7.5 7.5 7.5M12.75 4.5L5.25 12l7.5 7.5'
              }
            />
          </svg>
        </div>
      </button>
    </>
  );
};

SidebarDrawer.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  setIsSidebarOpen: PropTypes.func.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};
