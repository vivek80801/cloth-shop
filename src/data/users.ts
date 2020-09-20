import { v4 } from "uuid";
import { featureProducts } from "./featureProducts";

interface comment {
  product_id: number,
  comment: string,
  date: string,
}
export interface user {
  id: string,
  name: string,
  email: string,
  password: string,
  auth: boolean,
  comments?: comment[],
  pursched_Products?: featureProducts[],
  role?:string
}

export const persons: user[] = [
  {
    id: v4(),
    name: "vivek",
    password: "vivek",
    email: "vivek@gmail.com",
    auth: false,
    role:"admin"
  },
  {
    id: v4(),
    name: "root",
    password: "root",
    email: "root@gmail.com",
    auth: false,
    role:"admin"
  },
  {
    id: v4(),
    name: "sohan",
    password: "sohan",
    email: "sohan@gmail.com",
    auth: false,
    role:"user"
  },
  {
    id: v4(),
    name: "rohan",
    password: "rohan",
    email: "rohan@gmail.com",
    auth: false,
    role:"user"

  },
  {
    id: v4(),
    name: "mohan",
    password: "mohan",
    email: "mohan@gmail.com",
    auth: false,
    role:"user"
  },
  {
    id: v4(),
    name: "mohit",
    password: "mohit",
    email: "mohit@gmail.com",
    auth: false,
    role:"moderator"
  },
  {
    id: v4(),
    name: "sona",
    password: "sona",
    email: "sona@gmail.com",
    auth: false,
    role:"user"
  },
  {
    id: v4(),
    name: "mona",
    password: "mona",
    email: "mona@gmail.com",
    auth: false,
    role:"user"
  },
  {
    id: v4(),
    name: "ram",
    password: "ram",
    email: "ram@gmail.com",
    auth: false,
    role:"user"
  },
];
