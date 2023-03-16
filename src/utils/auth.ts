import jwt_decode from "jwt-decode";
import { IDecoded } from "../../typings";

export const getUserCredentials = (response: any, addUser: any) => {
  const decodedCredentials: IDecoded = jwt_decode(response.credential);

  const { name, picture, sub } = decodedCredentials;

  const user = { name, picture, id: sub };

  addUser(user);
};
