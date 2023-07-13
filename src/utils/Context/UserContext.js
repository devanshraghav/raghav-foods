import { createContext } from "react";

const UserContext = createContext({
    name: "Dummy",
    email: "dummy@gmail.com"
});

export default UserContext;