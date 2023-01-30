import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import React, { useTransition } from "react";
import { Card, Form, Table } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function IndexRoute() {
  // const transition = useTransition();

  // const text =
  //   transition.state === "submitting"
  //     ? "Saving..."
  //     : transition.state === "loading"
  //     ? "Saved!"
  //     : "Go";
  return (
    <React.Fragment>
      <Card className="mb-3">
        <Card.Body>
          <Table>
            <thead>
              <tr>
                <th>header</th>
                <th>header</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>row</th>
                <th>row</th>
              </tr>
            </tbody>
          </Table>
          <Link to="/jokes">Jokes</Link>
        </Card.Body>
      </Card>
    </React.Fragment>
    // <Form method="post" action="/events">
    //   <legend>Form</legend>
    //   <label>Name</label>
    //   <input type="text" />
    //   <label>Description</label>
    //   <input type="text" />
    //   <nav>
    //     <Link to="/jokes">Jokes</Link>
    //   </nav>
    // </Form>
  );
}
