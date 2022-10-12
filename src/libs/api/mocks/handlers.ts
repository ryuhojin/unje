import { rest } from "msw";
import { mockLogin } from "./resolvers/mockAuth";


export const handlers = [
  rest.post("/login",mockLogin),
];
