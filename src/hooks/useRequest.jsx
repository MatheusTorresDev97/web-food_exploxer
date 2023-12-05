/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-async-promise-executor */
import { createContext, useContext } from "react";
import { api } from "../services/api";

const Request = createContext();

export function RequestProvider({ children }) {
  async function manageRequests(type, resource, infos = null) {
    const availableRequests = {
      get: () =>
        new Promise(async (resolve, reject) => {
          try {
            const response = await api.get(resource);

            const { data } = response;

            resolve(data);
          } catch (error) {
            reject(error);
          }
        }),
      post: () =>
        new Promise(async (resolve, reject) => {
          try {
            console.log("entrou aqui");
            const response = await api.post(resource, infos);

            resolve(response);
          } catch (error) {
            reject(error);
          }
        }),
    };


    // eslint-disable-next-line no-unused-vars
    const manageResponseTime = () =>
      new Promise((resolve, reject) => {
        const limitTime = 60 * 1000;

        setTimeout(() => {
          const maximumTimeExceeded = new Error(
            "Maximum response time has been exceeded!"
          );

          resolve(maximumTimeExceeded);
        }, limitTime);
      });

    const requisitionExecuted = availableRequests[type];

    if (requisitionExecuted) {
      const resultOfRequest = await Promise.race([
        requisitionExecuted(),
        manageResponseTime(),
      ]);

      return resultOfRequest;
    }
  }

  return (
    <Request.Provider value={{ manageRequests }}>{children}</Request.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useRequest() {
  const context = useContext(Request);

  return context;
}
