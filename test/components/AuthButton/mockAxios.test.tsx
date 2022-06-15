import React from "react";
import { render, screen } from "@testing-library/react";
import AuthButton from "@/components/AuthButton";
// import server from "../../mockServer/server";
// import { rest } from "msw";
// import { UserRoleType } from "apis/user";
import axios from "axios";

// const setup = (userType: UserRoleType) => {
//   server.use(
//     rest.get("https://mysite.com/api/role", async (req, res, ctx) => {
//       return res(ctx.status(200), ctx.json({ userType }));
//     })
//   );
// };

describe("AuthButton mock axios", () => {
  it("should display plain user content", async () => {
    // setup("user")
    // jest.spyOn(userUtils, 'getUserRole').mockResolvedValueOnce({
    //     data: {
    //         userType: 'user',
    //     }
    // } as AxiosResponse)
    jest.spyOn(axios, "get").mockResolvedValueOnce({
      data: { userType: "user" },
    });

    render(<AuthButton>hello</AuthButton>);

    expect(await screen.findByText("plain user,hello")).toBeInTheDocument();
  });

  it("should display admin user content", async () => {
    // setup("admin")
    // jest.spyOn(userUtils, 'getUserRole').mockResolvedValueOnce({
    //     data: {
    //         userType: 'admin',
    //     }
    // } as AxiosResponse)
    jest.spyOn(axios, "get").mockResolvedValueOnce({
      data: { userType: "admin" },
    });

    render(<AuthButton>hello</AuthButton>);

    expect(await screen.findByText("admin user,hello")).toBeInTheDocument();
  });
});
