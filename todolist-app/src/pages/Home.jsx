import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import TodoList from "../components/TodoList";
import axios from "axios";

function Home() {
  const [todo, setTodo] = useState({});
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState("");
  const [dueString, setDueString] = useState("");
  const [dueLang, setDueLang] = useState("");
  const [priority, setPriority] = useState(0);

  const body = {
    content: "Buy Milk",
    due_string: "tomorrow at 12:00",
    due_lang: "en",
    priority: 4,
  };

  useEffect(() => {
    axios
      .post(
        `https://api.todoist.com/rest/v1/tasks`,
        {
          content: setContent.content,
          due_string: setDueString.dueString,
          due_lang: setDueLang.dueLang,
          priority: setPriority.priority,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setTodo(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("error load data");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Layout>
      <p>test</p>
    </Layout>
  );
}

export default Home;
