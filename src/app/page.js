import css from './page.module.css'


async function getData() {
  const res = await fetch('https://api.github.com/users/jamj2000')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()

}


export default async function Page() {
  // Para introducir un retardo de tiempo
  await new Promise(resolve => setTimeout(resolve, 4000));

  const data = await getData()
  // console.log(data);

  return (
    <main className={css.main}>
      <h1>{data.name}</h1>
      <img src={data.avatar_url} />
    </main>
  )
}