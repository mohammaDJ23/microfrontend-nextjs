import { useRouter } from 'next/router';

const HomeContent = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => router.push('/')}>Back to root</button>
    </div>
  );
};

export default HomeContent;
