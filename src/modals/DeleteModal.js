import React from "react";

export default function DeleteModal({ type, title, onDeleteBtnClick }) {
  return (
    <div className="modal-container dimmed">
      <div className="delete-modal">
        <h3 className="heading-L">Delete this {type}?</h3>
        {type === "task" ? (
          <p className="text-L">
            Êtes-vous sûr de vouloir supprimer la tâche « {title} » et ses sous-tâches ?
            Cette action ne peut pas être annulée.
          </p>
        ) : (
          <p className="text-L">
            Êtes-vous sûr de vouloir supprimer le tableau « {title} » ? Cette action
            supprimera toutes les colonnes et les tâches et ne pourra pas être annulée.
          </p>
        )}

        <div className="delete-modal-btns">
          <button onClick={onDeleteBtnClick} className="btn delete-btn">
            Supprimer ❌
          </button>
          <button onClick={onDeleteBtnClick} className="btn cancel-btn">
            Annuler ♋︎
          </button>
        </div>
      </div>
    </div>
  );
}
