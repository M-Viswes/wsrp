import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import UserManagerBox from "../UserManagerBox/UserManagerBox";

import Media from "../../../utils/MediaClass";
import User from "../../../utils/UserClass";

import './UserManager.css'

const UserManager = () => {

    const [Users, setUsers] = useState([]);
    const currentuser = useSelector(state => state.user.Username)

    useEffect(() => {
        const fetchData = async() => {
            const MediaObject = new Media();
            const Data = await MediaObject.GetAllUser();
            const OtherUsers = Data.filter(item => item.UserName !== currentuser)
            console.log(OtherUsers);



            if (Data) setUsers(OtherUsers);
        }
        fetchData();
    }, []);

    console.log("Users in the Database: ", Users);

   const updateUserRights = async (ID, userType) => {
        const userObject = new User();
        const MediaObject = new Media();
        for (let i = 0; i < 5; i++) {
            await userObject.UpdateRights(ID, userType);
            const Data = await MediaObject.GetAllUser();
            const OtherUsers = Data.filter(item => item.UserName !== currentuser)
            setUsers(OtherUsers)

        }
    };

    const handleAdminRight = async (ID) => {
        await updateUserRights(ID, "admin");
    };

    const handlePlaylistRight = async (ID) => {
        await updateUserRights(ID, "playlist-maker");
    };

    const handleUserRight = async (ID) => {
        await updateUserRights(ID, "common");
    };

    return (
        <div className="UserManager">
                        {Users.map(item => (
                <UserManagerBox
                    key={item.UserName}
                    value={item}
                    handleadmin={handleAdminRight}
                    handleplaylist={handlePlaylistRight}
                    handleuser={handleUserRight}
                />
            ))}
        </div>
    );
}

export default UserManager;