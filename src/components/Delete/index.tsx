import React, { useState } from "react";

// import { Container } from './styles';

interface Props {
  setList: (value: any) => void;
  setTableDelete: (value: boolean) => void;
  setDel: (value: boolean) => void;
  Id: number;
  list: any;
  tableDelete: boolean;
  pessoa: any;
}

const Delete: React.FC<Props> = ({
  tableDelete,
  setTableDelete,
  setList,
  Id,
  pessoa,
  list,
  setDel,
}) => {
  console.log(Id);
  return (
    <div>
      {tableDelete && (
        <div
          className=" h-96 bg-white rounded-2xl  mb-32  relative "
          style={{ width: 700, height: 300 }}
        >
          <div className="flex flex-col h-44 justify-center items-center">
            <span className="text-black text-xl  ">
              Deseja realmente exluir o cadastro inserido?
            </span>
          </div>
          <div className="flex flex-row w-full h-20 items-center ml-32">
            <button
              className="w-32 h-20 bg-gray-200 rounded-lg"
              onClick={() => {
                setTableDelete(false);
                console.log(Id, "Caracavelh");
              }}
            >
              Cancelar
            </button>
            <button
              className="w-32 h-20 bg-red-500 ml-32 rounded-lg"
              onClick={() => {
                list.splice(Id, 1);

                setTableDelete(false);
                console.log(Id, "Caracavelh");
                setDel(true);
                console.log(list);
              }}
            >
              Excluir
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Delete;
