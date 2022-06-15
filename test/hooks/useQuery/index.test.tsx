import React from "react";
import useQuery from "hooks/useQuery";
import { createMemoryHistory, InitialEntry } from "history";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";

const setup = (initialEntries: InitialEntry[]) => {
  const history = createMemoryHistory({
    initialEntries,
  });

  const returnValue = {
    query: new URLSearchParams(),
  };

  const TestComponent = () => {
    const query = useQuery();

    Object.assign(returnValue, { query });

    return null;
  };

  render(
    <Router location={history.location} navigator={history}>
      <TestComponent />
    </Router>
  );

  return returnValue;
};

describe("useQuery", () => {
  it("should fetch url search params", () => {
    const { query } = setup([
      {
        pathname: "/home",
        search: "?id=1234",
      },
    ]);

    expect(query.get("id")).toEqual("1234");
  });

  it("should get null when search is blank", () => {
    const { query } = setup([
      {
        pathname: "/home",
      },
    ]);

    expect(query.get("id")).toBeNull();
  });
});
