import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInbox,
  faPaperPlane,
  faFileAlt,
  faTrashAlt,
  faArchive,
  faExclamationTriangle,
  faUsers,
  faClock,
  faComments,
  faShoppingCart,
  faTag,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="w-64 h-screen bg-black text-white p-4">
      {/* Search Bar */}
      <div className="mb-4">
        <div className="flex items-center bg-gray-800 p-2 rounded-lg">
          <FontAwesomeIcon icon={faSearch} className="text-gray-400 mr-2" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent outline-none text-white w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      
      {/* User Dropdown */}
      <div className="mb-6">
        <button className="w-full flex items-center justify-between bg-gray-800 p-3 rounded-lg">
          <span>Alicia Koch</span>
          <FontAwesomeIcon icon={faTag} />
        </button>
      </div>
      
      {/* Main Folders */}
      <ul className="space-y-3">
        <li className="flex justify-between items-center bg-gray-700 p-2 rounded-lg hover:bg-gray-600">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faInbox} />
            <span>Inbox</span>
          </div>
          <span>128</span>
        </li>
        <li className="flex items-center gap-3 p-2 hover:bg-gray-600"><FontAwesomeIcon icon={faFileAlt} /> Drafts <span className="ml-auto">9</span></li>
        <li className="flex items-center gap-3 p-2 hover:bg-gray-600"><FontAwesomeIcon icon={faPaperPlane} /> Sent</li>
        <li className="flex items-center gap-3 p-2 hover:bg-gray-600"><FontAwesomeIcon icon={faExclamationTriangle} /> Junk <span className="ml-auto">23</span></li>
        <li className="flex items-center gap-3 p-2 hover:bg-gray-600"><FontAwesomeIcon icon={faTrashAlt} /> Trash</li>
        <li className="flex items-center gap-3 p-2 hover:bg-gray-600"><FontAwesomeIcon icon={faArchive} /> Archive</li>
      </ul>
      
      {/* Categories */}
      <div className="mt-6 border-t border-gray-600 pt-4">
        <ul className="space-y-3">
          <li className="flex items-center gap-3 p-2 hover:bg-gray-600"><FontAwesomeIcon icon={faUsers} /> Social <span className="ml-auto">972</span></li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-600"><FontAwesomeIcon icon={faClock} /> Updates <span className="ml-auto">342</span></li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-600"><FontAwesomeIcon icon={faComments} /> Forums <span className="ml-auto">128</span></li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-600"><FontAwesomeIcon icon={faShoppingCart} /> Shopping <span className="ml-auto">8</span></li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-600"><FontAwesomeIcon icon={faTag} /> Promotions <span className="ml-auto">21</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;