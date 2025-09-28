
import React, { useEffect, useRef } from 'react';
import { type Line } from './types';

interface TerminalProps {
  lines: Line[];
  isTyping: boolean;
  promptWithCursor: string | null;
}

const BlinkingCursor: React.FC = () => (
  <span className="bg-green-400 w-2 h-5 inline-block animate-pulse" aria-hidden="true"></span>
);

const Terminal: React.FC<TerminalProps> = ({ lines, isTyping, promptWithCursor }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines, isTyping, promptWithCursor]);

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
      }}
    >
      <div
        className="flex items-center px-4 py-3"
        style={{
          background: 'rgba(0, 0, 0, 0.2)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm"></div>
        </div>
        <div className="flex-grow text-center text-gray-300 text-sm font-sans tracking-wide">
          Network Engineer Terminal
        </div>
      </div>
      <div
        ref={scrollRef}
        className="p-4 font-mono text-green-400 text-sm overflow-y-auto"
        style={{
          height: '320px',
          background: 'rgba(0, 0, 0, 0.3)',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(0, 217, 255, 0.3) transparent'
        }}
      >
        {lines.map((line, index) => (
          <div key={line.id} className="mb-1" style={{ lineHeight: '1.6' }}>
            <span className="text-cyan-400 font-medium">{line.prompt}</span>
            <span className="whitespace-pre-wrap text-green-300">{line.text}</span>
            {isTyping && index === lines.length - 1 && <BlinkingCursor />}
          </div>
        ))}
        {promptWithCursor !== null && !isTyping && (
           <div className="mb-1" style={{ lineHeight: '1.6' }}>
               <span className="text-cyan-400 font-medium">{promptWithCursor}</span>
               <BlinkingCursor/>
           </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;
