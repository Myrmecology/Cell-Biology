function App() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <h1 style={{ fontSize: '2rem', fontWeight: 600 }}>Cell Biology</h1>
      <p style={{ color: 'var(--color-text-secondary)' }}>
        Interactive 3D cell explorer — under construction.
      </p>
    </div>
  )
}

export default App