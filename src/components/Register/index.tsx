import router, { Router, useRouter } from "next/router";
import React, { useDebugValue, useState } from "react";

import Records from "../Records";

import Modify from "../Modify";
import { KeyObject } from "crypto";
import { text } from "stream/consumers";
import { setgid } from "process";
import { renderToHTML } from "next/dist/server/render";
import handler from "../../pages/api/hello";

interface Props {
  setList: (value: any) => void;
  setPessoa: (value: any) => void;
  setShow: (value: any) => void;
  setModify: (value: any) => void;
  setTableModify: (value: boolean) => void;
  setTableDelete: (value: boolean) => void;
  setId: (value: number) => void;
  setEdit: (value: boolean) => void;
  edit: boolean;
  tableModify: boolean;
  modify: any;
  list: any;
  Id: number;
  pessoa: any;
}

const Register: React.FC<Props> = ({
  modify,
  edit,
  setEdit,
  list,
  setId,
  setList,
  pessoa,
  setPessoa,
  setShow,
  Id,
  setTableModify,
}) => {
  if (edit == false)
    if (modify === true) {
      setId(Id);
      console.log(Id);
      if (pessoa.numero === list[Id].numero) {
        pessoa.name = list[Id].name;
        pessoa.cpf = list[Id].cpf;
        pessoa.email = list[Id].email;
        pessoa.numero = list[Id].numero;
      }
      setEdit(true);
    }
  console.log(pessoa);
  console.log(pessoa.name);
  console.log(Id);

  // console.log("a ", list[Id].name);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="text-4xl text-white font-bold  ">Cadastro Pessoal </div>
      <div>
        <div className="text-white text-base ml-12">
          Informe seus dados nos campos abaixo
        </div>
        <div className="text-white text-base mt-10 font-semibold ">
          Nome Completo
        </div>
        {!modify && (
          <input
            className="w-96 h-10 mt-2 pl-2 rounded-lg peer-required:border-red-400 target:"
            type="text"
            placeholder="Nome Completo"
            onChange={(e) => {
              setPessoa({ ...pessoa.id, name: e.target.value });

              console.log(" pessoa", pessoa);
            }}
          ></input>
        )}

        {modify && (
          <input
            className={`w-96 h-10 mt-2 pl-2 rounded-lg peer-required:border-red-400  
            `}
            type="text"
            placeholder="Nome Completo"
            onChange={(e) => {
              setPessoa({ ...pessoa, name: e.target.value });

              console.log("Cavalo", pessoa.name);
              console.log(list);
              console.log(" pessoa aaaa", pessoa);
            }}
            defaultValue={list[Id].name}
          ></input>
        )}
        <div className="text-white text-base mt-9 font-semibold">CPF</div>
        <div>
          {!modify && (
            <input
              className="w-96 h-10 mt-2 pl-2 odd:rounded-lg "
              maxLength={11}
              type="text"
              placeholder="Ex:11122233344"
              onChange={(e) => {
                setPessoa({ ...pessoa, cpf: e.target.value });

                console.log(" pessoa ", pessoa);
              }}
            />
          )}
          {modify && (
            <input
              className="w-96 h-10 mt-2 pl-2 odd:rounded-lg "
              maxLength={11}
              type="text"
              placeholder="Ex:11122233344"
              onChange={(e) => {
                setPessoa({ ...pessoa, cpf: e.target.value });

                console.log(list);
                console.log(" pessoa aaaa", pessoa);
              }}
              defaultValue={list[Id].cpf}
            />
          )}
        </div>
        <div className="text-white text-base mt-9 font-semibold">Celular</div>
        {!modify && (
          <input
            className="w-96 h-10 mt-2 pl-2 rounded-lg "
            type="number"
            placeholder="Ex: 5544999999999"
            onAbort={(e) => {
              setPessoa({ pessoa, cpf: list[Id].name });
            }}
            onChange={(e) => {
              setPessoa({ ...pessoa, numero: e.target.value });
              console.log(" pessoa ", pessoa);
            }}
          />
        )}
        {modify && (
          <div>
            <input
              className="w-96 h-10 mt-2 pl-2 rounded-lg "
              type="number"
              placeholder="Ex: 5544999999999"
              onChange={(e) => {
                setPessoa({ ...pessoa, numero: e.target.value });

                console.log(" pessoa aaaa", pessoa);
              }}
              defaultValue={list[Id].numero}
            />
          </div>
        )}
        <div className="text-white text-base mt-9 font-semibold">Email</div>
        {!modify && (
          <input
            className="w-96 h-10 mt-2 pl-2 rounded-lg"
            type="email"
            placeholder="example@gmail.com"
            onChange={(e) => {
              setPessoa({ ...pessoa, email: e.target.value });
              console.log(" pessoa sem ID ", pessoa);
            }}
          ></input>
        )}
        {modify && (
          <input
            className="w-96 h-10 mt-2 pl-2 rounded-lg"
            type="email"
            placeholder="example@gmail.com"
            onChange={(e) => {
              setPessoa({ ...pessoa, email: e.target.value });

              console.log(" pessoa aaaa", pessoa);
            }}
            defaultValue={list[Id].email}
          ></input>
        )}
      </div>
      <div>
        {!modify && (
          <button
            disabled={
              !pessoa.cpf || !pessoa.name || !pessoa.email || !pessoa.numero
            }
            className={`w-96 h-20 mt-20 bg-green-500  rounded-full text-3xl text-white ${
              !pessoa.cpf || !pessoa.name || !pessoa.email || !pessoa.numero
                ? "opacity-50"
                : "opacity-100"
            }
             `}
            onClick={() => {
              setList([...list, pessoa]);
              setShow(true);
              console.log(Id);

              console.log(" pessoa[Id] ", pessoa[Id]);
              console.log("pessoa ", pessoa);
              console.log("pessoa.id", pessoa.id);
              console.log("list", list);

              if (list.length > 1) {
                setId(Id + 1);
              }
            }}
          >
            Cadastrar
          </button>
        )}
        {modify && (
          <button
            disabled={
              !pessoa.name || !pessoa.cpf || !pessoa.email || !pessoa.numero
            }
            className={`w-96 h-20 mt-20 bg-red-600  rounded-full text-3xl text-white ${
              !pessoa.name || !pessoa.cpf || !pessoa.email || !pessoa.numero
                ? "opacity-50"
                : "opacity-100"
            }
            
            `}
            onClick={(e) => {
              console.log(">>>>>>>>>>>>>>>>>>>");
              console.log(Id);

              console.log("lsdfadsf", list);
              list[Id] = pessoa;
              setTableModify(true);
            }}
          >
            Modificar
          </button>
        )}
        {modify && (
          <button
            className=" w-20 h-20 "
            onClick={(e) => {
              setShow(true);
            }}
          >
            Cancelar
          </button>
        )}
      </div>
    </div>
  );
};

export default Register;
