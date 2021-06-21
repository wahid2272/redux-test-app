import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/users';
import Card from './CardComponent';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);

  useEffect(() => {
    dispatch(getUsers([{
      id: 1,
      name: 'Nabil Ahmed',
      company: {
        name: 'AY Office oy',
        catchPhrase: 'Multi-layered Client-server neural-net',
      }
    }]))
  }, [dispatch]);

  return (
    <div>
      {users.length > 0 && users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
      {users.length === 0 && <p>No users available!</p>}
    </div>
  );
};

export default Users;
