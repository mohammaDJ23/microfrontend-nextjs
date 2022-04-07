import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <h1>Root</h1>
      <button onClick={() => router.push('/home')}>go to Home</button>
      <br />
      <button onClick={() => router.push('/about')}>go to About</button>
    </div>
  );
}
