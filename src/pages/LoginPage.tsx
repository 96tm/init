import { getProducts, getProject } from '../core/api/methods';

const LoginPage = () => {
  getProject().then(console.log).catch(console.error);

  console.log(getProducts());

  return <h3>Login page</h3>;
};

export default LoginPage;
