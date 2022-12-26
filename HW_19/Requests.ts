export class Request {
  private constructor(
    public readonly method: string,
    public readonly headers: object,
    public readonly url: string,
    public readonly body?: object
  ) {}
  public static readonly CreateUser = new Request(
    "POST",
    { "Content-type": "application/json" },
    "api/users",
    {
      name: "morpheus",
      job: "leader",
    }
  );
  public static readonly Register = new Request(
    "POST",
    { "Content-type": "application/json" },
    "api/register",
    {
      email: "eve.holt@reqres.in",
      password: "pistol",
    }
  );
  public static readonly Login = new Request(
    "POST",
    { "Content-type": "application/json" },
    "api/login",
    {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    }
  );
  public static readonly RegisterFailed = new Request(
    "POST",
    { "Content-type": "application/json" },
    "api/register",
    {
      email: "eve.holt@reqres.in",
    }
  );
  public static readonly LoginFailed = new Request(
    "POST",
    { "Content-type": "application/json" },
    "api/login",
    {
      email: "peter@klaven",
    }
  );
  public static readonly UserList = new Request(
    "GET",
    { "Content-type": "application/json" },
    "api/users?page=2"
  );
  public static readonly SingleUser = new Request(
    "GET",
    { "Content-type": "application/json" },
    "api/users/2"
  );
  public static readonly DelayResponse = new Request(
    "GET",
    { "Content-type": "application/json" },
    "api/users?delay=3"
  );
  public static readonly SingleUserFailed = new Request(
    "GET",
    { "Content-type": "application/json" },
    "api/users/23"
  );
  public static readonly SingleResourceFailed = new Request(
    "GET",
    { "Content-type": "application/json" },
    "api/unknown/23"
  );
  public static readonly UpdateUser = new Request(
    "PUT",
    { "Content-type": "application/json" },
    "api/users/2",
    {
      name: "morpheus",
      job: "zion resident",
    }
  );
  public static readonly DeleteUser = new Request(
    "PUT",
    { "Content-type": "application/json" },
    "api/users/2"
  );
}
