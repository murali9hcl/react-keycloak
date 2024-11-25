import { useKeycloak } from "@react-keycloak/web";

const PrivateRoute = ({ children }) => {
 const { keycloak } = useKeycloak();

 const isLoggedIn = keycloak.authenticated;

 if (isLoggedIn) { 
    const userRoles = keycloak.tokenParsed.resource_access.myclient.roles; 
    alert('logged in User role:' +  JSON.stringify(keycloak.tokenParsed));
 }

 return isLoggedIn ? children : null;
};

export default PrivateRoute;