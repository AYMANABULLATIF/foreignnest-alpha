import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserList.module.css';

function UserList({ users }) {
  return (
    <div className={styles.userList}>
      <h3>Active Users</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.avatar} alt={`${user.name} Avatar`} className={styles.avatar} />
            <span>{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UserList;
