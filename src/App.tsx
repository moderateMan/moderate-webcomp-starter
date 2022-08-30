import React, { useEffect } from "react";
import "moderate-webcomp-starter"


export default () => {
  return (
    <div>
      <moderate-slot>
        <div slot="start">开始节点</div>
        <div slot="end">结束节点</div>
      </moderate-slot>
    </div>
  );
};
