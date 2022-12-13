import * as C from "./styles";
import { Item } from "../../types/item";
import { KeyboardEvent, useState } from "react";
import Modal from "react-modal";

type Props = {
  item: Item;
  delTask: Function;
  editTask: Function;
};

export const ListItem = ({ item, delTask, editTask }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);
  const [editShow, setEditShow] = useState(false);
  const [name, setName] = useState(item.name);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleFocus = (event: any) => event.target.select();

  const editName = () => {setEditShow(!editShow)};

  const handleKeyuP = (e: KeyboardEvent) => {
    if (e.code === "Enter" && name !== "") {
      editTask(item.itemIndex, name);
      setEditShow(false);
    }
  };

  return (
    <C.Container done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      {!editShow ? (
        <label>{item.name}</label>
      ) : (
        <input
          onKeyUp={(e: KeyboardEvent) => handleKeyuP(e)}
          type="text"
          className="inputName"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          autoFocus
          onFocus={handleFocus}
        />
      )}
      <C.EditArea>

        <button onClick={() => {editName();}}>✏️</button>

        <button onClick={()=>setModalIsOpen(true)}>🗑️</button>
        {modalIsOpen && (
          <>
            <div className="bgModal" onClick={()=>setModalIsOpen(false)}>
            </div>
            <div className="modal">
              <button className="close" onClick={()=>setModalIsOpen(false)}>❌</button>
              <h1>Você tem certeza que quer excluir esta tarefa?</h1> 
              <h2>Ao realizar esta ação, não tem volta!</h2>
              <hr />
              <button className="Button" id="yes" onClick={() => {delTask(item.itemIndex);setModalIsOpen(false);}}>
                Sim
              </button>
              <button className="Button" id="no" onClick={()=>setModalIsOpen(false)}>Não</button>
            </div>
          </>
        )}

      </C.EditArea>
    </C.Container>
  );
};
