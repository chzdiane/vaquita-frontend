import Modal from "../components/Modal";
import { useState, useEffect } from "react";
import CardGroup from "../components/CardGroup";
import Button from "../components/Button";
import GroupService from "../services/GroupService";
import Layout from "../components/Layout";

const GroupsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [groups, setGroups] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCreateGroup = async (group) => {
    if (!group) {
      setIsOpen(false);
      return;
    }

    try {
      const response = await GroupService.createGroup(group);
      if (response.status === 201) {
        setErrorMessage("");
        setIsOpen(false);
        setGroups([response.data, ...groups]);
      }
    } catch (error) {
      console.info(error);
      if (error.response.status === 409) {
        setErrorMessage(error.response.data.error);
      }
    }
  };

  //Elimina un grupo y se lo envia a la card
  const handleClickDelete = async (id) => {
    alert("¿Estás seguro de que quieres eliminar este grupo?");
    const response = await GroupService.deleteGroup(id);
    console.log(response);
    if (response.status === 204) {
      const newGroups = groups.filter((group) => group.id !== id);
      setGroups(newGroups);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await GroupService.getGroups();
      console.log(response.data);
      setGroups(response.data);
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="groups lg:w-9/12 lg:mx-auto lg:py-4">
        <div className="flex justify-end m-2">
          <Button onClick={() => setIsOpen(true)} text="Nuevo grupo" />
        </div>
        <div className="m-3">
          <p className="font-medium">Debes</p>
          <p className="text-red-600 font-bold text-2xl">45.000</p>
          <div className="flex flex-col gap-y-3 lg:flex-row lg:justify-center lg:gap-x-8">
            {groups.map((group) => (
              <CardGroup
                key={group.id}
                groupData={group}
                editButton={true}
                deleteAction={() => handleClickDelete(group.id)}
              />
            ))}
          </div>
        </div>
        {isOpen && (
          <Modal
            isOpen={isOpen}
            handleSubmitGroup={handleCreateGroup}
            externalError={errorMessage}
          />
        )}
      </div>
    </Layout>
  );
};

export { GroupsPage };
