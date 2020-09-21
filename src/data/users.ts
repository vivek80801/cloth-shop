import { v4 } from "uuid";
import { featureProducts } from "./featureProducts";

interface comment {
  product_id: number,
  comment: string,
  date: string,
}
export type Gender = "Male" | "Female";
export interface user {
  id: string,
  name: string,
  email: string,
  password: string,
  auth: boolean,
  comments?: comment[],
  pursched_Products?: featureProducts[],
  role: string,
  img?: string,
  gender: Gender,
}

export const persons: user[] = [
  {
    id: v4(),
    name: "vivek",
    password: "vivek",
    email: "vivek@gmail.com",
    auth: false,
    role: "admin",
    img: "../themes/images/users/imansyah-muhamad-putera-n4KewLKFOZw-unsplash.jpg",
    gender: "Male"
  },
  {
    id: v4(),
    name: "root",
    password: "root",
    email: "root@gmail.com",
    auth: false,
    role: "admin",
    img: "../themes/images/users/guillaume-issaly-cKuMOZ1-EKQ-unsplash.jpg",
    gender: "Male"
  },
  {
    id: v4(),
    name: "sohan",
    password: "sohan",
    email: "sohan@gmail.com",
    auth: false,
    role: "user",
    img: "../themes/images/users/ludovic-migneault-5xbCj_VWKcs-unsplash.jpg",
    gender: "Male"
  },
  {
    id: v4(),
    name: "rohan",
    password: "rohan",
    email: "rohan@gmail.com",
    auth: false,
    role: "user",
    img: "../themes/images/users/samuel-raita-RiDxDgHg7pw-unsplash.jpg",
    gender: "Male"
  },
  {
    id: v4(),
    name: "mohan",
    password: "mohan",
    email: "mohan@gmail.com",
    auth: false,
    role: "user",
    img: "../themes/images/users/ludovic-migneault-4uj3iZ5m084-unsplash.jpg",
    gender: "Male"
  },
  {
    id: v4(),
    name: "radha",
    password: "radha",
    email: "radha@gmail.com",
    auth: false,
    role: "moderator",
    img: "../themes/images/users/taylor-hernandez-DLKR_x3T_7s-unsplash.jpg",
    gender: "Female"
  },
  {
    id: v4(),
    name: "sona",
    password: "sona",
    email: "sona@gmail.com",
    auth: false,
    role: "user",
    img: "../themes/images/users/theodoris-katis-sQ-fqITaFb8-unsplash.jpg",
    gender: "Female"
  },
  {
    id: v4(),
    name: "mona",
    password: "mona",
    email: "mona@gmail.com",
    auth: false,
    role: "user",
    img: "../themes/images/users/pexels-cole-keister-2388647.jpg",
    gender: "Female"
  },
  {
    id: v4(),
    name: "sita",
    password: "sita",
    email: "sita@gmail.com",
    auth: false,
    role: "user",
    img: "../themes/images/users/andreea-maria-juganaru-Sd9AEzeBqgM-unsplash.jpg",
    gender: "Female"
  },
];
