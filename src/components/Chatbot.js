import React, { useState, useRef, useEffect } from 'react';

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! Ask me anything about my portfolio.' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { from: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    try {
      const res = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await res.json();
      if (data.response) {
        setMessages((prev) => [...prev, { from: 'bot', text: data.response }]);
      } else {
        setMessages((prev) => [...prev, { from: 'bot', text: 'Oops! No response.' }]);
      }
    } catch (error) {
      setMessages((prev) => [...prev, { from: 'bot', text: 'Error contacting server.' }]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  const styles = {
    chatIcon: {
      position: 'fixed',
      bottom: 20,
      right: 20,
      backgroundColor: '#1abc9c',
      border: 'none',
      borderRadius: '50%',
      width: 55,
      height: 55,
      fontSize: 24,
      color: 'white',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      cursor: 'pointer',
      zIndex: 999,
    },
    chatWindow: {
      position: 'fixed',
      bottom: 90,
      right: 20,
      width: '90vw',
      maxWidth: 360,
      height: open ? 440 : 0,
      opacity: open ? 1 : 0,
      backgroundColor: '#fff',
      borderRadius: 16,
      boxShadow: '0 6px 24px rgba(0,0,0,0.2)',
      display: 'flex',
      flexDirection: 'column',
      transition: 'all 0.3s ease',
      overflow: 'hidden',
      zIndex: 998,
    },
    header: {
      backgroundColor: '#1abc9c',
      padding: '15px 20px',
      color: 'white',
      fontWeight: 600,
      fontSize: 18,
      textAlign: 'center',
    },
    messages: {
      flex: 1,
      padding: 15,
      overflowY: 'auto',
      backgroundColor: '#f9f9f9',
    },
    message: (from) => ({
      marginBottom: 12,
      textAlign: from === 'user' ? 'right' : 'left',
    }),
    bubble: (from) => ({
      display: 'inline-block',
      padding: '8px 14px',
      borderRadius: 20,
      backgroundColor: from === 'user' ? '#1abc9c' : '#e2e2e2',
      color: from === 'user' ? 'white' : '#333',
      maxWidth: '80%',
      wordWrap: 'break-word',
    }),
    inputArea: {
      display: 'flex',
      borderTop: '1px solid #ddd',
      padding: 10,
      gap: 10,
    },
    inputBox: {
      flex: 1,
      padding: 10,
      fontSize: 14,
      borderRadius: 20,
      border: '1px solid #ccc',
      outline: 'none',
    },
    sendBtn: {
      backgroundColor: '#1abc9c',
      border: 'none',
      borderRadius: '50%',
      width: 40,
      height: 40,
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
      cursor: 'pointer',
    },
  };

  return (
    <>
      {/* Toggle Button */}
      <button onClick={() => setOpen(!open)} style={styles.chatIcon}>
        💬
      </button>

      {/* Chat Window */}
      <div style={styles.chatWindow}>
        <div style={styles.header}>Chat with Me</div>

        <div style={styles.messages}>
          {messages.map((msg, idx) => (
            <div key={idx} style={styles.message(msg.from)}>
              <span style={styles.bubble(msg.from)}>{msg.text}</span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div style={styles.inputArea}>
          <input
            type="text"
            placeholder="Ask something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            style={styles.inputBox}
          />
          <button onClick={sendMessage} style={styles.sendBtn}>
            ➤
          </button>
        </div>
      </div>
    </>
  );
}     
