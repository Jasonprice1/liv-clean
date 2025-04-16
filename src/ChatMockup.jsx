import { useState, useEffect, useRef } from 'react';

export default function ChatMockup() {
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'hey u good?' },
    { sender: 'user', text: 'Not much, just pretending to text someone lol' },
    { sender: 'ai', text: 'lol stop 😭 ur so dramatic' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  const responsePool = [
    "what u mean by that?",
    "don’t play dumb rn 😭",
    "no like fr, tell me what’s goin on",
    "👀 interesting...",
    "u always say that lol",
    "is that how u rlly feel?",
    "that’s lowkey cute ngl",
    "lmaoo stoppp 😂",
    "wyd rn?",
    "u b thinking too much"
  ];

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const nextResponse = responsePool[Math.floor(Math.random() * responsePool.length)];

    setMessages(prev => [...prev, { sender: 'user', text: trimmed }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'ai', text: nextResponse }]);
      setIsTyping(false);
    }, 11000);
  };

  return (
    <div style={{
      maxWidth: 400,
      margin: '2rem auto',
      borderRadius: 24,
      boxShadow: '0 0 20px rgba(0,0,0,0.15)',
      fontFamily: 'Arial, sans-serif',
      background: '#fff',
      height: 700,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      border: '1px solid #ddd'
    }}>
      <div style={{
        padding: '1rem',
        borderBottom: '1px solid #eee',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
      }}>
        <img src="https://i.pravatar.cc/100?img=47" alt="Liv" style={{ width: 36, height: 36, borderRadius: '50%' }} />
        <div>
          <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>Liv</div>
          <div style={{ fontSize: '0.75rem', color: '#888' }}>
            {isTyping ? "Typing..." : "Online"}
          </div>
        </div>
      </div>

      <div style={{
        padding: '1rem',
        flex: 1,
        overflowY: 'auto',
        background: '#f7f7f9',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{
            alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            backgroundColor: msg.sender === 'user' ? '#007aff' : '#e5e5ea',
            color: msg.sender === 'user' ? '#fff' : '#000',
            padding: '0.5rem 1rem',
            borderRadius: 16,
            fontSize: 14,
            maxWidth: '75%'
          }}>
            {msg.text}
          </div>
        ))}
        {isTyping && (
          <div style={{
            alignSelf: 'flex-start',
            backgroundColor: '#e5e5ea',
            padding: '0.5rem 1rem',
            borderRadius: 16,
            maxWidth: '60%',
            display: 'flex',
            gap: 4
          }}>
            <span style={dotStyle(0)} />
            <span style={dotStyle(0.2)} />
            <span style={dotStyle(0.4)} />
          </div>
        )}
        <div ref={scrollRef} />
      </div>

      <div style={{
        padding: '0.75rem 1rem',
        borderTop: '1px solid #eee',
        backgroundColor: '#fff',
        display: 'flex',
        gap: '0.5rem'
      }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          placeholder="iMessage..."
          style={{
            flex: 1,
            borderRadius: 999,
            padding: '0.6rem 1rem',
            border: '1px solid #ccc',
            fontSize: 15,
            backgroundColor: '#f9f9f9'
          }}
        />
        <button onClick={handleSend} style={{
          backgroundColor: '#007aff',
          color: '#fff',
          border: 'none',
          borderRadius: 999,
          padding: '0.6rem 1rem',
          fontWeight: 500
        }}>
          Send
        </button>
      </div>
    </div>
  );
}

// Animated typing dot style
function dotStyle(delay = 0) {
  return {
    width: 6,
    height: 6,
    backgroundColor: '#999',
    borderRadius: '50%',
    animation: `bounce 1.2s infinite ease-in-out`,
    animationDelay: `${delay}s`
  };
}
