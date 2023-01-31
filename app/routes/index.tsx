import { json, LinksFunction } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { Client } from "~/generatedCode/todoApi";
import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

let _stripe: Client;
async function getStripe() {
  if (!_stripe) {
    _stripe = new Client("https://localhost:7166");
  }
  return _stripe;
}

export async function getTodos() {
  const stripe = await getStripe();
  console.log(stripe);
  return json(stripe.usersAll());
}

// let client: Client | null;

// try {
//   client = new Client("https://localhost:7166");
// } catch (error) {
//   console.error(error);
//   client = null;
// }

// export const loader = async () => {
//   if (!client) {
//     return json({
//       error: "Error connecting to database",
//     });
//   }
//   return json({
//     jokeListItems: await client.usersAll(),
//   });
// };

// const client = new Client("https://localhost:7166");

// export async function loader() {
//   return json(await client.usersAll());
// }

export default function IndexRoute() {
  const data = await useLoaderData<typeof getTodos>();

  return (
    <main className="jokes-main">
      <div className="container">
        <div className="jokes-list">
          <p>Users</p>
          <ul>
            {data.map((item) => (
              <li key={item.id}></li>
            ))}
          </ul>
          <Link to="jokes/new" className="button">
            Add your own joke
          </Link>
        </div>
        <div className="jokes-outlet">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
