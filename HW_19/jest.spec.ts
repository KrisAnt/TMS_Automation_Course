import superagent from "superagent";
import { Request } from "./Requests";

describe("API test, POST request, successful", () => {
  it("Create user", async () => {
    const createUserData = Request.CreateUser;
    try {
      const request = superagent
        .post(`https://reqres.in/${createUserData.url}`)
        .send(createUserData.body)
        .set(createUserData.headers);
      request.method = createUserData.method;
      const response = await request;
      console.log(response.body);
      expect(response.status).toBe(201);
    } catch (err: any) {
      expect(err.message).toBe("");
    }
  });
  it("Register user", async () => {
    const registerUserData = Request.Register;
    try {
      const request = superagent
        .post(`https://reqres.in/${registerUserData.url}`)
        .send(registerUserData.body)
        .set(registerUserData.headers);
      request.method = registerUserData.method;
      const response = await request;
      console.log(response.body);
      expect(response.status).toBe(200);
    } catch (err: any) {
      expect(err.message).toBe("");
    }
  });
  it("Login user", async () => {
    const loginUserData = Request.Login;
    try {
      const request = superagent
        .post(`https://reqres.in/${loginUserData.url}`)
        .send(loginUserData.body)
        .set(loginUserData.headers);
      request.method = loginUserData.method;
      const response = await request;
      console.log(response.body);
      expect(response.status).toBe(200);
    } catch (err: any) {
      expect(err.message).toBe("");
    }
  });
});
describe("API test, POST request, failed", () => {
  it("Register user failure", async () => {
    const registerFailedUserData = Request.RegisterFailed;
    try {
      const request = superagent
        .post(`https://reqres.in/${registerFailedUserData.url}`)
        .send(registerFailedUserData.body)
        .set(registerFailedUserData.headers);
      request.method = registerFailedUserData.method;
      const response = await request;
      console.log(response.body);
      expect(response.status).toBe(400);
    } catch (err: any) {
      expect(err.message).toBe("Bad Request");
    }
  });
  it("Login user failure", async () => {
    const loginFailedUserData = Request.LoginFailed;
    try {
      const request = superagent
        .post(`https://reqres.in/${loginFailedUserData.url}`)
        .send(loginFailedUserData.body)
        .set(loginFailedUserData.headers);
      request.method = loginFailedUserData.method;
      const response = await request;
      console.log(response.body);
      expect(response.status).toBe(400);
    } catch (err: any) {
      expect(err.message).toBe("Bad Request");
    }
  });
});
describe("API test, GET request, successful", () => {
  it("User list", async () => {
    const userList = Request.UserList;
    try {
      const response = await superagent.get(
        `https://reqres.in/${userList.url}`
      );
      console.log(response.body);
      expect(response.status).toBe(200);
    } catch (err: any) {
      expect(err.message).toBe("");
    }
  });
  it("Single user", async () => {
    const singleUser = Request.SingleUser;
    try {
      const response = await superagent.get(
        `https://reqres.in/${singleUser.url}`
      );
      console.log(response.body);
      expect(response.status).toBe(200);
    } catch (err: any) {
      expect(err.message).toBe("");
    }
  });
  it("Delayed response", async () => {
    const delayResponse = Request.DelayResponse;
    try {
      const response = await superagent.get(
        `https://reqres.in/${delayResponse.url}`
      );
      console.log(response.body);
      expect(response.status).toBe(200);
    } catch (err: any) {
      expect(err.message).toBe("");
    }
  });
});
describe("API test, GET request, failed", () => {
  it("Single user not found", async () => {
    const singleUserFail = Request.SingleUserFailed;
    try {
      const response = await superagent.get(
        `https://reqres.in/${singleUserFail.url}`
      );
      console.log(response.body);
    } catch (err: any) {
      expect(err.response.statusCode).toBe(404);
    }
  });
  it("Single resource not found", async () => {
    const singleResourceFail = Request.SingleResourceFailed;
    try {
      const response = await superagent.get(
        `https://reqres.in/${singleResourceFail.url}`
      );
      console.log(response.body);
    } catch (err: any) {
      expect(err.response.statusCode).toBe(404);
    }
  });
});
describe("API test, PUT request, success", () => {
  it("Update user", async () => {
    const updateUser = Request.UpdateUser;
    try {
      const response = await superagent
        .put(`https://reqres.in/${updateUser.url}`)
        .send(updateUser.body);
      console.log(response.body);
      expect(response.status).toBe(200);
    } catch (err: any) {
      expect(err.message).toBe("");
    }
  });
});
describe("API test, DELETE request", () => {
  it("Delete user", async () => {
    const updateUser = Request.UpdateUser;
    try {
      const response = await superagent
        .delete(`https://reqres.in/${updateUser.url}`)
        .send(updateUser.body);
      console.log(response.body);
      expect(response.status).toBe(204);
    } catch (err: any) {
      expect(err.message).toBe("");
    }
  });
});
