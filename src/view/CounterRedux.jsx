import { useDispatch, useSelector } from "react-redux";
import { Titre } from "../components/Titre";
import { decrement, increment } from "../features/counterSlice";

export const CounterRedux = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <section>
      <Titre>Mon compteur avec redux</Titre>
      <p>{count}</p>
      <div>
        <button className="btn" onClick={() => dispatch(increment())}>
          +
        </button>
        <button className="btn" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
    </section>
  );
};
