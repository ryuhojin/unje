import service from "..";
import { AuthReqProps } from "../interface/AuthProps";

const DEFAULT_HEADER = {};

const login = (data: AuthReqProps) => service.get("/login", data);

export { login };
