import { useTodoStore } from "../stores/todoStore"

const Avatar = () => {
  const { firstName, avatar } = useTodoStore(
    (state) => state.profile
  );
  const intro = "Welcome back, ";

  return (
    <div className="avatar items-center fixed bottom-6 left-6">
      <div className="w-12 rounded mr-2">
        <img src={avatar} alt="" />
      </div>
      <p className="text-sm">{intro + " " + firstName}</p>
    </div>
  );
};

export { Avatar };