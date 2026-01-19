import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { generateLocalChatResponse } from '../services/localChatbot';
import { ChatMessage } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const PixcidentChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '👋 Hi! I\'m here to help you bring your vision to life. Whether you need stunning 3D renders, a lightning-fast website, or AI-powered automation—I can show you how Pixcident solves your challenges. What are you looking to achieve?', timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userText, timestamp: new Date() }]);
    setIsLoading(true);

    // Get conversation history (last 5 messages for context)
    const history = messages.filter(m => m.role === 'user').slice(-5).map(m => m.text);
    const responseText = await generateLocalChatResponse(userText, history);

    setMessages(prev => [...prev, { role: 'model', text: responseText, timestamp: new Date() }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 p-4 bg-brand-orange text-white rounded-full shadow-2xl hover:bg-orange-600 transition-colors flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <Bot size={28} className="group-hover:animate-pulse" />
        <span className="absolute right-full mr-4 bg-white text-black px-2 py-1 text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Ask Pixcident AI
        </span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-full max-w-sm h-[500px] bg-brand-dark border border-brand-gray rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-brand-black border-b border-brand-gray flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bot className="text-brand-orange" size={20} />
                <h3 className="font-display font-bold text-white tracking-wide">PIXCIDENT AI</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close chat"
                title="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-950/90 backdrop-blur-sm">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-xl text-sm leading-relaxed ${msg.role === 'user'
                      ? 'bg-brand-orange text-white rounded-br-none'
                      : 'bg-brand-gray text-zinc-200 rounded-bl-none border border-zinc-800'
                      }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-brand-gray p-3 rounded-xl rounded-bl-none flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-brand-orange" />
                    <span className="text-xs text-gray-400">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-brand-black border-t border-brand-gray flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about our services..."
                className="flex-1 bg-brand-gray text-white text-sm rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-brand-orange border border-transparent placeholder-zinc-500"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="p-3 bg-brand-orange text-white rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Send message"
                title="Send message"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PixcidentChat;