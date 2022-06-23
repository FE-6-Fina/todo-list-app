import { useState, useEffect } from "react";

import React from "react";

function TodoList({ todo }) {
  return (
    <div className="flex justify-center">
      <ul className="bg-white rounded-lg w-96 text-gray-900">
        <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">1</li>
        <li className="px-6 py-2 border-b border-gray-200 w-full">2</li>
        <li className="px-6 py-2 border-b border-gray-200 w-full">3</li>
        <li className="px-6 py-2 border-b border-gray-200 w-full">4</li>
        <li className="px-6 py-2 w-full rounded-b-lg">5</li>
      </ul>
    </div>
  );
}

export default TodoList;
