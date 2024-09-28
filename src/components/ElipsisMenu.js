import React from "react";

export default function ElipsisMenu({
  type,
  setOpenEditModal,
  setOpenDeleteModal,
}) {
  return (
    <div className="elipsis-menu text-L">
      <p
        onClick={() => {
          setOpenEditModal();
        }}
      >
        Modifier 📝 {type}
      </p>
      <p onClick={() => setOpenDeleteModal()} className="elipsis-menu-red">
        Supprimer ❌ {type}
      </p>
    </div>
  );
}
