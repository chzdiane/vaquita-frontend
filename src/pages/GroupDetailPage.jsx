import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import CardGroup from "../components/CardGroup";
import CardExpenses from "../components/CardExpenses";
import GroupService from "../services/GroupService";

const GroupDetailPage = () => {
  const [group, setGroup] = useState(null);
  const { id } = useParams();

  const expensesData = {
    user: "Juan Guillermo",
    expense: "25.000",
    concept: "Juan Valdez",
    participated: "No participé",
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    const fetchData = async () => {
      const response = await GroupService.getGroupsById(id);
      setGroup(response.data.group);
    };
    fetchData();
  }, [id]);

  if (!group) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="groupById lg:w-9/12 lg:mx-auto lg:py-4">
      <div className="flex justify-between m-2">
        <Button text="Nuevo gasto" />
        <Button text="Nuevo amigo" />
        <Button text="Editar grupo" />
      </div>
      <CardGroup groupData={group} dropOutButton={true} />
      <h2 className="font-medium text-amber-400 text-lg">Gastos</h2>
      <p className="font-medium text-sm">Enero 2024</p>
      <CardExpenses expensesData={expensesData} />
    </div>
  );
};

export { GroupDetailPage };
