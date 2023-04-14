// authguard.js

// Function to check if user is authorized based on roles and component
export const isAuthorized = (roles, component) => {
  //get roles and access from DB 
  //you can fetch the roles and permissions for the component from your database or configuration
  const componentRoles = getRolesForComponent(component);

  // check if the user's roles include any of the required roles for the component
  const authorized = roles.some(role => componentRoles.includes(role));
  
  return authorized;
};
