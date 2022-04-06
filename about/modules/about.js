import { useRouter } from 'next/router';

const About = () => {
  const router = useRouter();

  return (
    <div>
      <h1>About</h1>
      <button onClick={() => router.push('/')}>back to home</button>
    </div>
  );
};

export default About;
