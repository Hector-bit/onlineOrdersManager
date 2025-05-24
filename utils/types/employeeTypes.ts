

export type Employee = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  createdAt: string;
  updatedAt: string;
  status: 'active' | 'inactive';
  role: 'admin' | 'staff' | 'manager';
}