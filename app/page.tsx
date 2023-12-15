'use client';
 
import { useChat } from 'ai/react';
 
export default function MyComponent() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
 
  return (
    <div>
      <div><h1 className='text-center font-mono'>Chat Bot</h1></div>
      <h1 className='text-[rgb(7, 241, 7)] font-mono'>AI:How may i help you? </h1>
    
      <ul>
        {messages.map((m, index) => (
          <li key={index}>
            {m.role === 'user' ? <h1 className='text-[red]'>User:{m.content} </h1> : <h5 className='text-[rgb(7, 241, 7)] font-mono'>AI:{m.content} </h5>}
            
          </li>
        ))}
      </ul>
 
      <form onSubmit={handleSubmit} className='fixed w-full  bottom-0 border border-gray-300 rounded mb-1 shadow-xl p-2 dark:text-black'>
       
          <input value={input} onChange={handleInputChange} className='w-full text-[red] md:py-2 px-2 text-center font-bold' />
        
        <button type="submit" className='w-full  font-bold bg-red-700 text-white md:py-2 mt-2'>Send</button>
      </form>
    </div>
  );
}