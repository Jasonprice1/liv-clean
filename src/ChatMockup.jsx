import { useState } from "react";

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
    <div style={{
      maxWidth: 400,
      margin: '2rem auto',
      borderRadius: 40,
      overflow: 'hidden',
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(to bottom, #f9f9f9, #ececec)',
      boxShadow: '0 0 30px rgba(0,0,0,0.2)',
      height: 720,
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #ccc',
    }}>
      {/* Status bar */}
      <div style={{
        height: 30,
        backgroundColor: '#f2f2f2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1rem',
        fontSize: 12,
        color: '#555',
        borderBottom: '1px solid #ddd'
      }}>
        <span>9:41</span>
        <div style={{ display: 'flex', gap: 6 }}>
          <span>🔋</span>
          <span>📶</span>
          <span>📳</span>
        </div>
      </div>

      {/* Header bar */}
      <div style={{
        backgroundColor: '#007aff',
        color: '#fff',
        padding: '0.75rem 1rem',
        fontWeight: 'bold',
        fontSize: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <img src="https://i.pravatar.cc/100?img=47" alt="Liv" style={{ width: 32, height: 32, borderRadius: '50%' }} />
        <span>Liv</span>
      </div>

      {/* Chat window */}
      <div style={{ padding: '1rem', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{
            alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            backgroundColor: msg.sender === 'user' ? '#007aff' : '#e5e5ea',
            color: msg.sender === 'user' ? '#fff' : '#000',
            padding: '0.5rem 1rem',
            borderRadius: 16,
            maxWidth: '70%',
          }}>{msg.text}</div>
        ))}
        {isTyping && (
          <div style={{
            alignSelf: 'flex-start',
            backgroundColor: '#e5e5ea',
            padding: '0.5rem 1rem',
            borderRadius: 16,
            maxWidth: '70%',
            display: 'flex',
            gap: 4
          }}>
            <span style={{ width: 6, height: 6, backgroundColor: '#999', borderRadius: '50%', animation: 'pulse 1s infinite alternate' }}></span>
            <span style={{ width: 6, height: 6, backgroundColor: '#999', borderRadius: '50%', animation: 'pulse 1s infinite alternate 0.2s' }}></span>
            <span style={{ width: 6, height: 6, backgroundColor: '#999', borderRadius: '50%', animation: 'pulse 1s infinite alternate 0.4s' }}></span>
          </div>
        )}
      </div>

      {/* Input bar */}
      <div style={{ padding: '1rem', borderTop: '1px solid #eee', display: 'flex', gap: '0.5rem', backgroundColor: '#f9f9f9' }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          style={{
            flex: 1,
            borderRadius: 999,
            padding: '0.5rem 1rem',
            border: '1px solid #ccc',
            fontSize: 14
          }}
          placeholder="iMessage..."
        />
        <button onClick={handleSend} style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#007aff',
          color: '#fff',
          border: 'none',
          borderRadius: 999
        }}>
          Send
        </button>
      </div>
    </div>
  );
}
