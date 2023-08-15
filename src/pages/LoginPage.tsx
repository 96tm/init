import { useEffect } from "react";
import { apiRoot } from "../core/api/BuildClient";

const LoginPage = () => {

  const authUser = async () => {
      apiRoot.login().post({
        body: {
          email: 'simon@gmail.com',
          password: '150618'
        }
      }).execute()
  }

  // const createUser = async () => {
  //   apiRoot.customers().post({
  //     body: {
  //       email: 'simon@gmail.com',
  //       firstName: 'Dasha',
  //       lastName: 'Belskaya',
  //       password: '150618'
  //     }
  //   }).execute()
  // }

  const getProject = async () => {
    try {
      const products = await apiRoot
        .products()
        .get()
        .execute()

      console.log('products', products)

    } catch (e) {
      console.log(e)
    }
  }

  // const getUserData = () => {
  //   apiRoot.me().get().execute()
  // }

  const getCategories = async () => {
    try {
      const categories = await apiRoot
        .categories().get()
        .execute()

      console.log('categories', categories)

    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getProject()
    getCategories()
    authUser()
    // getUserData()
    // createUser()
  }, [])

  return (
    <>
      <div>Project Details</div>
    </>
  )
};

export default LoginPage;
