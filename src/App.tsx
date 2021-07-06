import { AppContainer } from "./styles";
import { FC } from "react";
import { AddNewItem } from "./components/AddNewItem";
import { Column } from "./components/Column";
import { useAppState } from "./store/AppStateContext";
import { addList } from "./store/actions";

export const App: FC = ({ children }) => {
  const { lists, dispatch } = useAppState();

  return (
    <AppContainer>
      {lists.map((list) => (
        <Column text={list.text} key={list.id} id={list.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => dispatch(addList(text))}
      />
    </AppContainer>
  );
};
