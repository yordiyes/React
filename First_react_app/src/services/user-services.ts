import ApiClient from "./Api-client.";

export interface User {
  id: number;
  name: string;
}

class UserService{
  static getAllUsers() {
    return ApiClient.get<User[]>("/users");
  }
}

export default UserService;
