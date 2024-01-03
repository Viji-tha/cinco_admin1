export interface User {
    id: string,
    email: any;
    password: any;
    platformUserId: string,
    
  }
  export interface Role {
    id: number;
    name: string;
    checked?: boolean;
  }