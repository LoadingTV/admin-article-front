// src/types/user.ts

export interface User {
  user_id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  role_id: number;
  role: Role;
}

export interface Role {
  role_id: number;
  role_name: string;
}
