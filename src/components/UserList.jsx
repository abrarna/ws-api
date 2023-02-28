import UserItem from "./UserItem";

const UserList = ({ users, isLoading, error }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }
  return (
    users && (
      <div className="container py-5">
        <div className="row">
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    )
  );
};

export default UserList;
