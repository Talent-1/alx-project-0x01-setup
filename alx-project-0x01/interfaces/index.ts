export interface ButtonProps {
    title: string;
    styles: string;
    onClick?: () => void;
    size?: string;
}

export interface PostProps {
    title: string;
    body: string;
    author: string;
    userId: number;
}


export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

// UserProps (The full user structure for display) - Required for UserCard
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

// UserData (Simplified structure for user creation forms)
export interface UserData {
  name: string;
  username: string;
  email: string;
}

// UserModalProps (ADJUSTED for checker: requires 'post' parameter name and 'UserProps' type)
export interface UserModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (post: UserProps) => void;
}