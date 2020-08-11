import {IGroup} from "../../groups/interface/group";

export interface IUser {
  id?: number;
  name?: string;
  email?: string;
  groups_1?: IGroup;
}
