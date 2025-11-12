import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface Line {
  id: string;
  type: 'command' | 'output';
  text: string;
  prompt?: string;
}
interface CommandStep {
  type: 'command' | 'output';
  text: string;
  prompt?: string;
}
const CISCO_COMMANDS: CommandStep[] = [
  { type: 'command', text: 'whoami', prompt: 'user@you:~$' },
  { type: 'output', text: 'Hi, I\'m Mario Harold Yoku, an IT Network & Systems Engineer with 8+ years of experience.' },
  { type: 'command', text: 'show specialist', prompt: 'user@you:~$' },
  { type: 'output', text: 'specialized in designing, monitoring, and automating complex network infrastructures—including all aspects of data center operations.' },
  { type: 'command', text: 'show love', prompt: 'user@you:~$', },
  { type: 'output', text: 'Love troubleshooting and exploring any tech-related topics - AI, open-sources, self-hosting, automations.' },
  { type: 'command', text: 'show hobbies', prompt: 'user@you:~$', },
  { type: 'output', text: 'gaming, football, Pentesting, Cybersecurity and tinkering with Hardware or Home Labs.' },
];
const TYPING_SPEED = 90;
const COMMAND_PAUSE = 800;
const OUTPUT_PAUSE = 3000;
const RESTART_DELAY = 4000;
const BlinkingCursor: React.FC = () => (
  <span className="bg-green-400 w-2 h-5 inline-block animate-pulse" aria-hidden="true"></span>
);
interface TypingLineProps {
  step: CommandStep;
  onCompleted: () => void;
}
const TypingLine: React.FC<TypingLineProps> = ({ step, onCompleted }) => {
  const [text, setText] = useState('');
  useEffect(() => {
    setText(''); // Reset on step change
    const typeCharacter = (charIndex: number) => {
      if (charIndex >= step.text.length) {
        setTimeout(onCompleted, COMMAND_PAUSE);
        return;
      }
      setText(prev => prev + step.text[charIndex]);
      setTimeout(() => typeCharacter(charIndex + 1), TYPING_SPEED);
    };
    const timeoutId = setTimeout(() => typeCharacter(0), 300);
    return () => clearTimeout(timeoutId);
  }, [step, onCompleted]);
  return (
    <div className="mb-1 break-words">
      <span className="text-gray-400 mr-1">{step.prompt}</span>
      <span className="whitespace-pre-wrap break-words">{text}</span>
      <BlinkingCursor />
    </div>
  );
};
const useTerminalAnimation = (steps: CommandStep[]) => {
  const [lines, setLines] = useState<Line[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    if (currentStepIndex >= steps.length) {
      const timer = setTimeout(() => {
        setLines([]);
        setCurrentStepIndex(0);
      }, RESTART_DELAY);
      return () => clearTimeout(timer);
    }
    const currentStep = steps[currentStepIndex];
    if (currentStep.type === 'output') {   
      const newLine: Line = {
        id: `line-${currentStepIndex}`,
        type: 'output',
        text: currentStep.text,
        prompt: '',
      };
      setLines(prev => [...prev, newLine]);
      const timer = setTimeout(() => {
        setCurrentStepIndex(prev => prev + 1);
      }, OUTPUT_PAUSE);
      return () => clearTimeout(timer);
    }
   
  }, [currentStepIndex, steps]);
  const advanceStep = () => {
    const completedStep = steps[currentStepIndex];
    const newLine: Line = {
        id: `line-${currentStepIndex}`,
        type: 'command',
        text: completedStep.text,
        prompt: completedStep.prompt || '',
    };
    setLines(prev => [...prev, newLine]);
    setCurrentStepIndex(prev => prev + 1);
  };  
  const currentTypingStep = steps[currentStepIndex]?.type === 'command' ? steps[currentStepIndex] : null;
  const isComplete = currentStepIndex >= steps.length;
  const finalPrompt = isComplete ? (steps[0].prompt || '') : null;

  return { lines, currentTypingStep, finalPrompt, advanceStep };
};

interface TerminalProps {
  children: React.ReactNode;
}
const Terminal: React.FC<TerminalProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }); 

  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden flex flex-col h-full w-full">
      <div className="bg-gray-800 px-4 py-3 flex items-center border-b border-gray-700 flex-shrink-0" style={{ height: '44px' }}>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div 
    className="absolute left-1/2 -translate-x-1/2 text-gray-400 text-sm font-sans" 
  >
    Network Engineer Terminal
  </div>
      </div>
      <div ref={scrollRef} className="p-4 font-mono text-green-400 text-sm overflow-y-auto overflow-x-hidden leading-relaxed text-left flex-1" aria-live="polite" style={{ maxWidth: '100%', wordBreak: 'break-word', overflowWrap: 'break-word', whiteSpace: 'pre-wrap' }}>
        <div style={{ maxWidth: '100%', width: '100%' }}>
          {children}
        </div>
      </div>
    </div>
  );
};
const TerminalHero: React.FC = () => {
  const { lines, currentTypingStep, finalPrompt, advanceStep } = useTerminalAnimation(CISCO_COMMANDS);

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto overflow-hidden px-4 sm:px-6 lg:px-8"
      style={{
        height: '400px',
        boxSizing: 'border-box'
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
    >
      <Terminal>
        {lines.map(line => (
          <div key={line.id} className="mb-1" style={{ wordBreak: 'break-word', overflowWrap: 'break-word', maxWidth: '100%' }}>
            <span className="text-gray-400 mr-1">{line.prompt || ''}</span>
            <span className="whitespace-pre-wrap" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>{line.text}</span>
          </div>
        ))}
        {currentTypingStep && (
          <TypingLine step={currentTypingStep} onCompleted={advanceStep} />
        )}
        {finalPrompt && (
           <div className="mb-1">
             <span className="text-gray-400 mr-1">{finalPrompt}</span>
             <BlinkingCursor />
           </div>
        )}
      </Terminal>
    </motion.div>
  );
};

export default TerminalHero;
