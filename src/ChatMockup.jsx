import { useState } from 'react';

export default function ChatMockup() {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "hey u good?" },
    { sender: "user", text: "Not much, just pretending to text someone lol" },
    { sender: "ai", text: "lol stop 😭 ur so dramatic" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { sender: "ai", text: "no like fr, tell me what’s goin on" }
      ]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', border: '1px solid #ccc', borderRadius: 16, overflow: 'hidden', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff', height: 600, display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '1rem', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <img src="https://i.pravatar.cc/100?img=47" alt="Liv" style={{ width: 40, height: 40, borderRadius: '50%' }} />
        <div>
          <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Liv</div>
          <div style={{ fontSize: '0.75rem', color: '#888' }}>Online now</div>
        </div>
      </div>
      <div style={{ padding: '1rem', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{
            alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            backgroundColor: msg.sender === 'user' ? '#007aff' : '#f1f1f1',
            color: msg.sender === 'user' ? '#fff' : '#000',
            padding: '0.5rem 1rem',
            borderRadius: 16,
            maxWidth: '70%'
          }}>{msg.text}</div>
        ))}
        {isTyping && (
          <div style={{ alignSelf: 'flex-start', backgroundColor: '#f1f1f1', padding: '0.5rem 1rem', borderRadius: 16, maxWidth: '70%', display: 'flex', gap: 4 }}>
            <span style={{ width: 6, height: 6, backgroundColor: '#999', borderRadius: '50%', animation: 'pulse 1s infinite alternate' }}></span>
            <span style={{ width: 6, height: 6, backgroundColor: '#999', borderRadius: '50%', animation: 'pulse 1s infinite alternate 0.2s' }}></span>
            <span style={{ width: 6, height: 6, backgroundColor: '#999', borderRadius: '50%', animation: 'pulse 1s infinite alternate 0.4s' }}></span>
          </div>
        )}
      </div>
      <div style={{ padding: '1rem', borderTop: '1px solid #eee', display: 'flex', gap: '0.5rem' }}>
        <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()} style={{ flex: 1, borderRadius: 999, padding: '0.5rem 1rem', border: '1px solid #ccc' }} placeholder="iMessage..." />
        <button onClick={handleSend} style={{ padding: '0.5rem 1rem', backgroundColor: '#007aff', color: '#fff', border: 'none', borderRadius: 999 }}>Send</button>
      </div>
    </div>
  );
}
