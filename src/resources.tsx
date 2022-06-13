export default function Resources() {
  return (
    <main>
      <h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-500">
        Resources used for this website
      </h3>
      <ul className="list-disc text-2xl">
        <li>
          <a
            className="no-underline hover:underline"
            href="https://reactjs.org/tutorial/tutorial.html"
          >
            React JS doc Tutorial
          </a>
        </li>
        <li>
          <a
            className="no-underline hover:underline"
            href="https://reactjs.org/docs/hooks-intro.html"
          >
            React Hooks Doc
          </a>
        </li>
        <li>
          <a
            className="no-underline hover:underline"
            href="https://reactrouter.com/docs/en/v6/getting-started/tutorial"
          >
            React Dom Router Doc tutorial
          </a>
        </li>
        <li>
          <a
            className="no-underline hover:underline"
            href="https://tailwindcss.com/docs/utility-first"
          >
            TailWind CSS Docs
          </a>
        </li>
        <li>
          <a
            className="no-underline hover:underline"
            href="https://www.netlify.com/"
          >
            Netlify
          </a>
        </li>
      </ul>
    </main>
  )
}
