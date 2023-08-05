import { useEffect } from 'react';
import { useAdminTokenMutation } from '../core/api/authApi';
import { useAppDispatch, useAppSelector } from '../core/store';
import { changeState as changeAdminState } from '../core/store/admin/adminSlice';

const LoginPage = () => {
  const [getToken] = useAdminTokenMutation();
  const dispatch = useAppDispatch();
  const adminToken = useAppSelector((state) => state.admin.token);

  async function init() {
    if (!adminToken) {
      const adminTokenResult = await getToken().unwrap();
      dispatch(changeAdminState({ token: adminTokenResult.access_token }));
    }
  }

  useEffect(() => {
    init();
  }, []);
  return <h3>Login page</h3>;
};

export default LoginPage;
