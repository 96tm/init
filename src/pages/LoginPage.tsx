import { useEffect } from 'react';
import {
  apiRoot,
  buildClientWithPasswordFlow,
  customerApiRoot,
} from '../core/api/BuildClient';

const LoginPage = () => {
  const authUser = async () => {
    customerApiRoot
      .login()
      .post({
        body: {
          email: 'simon@gmail.com',
          password: '150618',
        },
      })
      .execute();
  };

  const createUser = async () => {
    apiRoot
      .customers()
      .post({
        body: {
          email: 'simon1@gmail.com',
          firstName: 'Dasha',
          lastName: 'Belskaya',
          password: '150618',
        },
      })
      .execute();
  };

  const getProject = async () => {
    try {
      const products = await apiRoot.products().get().execute();

      console.log('products', products);
    } catch (e) {
      console.log(e);
    }
  };

  // const getUserData = () => {
  //   apiRoot.me().get().execute()
  // }

  const getCategories = async () => {
    try {
      const categories = await apiRoot.categories().get().execute();

      console.log('categories', categories);
    } catch (e) {
      console.log(e);
    }
  };

  async function asyncEffect() {
    buildClientWithPasswordFlow('simon@gmail.com', '150618');
    const loggedIn1 = await customerApiRoot
      .login()
      .post({
        body: {
          email: 'simon@gmail.com',
          password: '150618',
        },
      })
      .execute();
    console.log('logged in 1', loggedIn1);
    const me1 = await customerApiRoot.me().get().execute();
    console.log('me1', me1);

    buildClientWithPasswordFlow('johndoe123@example.com', 'secret123');
    const loggedIn2 = await customerApiRoot
      .login()
      .post({
        body: {
          email: 'johndoe123@example.com',
          password: 'secret123',
        },
      })
      .execute();
    console.log('logged in 2', loggedIn2);
    const me2 = await customerApiRoot.me().get().execute();
    console.log('me2', me2);
  }

  useEffect(() => {
    asyncEffect();
    // getProject()
    // getCategories()
    // authUser()
    // getUserData()
    // createUser()
  }, []);

  return (
    <>
      <div>Project Details</div>
    </>
  );
};

export default LoginPage;
