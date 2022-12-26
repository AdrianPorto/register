import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Records from "../components/Records";
import Register from "../components/Register";
import Delete from "../components/Delete";
import Modify from "../components/Modify";

const Home: NextPage = () => {
  const [pessoa, setPessoa] = useState<any>([
    {
      name: "",
      cpf: "",
      numero: "",
      email: "",
      id: null,
    },
  ]);

  const [list, setList] = useState<any>([]);
  const [show, setShow] = useState(false);
  const [modify, setModify] = useState(false);
  const [tableModify, setTableModify] = useState(false);
  const [Id, setId] = useState(0);
  const [tableDelete, setTableDelete] = useState(false);
  const [del, setDel] = useState(false);
  const [edit, setEdit] = useState(false);

  return (
    <div className=" h-screen w-screen bg-slate-800">
      <div
        className={`w-full h-full bg-gray-700 flex flex-1 justify-start items-center p-20 z-50   
        `}
      >
        {tableDelete && (
          <div
            className={`h-full w-full flex justify-center items-center  z-10  absolute   ${
              tableDelete && "backdrop-blur-sm w-full h-full "
            }`}
            style={{ width: 1750 }}
          >
            <Delete
              pessoa={pessoa}
              setList={setList}
              list={list}
              Id={Id}
              tableDelete={tableDelete}
              setTableDelete={setTableDelete}
              setDel={setDel}
            ></Delete>
          </div>
        )}
        {tableModify && (
          <div
            className={`h-full w-full flex justify-center items-center  z-10  absolute   ${
              tableModify && "backdrop-blur-sm w-full h-full "
            }`}
            style={{ width: 1750 }}
          >
            <Modify
              setShow={setShow}
              setModify={setModify}
              setId={setId}
              Id={Id}
              setTableModify={setTableModify}
              tableModify={tableModify}
              list={list}
              setList={setList}
              setPessoa={setPessoa}
              pessoa={pessoa}
            ></Modify>
          </div>
        )}
        {!show && (
          <Register
            list={list}
            setList={setList}
            pessoa={pessoa}
            setPessoa={setPessoa}
            setShow={setShow}
            setModify={setModify}
            setTableDelete={setTableDelete}
            setTableModify={setTableModify}
            tableModify={tableModify}
            modify={modify}
            Id={Id}
            setId={setId}
            edit={edit}
            setEdit={setEdit}
          ></Register>
        )}

        {show && (
          <Records
            list={list}
            setShow={setShow}
            setModify={setModify}
            Id={Id}
            setId={setId}
            tableDelete={tableDelete}
            setTableDelete={setTableDelete}
            pessoa={pessoa}
            setPessoa={setPessoa}
            del={del}
          ></Records>
        )}
      </div>
    </div>
  );
};

export default Home;
