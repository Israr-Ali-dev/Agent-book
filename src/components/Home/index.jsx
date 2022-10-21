export default function Home() {
  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;

  return <div>home</div>;
}
