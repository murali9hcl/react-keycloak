import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://52.66.251.202:8080",
 realm: "master",
 clientId: "myclient",
});

export default keycloak;