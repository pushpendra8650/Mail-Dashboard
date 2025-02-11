import React, { useState } from 'react';
import Sidebar from './Sidebar';
import EmailDetails from './EmailDetails';

const Dashboard = () => {
  const [selectedMail, setSelectedMail] = useState(null);

  const mails = [
    { id: 1, sender: 'William Smith ', subject: 'Meeting Tomorrow Hi, let\'s have a meeting tomorrow to discuss . It looks great!  It looks ', content: 'Hi, let\'s have a meeting tomorrow to discuss the project.', tags: ['meeting', 'work', 'important'] },
    { id: 2, sender: 'Alice Smith', subject: 'Re: Project Update', content: 'Thank you for the project update. It looks great!', tags: ['work', 'important'] },
    { id: 3, sender: 'Bob Johnson', subject: 'Weekend Plans', content: 'Any plans for the weekend? Let\'s go hiking!', tags: ['personal'] },
    { id: 4, sender: 'William Smith ', subject: 'Meeting Tomorrow Hi, let\'s have a meeting tomorrow to discuss . It looks great!', content: 'Hi, let\'s have a meeting tomorrow to discuss the project the project update. It looks great.', tags: ['meeting', 'work', 'important'] },
    { id: 5, sender: 'Alice Smith', subject: 'Re: Project Update', content: 'Thank you for the project update. It looks great!', tags: ['work', 'important'] },
    { id: 6, sender: 'Bob Johnson', subject: 'Weekend Plans', content: 'Any plans for the weekend? Let\'s go hiking!', tags: ['personal'] },
    { id: 7, sender: 'William Smith ', subject: 'Meeting Tomorrow Hi, let\'s have a meeting tomorrow to discuss . It looks great!  It looks ', content: 'Hi, let\'s have a meeting tomorrow to discuss the project.', tags: ['meeting', 'work', 'important'] },
    { id:8, sender: 'Alice Smith', subject: 'Re: Project Update', content: 'Thank you for the project update. It looks great!', tags: ['work', 'important'] },
    { id: 9, sender: 'Bob Johnson', subject: 'Weekend Plans', content: 'Any plans for the weekend? Let\'s go hiking!', tags: ['personal'] },
    { id: 10, sender: 'William Smith ', subject: 'Meeting Tomorrow Hi, let\'s have a meeting tomorrow to discuss . It looks great!', content: 'Hi, let\'s have a meeting tomorrow to discuss the project.', tags: ['meeting', 'work', 'important'] },
    { id: 11, sender: 'Alice Smith', subject: 'Re: Project Update', content: 'Thank you for the project update. It looks great!', tags: ['work', 'important'] },
    { id: 12, sender: 'Bob Johnson', subject: 'Weekend Plans', content: 'Any plans for the weekend? Let\'s go hiking!', tags: ['personal'] }

  ];

  return (
    
    <div className='flex w-full h-screen  overflow-y-hidden border-gray-500'>
      {/* Sidebar */}
      <div className=' w-70 h-screen border-gray-500'><Sidebar /></div>

      {/* Email List Section */}
      <div className="left-63  overflow-auto scrollbar-hide border border-gray-500">
      
        <input
        type="text"
        placeholder="Search emails..."
        className="w-full p-2 mb-4 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
        
       
      />
        <div className="space-y-3 w-full ">
          {mails.map((mail) => (
            <div
              key={mail.id}
              className="bg-black p-3 rounded-lg cursor-pointer hover:bg-gray-700 w-full text-white mb-1"
              onClick={() => setSelectedMail(mail)}
            >
              <h3 className="font-bold ">{mail.sender}</h3>
              <p className="text-sm h-22">{mail.subject}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex p-4  border-gray-500'>
      {/* Email Details Section */}
      {selectedMail && <EmailDetails mail={selectedMail} />}
      </div>
    </div>
  );
}

export default Dashboard;


