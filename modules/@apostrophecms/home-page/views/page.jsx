export default function ({ page, user, query, empleados }, { Extend, Area }) {
  return (
    <Extend
      templateName="layout.jsx"
      main={
        <section className="bp-welcome">
          <h1 className="bp-welcome__headline">
            Logipet
          </h1>
          {!user && (
            <div className="bp-welcome__area">
              <img src="/images/logo.png" alt="ApostropheCMS logo" />
            </div>
          )}
          <div className="bp-welcome__area">
            {user && (query['apos-edit'] ? (
              <p>Página de inicio...</p>
            ) : (
              <p className="bp-saludo">Bienvenido, {user.firstName} {user.lastName}</p>
            ))}
          </div>

          {user && (
            <div className="bp-empleados">
              <h2>Nuestros usuarios</h2>
              <table className="bp-tabla-empleados">
                <thead>
                  <tr>
                    <th>Nombre y apellido</th>
                    <th>Rol</th>
                    <th>Biografía</th>
                  </tr>
                </thead>
                <tbody>
                  {empleados.map((e) => (
                    <tr key={e._id}>
                      <td>{e.firstName} {e.lastName}</td>
                      <td>{e.role}</td>
                      <td>{e.bio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      }
    />
  );
}