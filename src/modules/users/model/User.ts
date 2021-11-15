import { v4 as uuidV4 } from "uuid";

class User {
  id?: string;

  name: string;

  admin: boolean;

  email: string;

  created_at?: Date;

  updated_at?: Date;

  constructor() {
    this.id = uuidV4();

    if (!this.created_at) this.created_at = new Date(0);

    if (!this.updated_at) this.updated_at = new Date(0);

    this.admin = false;
  }
}

export { User };
