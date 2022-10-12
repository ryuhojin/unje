import {
  DefaultBodyType,
  PathParams,
  ResponseComposition,
  RestContext,
  RestRequest,
} from "msw";

interface UserProps {
  email: string;
  password: string;
}

const mockLogin = async (
  req: RestRequest<UserProps, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext
) => {
  const { email, password } = req.body;

  if (email !== "interarea" || password !== "aa12345^")
    return res(
      ctx.status(500),
      ctx.json({ errorMessage: "계정정보가 정확하지 않습니다." })
    );

  sessionStorage.setItem("is-authenticated", "true");
  return res(
    ctx.status(200),
    ctx.json({
      email: "interarea@naver.com",
      username: "류호진",
      password: "aa12345^",
    })
  );
};

export { mockLogin };
