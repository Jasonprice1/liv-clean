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
      maxWidth: 390,
      margin: '2rem auto',
      borderRadius: 50,
      overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      backgroundColor: '#fff',
      height: 844,
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 0 40px rgba(0,0,0,0.3)',
      border: '1px solid #ccc',
      position: 'relative',
    }}>
      {/* Status Bar */}
      <div style={{
        height: 44,
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 12px',
        fontSize: 12,
        color: '#111',
        borderBottom: '1px solid #eee',
        fontWeight: 500
      }}>
        <span style={{ fontSize: 16 }}>9:41</span>
        <div style={{ display: 'flex', gap: 6 }}>
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Header */}
      <div style={{
        backgroundColor: '#fff',
        color: '#000',
        padding: '0.75rem 1rem',
        fontWeight: 600,
        fontSize: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #eee'
      }}>
        <span style={{ fontSize: '1.2rem' }}>←</span>
        <div style={{ textAlign: 'center', flexGrow: 1, marginLeft: '-1.2rem' }}>
          <div>Liv</div>
          <div style={{ fontSize: '0.7rem', color: '#888', fontWeight: 400 }}>Online now</div>
        </div>
        <span style={{ width: '1.2rem' }}></span>
      </div>

      {/* Messages */}
      <div style={{
        padding: '1rem',
        flex: 1,
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        backgroundColor: '#f2f2f7'
      }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{
            alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            backgroundColor: msg.sender === 'user' ? '#007aff' : '#e5e5ea',
            color: msg.sender === 'user' ? '#fff' : '#000',
            padding: '0.6rem 1rem',
            borderRadius: 22,
            fontSize: 15,
            lineHeight: 1.3,
            maxWidth: '75%',
            wordWrap: 'break-word'
          }}>{msg.text}</div>
        ))}
        {isTyping && (
          <div style={{
            alignSelf: 'flex-start',
            backgroundColor: '#e5e5ea',
            padding: '0.5rem 1rem',
            borderRadius: 22,
            maxWidth: '75%',
            display: 'flex',
            gap: 4
          }}>
            <span style={{
              width: 6,
              height: 6,
              backgroundColor: '#999',
              borderRadius: '50%',
              animation: 'pulse 1s infinite alternate'
            }}></span>
            <span style={{
              width: 6,
              height: 6,
              backgroundColor: '#999',
              borderRadius: '50%',
              animation: 'pulse 1s infinite alternate 0.2s'
            }}></span>
            <span style={{
              width: 6,
              height: 6,
              backgroundColor: '#999',
              borderRadius: '50%',
              animation: 'pulse 1s infinite alternate 0.4s'
            }}></span>
          </div>
        )}
      </div>

      {/* Input */}
      <div style={{
        padding: '0.75rem 1rem',
        borderTop: '1px solid #ddd',
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
