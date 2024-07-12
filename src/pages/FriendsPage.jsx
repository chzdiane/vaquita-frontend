import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import UserService from "../services/UserServices";
import CardGroup from "../components/CardGroup";

const FriendsPage = () => {

  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await UserService.getAll();
      console.log(response.data);
      setFriends(response.data);
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="lg:w-9/12 lg:mx-auto lg:py-4">
        <div className="flex justify-center m-2">
          <h1 className="font-bold text-amber-950 text-lg">Amigos</h1>
        </div>
        <div className="m-3">
          <div className="flex flex-col gap-y-3 lg:flex-row lg:justify-center lg:gap-x-8">
            {friends.map((friends) => (
              <CardGroup
                key={friends.id}
                groupData={friends}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export { FriendsPage };
