import { KeyObject } from "crypto";
import React, { useState } from "react";

// import { Container } from './styles';

interface Props {
  setShow: (value: any) => void;
  setModify: (value: any) => void;
  setId: (value: number) => void;
  setTableModify: (value: boolean) => void;
  setList: (value: any) => void;
  setPessoa: (value: any) => void;
  tableModify: boolean;
  list: any;
  Id: number;
  pessoa: any;
}
const Modify: React.FC<Props> = ({
  setShow,
  setModify,
  setId,
  Id,
  setTableModify,
  tableModify,
  setList,
  list,
  pessoa,
  setPessoa,
}) => {
  return (
    <div>
      {tableModify && (
        <div
          className=" h-96 bg-white rounded-2xl  mb-32  relative "
          style={{ width: 700, height: 300 }}
        >
          <div className="flex flex-col h-44 justify-center items-center">
            <span className="text-black text-xl  ">
              Deseja realmente modificar os dados do cadastro inserido?
            </span>
          </div>
          <div className="flex flex-row w-full h-20 items-center ml-32">
            <button
              className="w-32 h-20 bg-gray-200 rounded-lg"
              onClick={() => setTableModify(false)}
            >
              Cancelar
            </button>
            <button
              className="w-32 h-20 bg-red-500 ml-32 rounded-lg"
              onClick={(e) => {
                console.log(">>>>>>>>>>>>>>>>>>>");

                console.log(Id);
                console.log("caraca", list);
                setTableModify(false);
                console.log(" pessoa", pessoa);

                setShow(true);
              }}
            >
              Modificar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modify;
