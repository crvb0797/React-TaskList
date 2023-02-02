import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import Footer from "./Footer";

function App() {
  return (
    <main className="bg-zinc-700 h-full md:h-screen flex flex-col">
      <div className="px-24 mx-auto py-10">
        <TaskForm />
        <TaskList />

      </div>
      <Footer />
    </main>
  );
}

export default App;
