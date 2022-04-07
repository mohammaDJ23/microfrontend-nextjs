import { useRouter } from 'next/router';

const AboutContent = () => {
  const router = useRouter();

  return (
    <div>
      <h1>About</h1>
      <button onClick={() => router.push('/')}>Back to root</button>
    </div>
  );
};

export default AboutContent;
