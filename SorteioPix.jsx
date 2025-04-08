import { useState } from "react";

export default function SorteioPix() {
  const [step, setStep] = useState(1);
  const [ticket, setTicket] = useState(null);

  const gerarCodigo = async () => {
    const numeroFicha = Math.floor(100 + Math.random() * 900);
    const referencia = `SORTEIO-${numeroFicha}`;
    const qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=chavepix@pagbank.com.br%20R$2%20${referencia}`;

    setTicket({ numeroFicha, referencia, qrCode });
    setStep(2);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(to bottom right, #e9d5ff, #bfdbfe)',
      padding: '1.5rem'
    }}>
      <div style={{
        maxWidth: '28rem',
        width: '100%',
        padding: '1.5rem',
        background: '#fff',
        borderRadius: '1.5rem',
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>🎉 Participe do Sorteio!</h1>
        </div>
        {step === 1 && (
          <div style={{ textAlign: 'center' }}>
            <p style={{ marginBottom: '1rem' }}>
              Para participar, pague R$2 via Pix no botão abaixo. Você receberá um número automático do sorteio.
            </p>
            <button onClick={gerarCodigo} style={{
              padding: '0.5rem 1rem',
              border: 'none',
              background: '#9333ea',
              color: '#fff',
              borderRadius: '0.5rem',
              cursor: 'pointer'
            }}>
              Gerar QR Code Pix
            </button>
          </div>
        )}
        {step === 2 && ticket && (
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontWeight: 500 }}>Sua ficha é:</p>
            <p style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#7e22ce' }}>#{ticket.numeroFicha}</p>
            <p style={{ marginTop: '1rem' }}>Pague R$2 usando o QR Code abaixo:</p>
            <img
              src={ticket.qrCode}
              alt="QR Code Pix"
              style={{ margin: '1rem auto', borderRadius: '0.5rem', border: '1px solid #ccc' }}
            />
            <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>
              Referência: <strong>{ticket.referencia}</strong>
            </p>
            <button onClick={() => setStep(1)} style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              border: '1px solid #9333ea',
              color: '#9333ea',
              background: '#fff',
              borderRadius: '0.5rem',
              cursor: 'pointer'
            }}>
              Gerar nova ficha
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
