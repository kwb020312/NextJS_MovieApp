# ๊ฐ์ ์๊ฐ ๐

<img src="./gitImages/LectureLogo.png">

ํด๋น ๊ฐ์๋ ๋ธ๋ง๋์ฝ๋ ๋๊ผด๋ผ์ค ๋์ <a href="https://nomadcoders.co/nextjs-fundamentals/lobby">NextJS ์์ํ๊ธฐ</a>

๋ฅผ ๋ณด๊ณ  ์ ์๋์์์ ๋ฏธ๋ฆฌ ๋ฐํ๋๋ค.

## ๊ฒฐ๊ณผ๋ฌผ ๐

<img src="./gitImages/MainPage.png">

## ์๊ฒ ๋ ์  ๐คญ

<img src="./gitImages/Path.png">

NextJS์ ํน์ด์ ์๋ Routing ๊ธฐ๋ฅ์ด ๋งค์ฐ ๊ตฌ์กฐํ๋์ด ์๋ค๋ ๊ฒ์ธ๋ฐ,
pagesํด๋์ ๊ตฌ์กฐ๋ฅผ ๊ธฐ๋ฐ์ผ๋ก ๊ฒฝ๋ก์ ์ ๊ทผํ์ ๋์ ์ฝํ์ธ ๊ฐ ๊ฒฐ์ ๋๋ค.

์ฆ http://localhost:3000/main ์ pages/main.js์ export default ๋ ํจ์์ return์ ๊ธฐ๋ฐ์ผ๋ก ๋ฐ์ดํฐ๋ฅผ ์ป์ ์ ์๊ฒ๋๋ ๊ฒ

ํน์ด์ ์ผ๋ก๋ ๋ฉ์ธํ์ด์ง๋ index.js ๋ก ์๋ฌด ๊ฒฝ๋ก๊ฐ ์์๊ฒฝ์ฐ ํธ์ถ๋๋ฉฐ,
์๋ชป๋ ๊ฒฝ๋ก์ ๊ฒฝ์ฐ 404.js, ๋์ ์ธ ๊ฒฝ๋ก์ ๊ฒฝ์ฐ [๋ณ์].js ๋ก ๋ฐ์ ์ ์์ผ๋ฉฐ

์ค์ฒฉ๋ ๋์  ๊ฒฝ๋ก์ ๊ฒฝ์ฐ [...๋ณ์].js ํ์ด์ง๋ก ๊ด๋ฆฌ๊ฐ ๊ฐ๋ฅํ๋ค 


## PreRender ๐ฑโ๐

๊ฐ์ฅ ์ ๊ธฐํ๊ณ  ๋ฉ์ง ๊ธฐ๋ฅ์ด์๋๋ฐ, ํ์ด์ง๋ฅผ ๊ทธ๋ ค์ฃผ๊ธฐ ์ด์  ๋ฏธ๋ฆฌ ๋ ๋๋งํ๋ ๊ธฐ๋ฅ์ด๋ค. ํ์ด์ง ์์ ์ฝ๋์์๋ js๋ฅผ ๋ถ๋ฌ์ค๋ ๊ฒ์ด ์๋, html๋ก ์ฝ๋ฉํ ๊ฒ๊ณผ ๊ฐ์ ์ฝ๋๊ฐ ๋ค์ด์๊ธฐ ๋๋ฌธ์ SEO ๊ฒ์ ๋ฑ ๋ค์ํ ๊ฒ์์์ง์๋ ์ ๋ฆฌํ๊ฒ์ ์ ์ ์์

```javascript
// results ๋ ์ฌ์  fetch๋ ๋ฐ์ดํฐ๋ฅผ ๋ด๊ณ  ์์
export default function Home({results}) {
    return ''
}

export async function getServerSideProps() {
    const {results} = await (await fetch(`http://localhost:3000/api/movies`)).json()
    return {
        props: {
            results
        }
    }
}
```

## configํ์ผ ๐

NextJS๋ next.config.jsํ์ผ๋ก config๋ฅผ ์ ์ดํ๋๋ฐ, 

```javascript
module.exports = {
    // StrictMode๋ฅผ ํ์ฑํ ํ ์ง ์ฌ๋ถ
	reactStrictMode: true,
    // source์ ๊ฒฝ๋ก๋ฅผ destination๊ฒฝ๋ก๋ก ์ฌํ ๋นํด์ค
	async redirects() {
		return [
			{
				source: '/old-blog/:path*',
				destination: '/new-sexy-blog/:path*',
				permanent: false
			}
		];
	},
    // source๋ฅผ ํธ์ถํ์ ๋ destination์ผ๋ก ์ฌํธ์ถํด์ค
	async rewrites() {
		return [
			{
				source: '/api/movies',
				destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
			},
			{
				source: '/api/movies/:id',
				destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
			}
		];
	}
};

```