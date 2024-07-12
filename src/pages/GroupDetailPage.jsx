import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import CardGroup from "../components/CardGroup";
import CardExpenses from "../components/CardExpenses";
import GroupService from "../services/GroupService";
import Layout from "../components/Layout";
import ModalFriends from "../components/ModalFriends";

const GroupDetailPage = () => {
  const [group, setGroup] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { id } = useParams();

  const expensesData = {
    user: "Juan Guillermo",
    expense: "25.000",
    concept: "Juan Valdez",
    participated: "No participé",
  };

  const handleCreateFriend = async (friend) => {
    if (!friend) {
      setIsOpen(false);
      return;
    }
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    const fetchData = async () => {
      const response = await GroupService.getGroupsById(id);
      setGroup(response.data);
    };
    fetchData();
  }, [id]);

  if (!group) {
    return <p>Cargando...</p>;
  }

  return (
    <Layout>
      <div className="groupById lg:w-9/12 lg:mx-auto lg:py-4">
        <div className="flex justify-between m-2">
          <Button text="Nuevo gasto" />
          <Button onClick={() => setIsOpen(true)} text="Nuevo amigo" />
          <Button text="Editar grupo" />
        </div>
        <CardGroup groupData={group} dropOutButton={true} />
        <h2 className="font-medium text-amber-400 text-lg">Gastos</h2>
        <p className="font-medium text-sm">Enero 2024</p>
        <CardExpenses expensesData={expensesData} />
        {isOpen && (
          <ModalFriends
            isOpen={isOpen}
            handleSubmitFriend={handleCreateFriend}
            externalError={errorMessage}
          />
        )}
      </div>
    </Layout>
  );
};

export { GroupDetailPage };
