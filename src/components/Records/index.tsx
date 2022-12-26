import React, { useState } from "react";
import Delete from "../Delete";
import Modify from "../Modify";
import Register from "../Records/";
import { GoTrashcan } from "react-icons/go";
import { HiOutlinePencilAlt } from "react-icons/hi";
interface Props {
  setShow: (value: any) => void;
  setModify: (value: any) => void;
  setId: (value: number) => void;
  setTableDelete: (value: boolean) => void;
  setPessoa: (value: any) => void;

  pessoa: any;

  del: boolean;
  tableDelete: boolean;
  list: any;
  Id: number;
}
const Records: React.FC<Props> = ({
  list,
  setShow,
  setModify,
  Id,
  setId,
  tableDelete,
  setTableDelete,
  setPessoa,
  pessoa,
  del,
}) => {
  console.log(list[Id]);

  return (
    <div className="h-full w-full  p-16 pt-10  relative ">
      <div
        className={`w-full h-full    overflow-x-hidden   scrollbar border-b-2 border-l-2 border-r-2 rounded-r-xl rounded-l-xl bg-slate-100
         border-black shadow-2xl shadow-gray-800 `}
        style={{ height: 672 }}
      >
        <div className="border-b border-gray-500  bg-slate-300 rounded-t-xl pl-6 h-10 flex flex-row items-center ">
          <span className="mr-60 pl-10 text-xl font-semibold ">ID</span>
          <span className="mr-56 text-xl font-semibold">Nome </span>
          <span className="mr-64 pl-3 text-xl font-semibold ">CPF </span>
          <span className="mr-56 text-xl font-semibold ">Número </span>
          <span className="mr-60 pl-1 text-xl font-semibold  ">Email</span>
        </div>

        {list.map((l: any, i: number) => {
          return (
            <div
              className="flex flex-row text-black w-full  h-8 mt-2  border-b"
              key={i}
            >
              <ul className="text-black w-64 ml-16 pl-1">{i}</ul>
              <ul className=" w-72 mr-1 ">{l.name}</ul>
              <ul className=" w-64 mr-8 ">{l.cpf}</ul>
              <ul className=" w-72 mr-3 ">{l.numero}</ul>
              <ul className=" w-72 ">{l.email}</ul>
              <button
                className="ml-4 w-7 h-5 rounded-md text-2xl hover:scale-125 duration-700  "
                onClick={(e) => {
                  setId(i);

                  setTableDelete(true);
                }}
              >
                <GoTrashcan
                  className=" hover:text-red-500   "
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Deletar"
                ></GoTrashcan>
              </button>
              <button
                className={`text-2xl ml-4 mb-2 hover:scale-125 duration-700 `}
                onClick={(e) => {
                  setId(i);

                  console.log(Id);
                  console.log("Cavalo", pessoa.name);
                  setModify(true);
                  setShow(false);
                }}
              >
                <HiOutlinePencilAlt
                  className="hover:text-blue-600  "
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Editar"
                  onClickCapture={(e) => {}}
                ></HiOutlinePencilAlt>
              </button>
            </div>
          );
        })}
      </div>

      <div className="flex flex-row items-center justify-center   h-20 w-full relative">
        <button
          className=" border-2 border-white    w-12 h-12 rounded-full  text-4xl invert bg-white hover:scale-125 duration-500 hover:tooltip"
          id=" tooltip"
          title="Novo"
          onClick={() => {
            setModify(false);
            setShow(false);
            setPessoa({ pessoa, numero: "" });
            setPessoa({ pessoa, name: "" });
            setPessoa({ pessoa, cpf: "" });
            setPessoa({ pessoa, email: "" });
            console.log("Id aqui o boco ", Id);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Records;
