export interface IUser {
    id: string;
    role: 'student';
    password: string;
    name: {
      firstName: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender: 'male' | 'female';
    contactNum: string
  }

  
export interface IUserMethods {
  fullName(): string;
}