// import React from "react";
import { observer } from "mobx-react-lite";
import globalStore from "@/stores/global";
import request from "@/net/index";

const Center = observer((props: any) => {
  const { globalStore } = props;
  return (
    <div>
      {globalStore.num}
      <button
        onClick={() => {
          request.post("/list").then(() => {
            globalStore.increaseNum();
          });
        }}
      >
        test
      </button>
    </div>
  );
});

export default () => {
  return <Center globalStore={globalStore} />;
};
