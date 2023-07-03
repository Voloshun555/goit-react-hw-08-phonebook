import backgroundImage from '../image/2025019.svg';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        <span role="img" aria-label="Greeting icon">
          <img src={backgroundImage} alt="logo" width={400} />
        </span>
      </h1>
    </div>
  );
}
