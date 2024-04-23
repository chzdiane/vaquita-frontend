import Modal from "../components/Modal";
import { useState, useEffect } from "react";
import CardGroup from "../components/CardGroup";
import Button from "../components/Button";
import GroupService from "../services/GroupService";

const GroupsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [groups, setGroups] = useState([]);

  const groupData = {
    name: "Nombre del grupo",
    debt: "35.000",
    participants: 7,
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await GroupService.getGroups();
      setGroups(response.data.groups);
    };
    fetchData();
  }, []);

  return (
    <div className="groups lg:w-9/12 lg:mx-auto lg:py-4">
      <div className="flex justify-end m-2">
        <Button onClick={() => setIsOpen(true)} text="Nuevo grupo"/>
      </div>
      <div className="m-3">
        <p className="font-medium">Debes</p>
        <p className="text-red-600 font-bold text-2xl">45.000</p>
        <div className="flex flex-col gap-y-3 lg:flex-row lg:justify-center lg:gap-x-8">
          {groups.map((group) => (
            <CardGroup key={group.id} groupData={group} editButton={true} deleteButton={true}/>
          ))}
          <CardGroup groupData={groupData} editButton={true} deleteButton={true}/>
        </div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export { GroupsPage };
