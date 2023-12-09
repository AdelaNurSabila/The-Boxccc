export default async function getData() {
  const res = await fetch(
    "https://randomuser.me/api?results=6&nat=us,gb&seed=4a0055fc3f469213"
  );
  const data = await res.json();
  return data.results;
}
