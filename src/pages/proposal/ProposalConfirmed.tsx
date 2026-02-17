const ProposalConfirmed = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 18
      }}>
        <div style={{
          width: 1,
          height: 28,
          backgroundColor: '#444'
        }} />
        <p style={{
          fontSize: 16,
          color: '#888',
          margin: 0,
          fontWeight: 400
        }}>
          This proposal is no longer active.
        </p>
      </div>
    </div>
  );
};

export default ProposalConfirmed;
