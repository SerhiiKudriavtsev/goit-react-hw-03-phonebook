export const App = () => {
  const obj = {
  a: 'somestring',
  b: 42
};

for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};
