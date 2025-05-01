interface Mountain {
  id: number;
  capacity: number;
  elevationGain: number;
  night: false;
  name: string;
  status: string;
  trailAccess?: TrailAccess[];
}
interface TrailAccess {
  difficulty: string;
  groomed: boolean;
  id: string;
  name: string;
  night: boolean;
  status: string;
  trees: boolean;
}

async function getMountains() {
  const data = await fetch("https://snowtooth-api-rest.fly.dev");
  return data.json();
}
export default async function Mountains() {
  const mountains = await getMountains();
  return (
    <main>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>Life status info!</h1>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"></div>
          <table>
            <thead>
              <tr>
                <th>Mountain name</th>
                <th>Mountain status</th>
              </tr>
            </thead>
            <tbody>
              {mountains.map((mountain: Mountain) => (
                <tr key={mountain.id}>
                  <td className="mr-2">{mountain.name}</td>
                  <td>{mountain.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
