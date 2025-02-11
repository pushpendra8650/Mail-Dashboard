import React, { useState } from 'react';
import { Reply, Forward, Trash2, MoreVertical } from 'lucide-react';

const EmailDetails = ({ mail }) => {
  const [reply, setReply] = useState('');

  if (!mail) return null;

  return (
    <div className='w-100 h-full bg-black p-4 overflow-y-auto text-white flex flex-col border border-gray-500'>
      {/* Top Action Bar */}
      <div className='flex justify-between items-center border-b border-gray-600 pb-2 mb-4'>
        <h3 className='font-bold text-xl'>{mail.sender}</h3>
        <div className='flex space-x-3'>
          <button className='hover:text-blue-500'><Reply size={20} /></button>
          <button className='hover:text-green-500'><Forward size={20} /></button>
          <button className='hover:text-red-500'><Trash2 size={20} /></button>
          <button className='hover:text-gray-400'><MoreVertical size={20} /></button>
        </div>
      </div>

      {/* Email Content */}
      <div className='flex-1'>
        <h4 className='text-lg font-semibold mb-2'>{mail.subject}</h4>
        <p className='text-sm leading-relaxed'>{mail.content}</p>
        <div className='mt-4 space-x-2'>
          {mail.tags?.map(tag => (
            <span key={tag} className='bg-gray-700 px-2 py-1 rounded-md text-sm'>{tag}</span>
          ))}
        </div>
      </div>

      {/* Reply Section */}
      <div className='mt-4 border-t border-gray-600 pt-3'>
        <textarea
          className='w-full bg-gray-800 text-white p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500'
          rows='3'
          placeholder='Write your reply...'
          value={reply}
          onChange={(e) => setReply(e.target.value)}
        ></textarea>
        <button
          className='mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full'
          onClick={() => alert('Reply Sent!')}
        >
          Send Reply
        </button>
      </div>
    </div>
  );
}

export default EmailDetails;
