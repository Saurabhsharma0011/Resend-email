import { useState } from 'react';

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setMessage('Email sent successfully!');
        console.log('Email sent:', data);
      } else {
        const error = await response.json();
        setMessage('Failed to send email. Please try again.');
        console.error('Error sending email:', error);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <form onSubmit={handleSendEmail}>
        <button 
          type="submit" 
          disabled={isLoading}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: isLoading ? '#ccc' : '#007cba',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            width: '100%'
          }}
        >
          {isLoading ? 'Sending...' : 'Send Email'}
        </button>
      </form>
      {message && (
        <div 
          style={{
            marginTop: '10px',
            padding: '10px',
            borderRadius: '4px',
            backgroundColor: message.includes('successfully') ? '#d4edda' : '#f8d7da',
            color: message.includes('successfully') ? '#155724' : '#721c24',
            border: `1px solid ${message.includes('successfully') ? '#c3e6cb' : '#f5c6cb'}`
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
}