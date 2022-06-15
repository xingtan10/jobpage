import { useDispatch, useSelector } from "react-redux";
import { FormRow } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { toast } from "react-toastify";
import { useState } from "react";
import { Oval } from "react-loader-spinner";
import { updateUser } from "../../features/user/userSlice";

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: user ? user.name : "",
    email: user ? user.email : "",
    lastName: user ? user.lastName : "",
    location: user ? user.location : "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, lastName, location } = userData;
    if (!name || !email || !lastName || !location) {
      toast.error("Please fill out all fields", { autoClose: 3000 });
      return;
    }
    dispatch(updateUser({ name, email, lastName, location }));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={userData.name}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            labelText="last name"
            name="lastName"
            value={userData.lastName}
            handleChange={handleChange}
          />
          <FormRow
            type="email"
            name="email"
            value={userData.email}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="location"
            value={userData.location}
            handleChange={handleChange}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? (
              <Oval
                ariaLabel="loading-indicator"
                height={10}
                width={10}
                strokeWidth={5}
                color="white"
                secondaryColor="yellow"
              />
            ) : (
              "save changes"
            )}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default Profile;
