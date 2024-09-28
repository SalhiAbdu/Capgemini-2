import React, { useState } from "react";
import AddEditBoardModal from "../modals/AddEditBoardModal";

export default function EmptyBoard({ type }) {
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);

  return (
    <div className="board-empty">
      <h3 className="board-empty-text">
        {type === "edit"
          ? "Ce tableau est vide. Créez une nouvelle colonne pour commencer."
          : "Il n'y a pas de tableau disponible. Créez un nouveau tableau pour commencer"}
      </h3>
      <button
        onClick={() => {
          setIsBoardModalOpen(true);
        }}
        className="add-column-btn"
      >
        {type === "edit" ? "+ Ajouter une nouvelle colonne" : "+ Ajouter un nouveau tableau"}
      </button>
      {isBoardModalOpen && <AddEditBoardModal type={type} setIsBoardModalOpen={setIsBoardModalOpen} />}
    </div>
  );
}
