import "./links-content.css";
const Links = () => {
  return (
    <main className="links-page">
      <section className="links-hero">
        <h1>Links to all things GWC!</h1>
        <p>Support us and join our community!</p>
      </section>

      <section className="links-list"> 
        <div className="category a">
        <p className="p2">Applications</p>
        <ul>
          <li>
            <a href="https://forms.gle/ioDjew4mj7nUFb8R6" target="_blank" rel="noopener noreferrer">
              tutoring application form
            </a>
          </li>
          <li>
          <a href="https://forms.gle/f2AD3o6ZqqD8aFkY6" target="_blank" rel="noopener noreferrer">
              web dev team application form
            </a>
          </li>
          <li>
            <a href="https://forms.gle/mE4hwTTs9mWoRv2t9" target="_blank" rel="noopener noreferrer">
             projects sign up form
            </a>
          </li>
         </ul>
        </div>

      <div className="category b">
        <p className="p3">merch</p>
        <ul>
          <li>
            <a href="https://forms.gle/XJP9urmdV6GZCKem8" target="_blank" rel="noopener noreferrer">
              merch voting form
            </a>
          </li>
           <li>
            <a href="https://forms.gle/cXAv8TMN5AncVpDH7" target="_blank" rel="noopener noreferrer">
              merch purchase form
            </a>
          </li>
        </ul>
        </div>
      <div className="category c">
      <p className="p2">social medias</p>
      <ul>
      <li>
            <a href="https://www.linkedin.com/company/girls-who-code-ucf/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/girlswhocodeucf/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://discord.gg/ebKK2pqSBh" target="_blank" rel="noopener noreferrer">
              Discord
            </a>
          </li>
        </ul>
       </div>
      </section>
    </main>
  );
};

export default Links;