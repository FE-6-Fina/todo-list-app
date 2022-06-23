import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center">
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-5 rounded-full" role="status">
        <span className="">.</span>
      </div>
    </div>
  );
}

export default Loading;
