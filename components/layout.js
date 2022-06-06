
export default function Layout({ children }) {
  return <>
    <div className="container">{children}</div>
    <style jsx>{`
      .container {
        max-width: 36rem;
        padding: 0 1rem;
        margin: 3rem auto 6rem;
      }
    `}</style>
    </>;
}


