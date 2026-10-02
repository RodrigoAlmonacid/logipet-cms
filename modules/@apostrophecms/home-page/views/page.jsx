// The home page. Shows setup guidance to logged-out visitors, an editing hint
// to logged-in ones, and the page's `main` area to everyone.

export default function ({ page, user, query }, { Extend, Area }) {
  return (
    <Extend
      templateName="layout.jsx"
      main={
        <section className="bp-welcome">
          <h1 className="bp-welcome__headline">
            Logipet
          </h1>
          {/* Message only for logged out users. */}
          {!user && (
            <>
              <img src="/images/favicon.png" alt="ApostropheCMS logo" />

            </>
          )}
          <div className="bp-welcome__area">
            {/* Message only for logged in users. */}
            {user && (query['apos-edit'] ? (
              <p>
                editando el home. 👇
              </p>
            ) : (
              <p>
                Enter <span className="bp-mode">Edit</span> mode from the admin bar <span style="display:inline-block; transform: rotate(45deg)">👆</span> to begin.
              </p>
            ))}
            <Area doc={page} name="main" />
          </div>
        </section>
      }
    />
  );
}
