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


// --- INTERFACE DEFINITION ---
// Based on the provided JSON data structure

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

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

export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

// --- INTERFACES ---

// UserData structure based on the sample provided (simplified for form input)
interface Geo { lat: string; lng: string; }
interface Address { street: string; suite: string; city: string; zipcode: string; geo: Geo; }
interface Company { name: string; catchPhrase: string; bs: string; }

// Full UserData interface (matching UserProps structure)
export interface UserData {
    id?: number; // Optional since it's a new user
    name: string;
    username: string;
    email: string;
    phone?: string;
    website?: string;
    address?: Address;
    company?: Company;
}

// UserModalProps interface
export interface UserModalProps {
    isOpen: boolean;
    onClose: () => void;
    // Function to handle submission of new user data (simplified to main fields for the form)
    onSubmit: (user: { name: string, username: string, email: string }) => void;
}