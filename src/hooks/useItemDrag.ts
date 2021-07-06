import { DragItem } from "../DragItem";
import { useAppState } from "../store/AppStateContext";
import { setDraggedItem } from "../store/actions";
import { useDrag } from "react-dnd";

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [, drag] = useDrag({
    type: item.type,
    item: () => {
      dispatch(setDraggedItem(item));
      return item;
    },
    end: () => dispatch(setDraggedItem(null)),
  });
  return { drag };
};
