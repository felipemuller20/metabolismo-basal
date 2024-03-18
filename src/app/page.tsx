"use client";

import { useState } from "react";

export default function Home() {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [height, setHeight] = useState<number | null>();
  const [weight, setWeight] = useState<number | null>();
  const [age, setAge] = useState<number | null>();
  const [result, setResult] = useState<number>(0);
  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event?.preventDefault();

    let formResult;
    if (!height || !weight || !age) return;
    if (gender === "male") {
      formResult = 66 + 13.7 * weight + 5 * height - 6.8 * age;
      setResult(formResult);
      return;
    }

    formResult = 655 + 9.6 * weight + 1.8 * height - 4.7 * age;
    setResult(formResult);
    return;
  }

  return (
    <main className="text-center mx-auto">
      <header className="m-5 flex items-center justify-center flex-col">
        <h1 className="text-3xl bold">Calcule a sua</h1>
        <h2 className="text-2xl bold text-neutral-700">
          Taxa de Metabolismo Basal<span className="text-sm">*</span>
        </h2>
        <div className="text-sm text-neutral-500 w-52 mt-1">
          <p>
            Descubra quantas calorias o seu corpo consome, segundo a equação de
            <span className="bold text-neutral-700"> Harris-Benedict</span>.
          </p>
        </div>
      </header>
      <main className="flex items-center justify-center">
        <form className="rounded-xl shadow-lg m-5 bg-[#eeeded] lg:w-1/3 w-fit p-10 text-start flex flex-col gap-5 text-neutral-500">
          <label>
            Sexo
            <section className="flex justify-normal md:gap-10 gap-4 text-neutral-800">
              <div className="flex gap-1 items-center">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={() => setGender("male")}
                />
                <label htmlFor="male">Masculino</label>
              </div>
              <div className="flex gap-1 items-center">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={() => setGender("female")}
                />
                <label htmlFor="female">Feminino</label>
              </div>
            </section>
          </label>
          <section className="flex gap-5 flex-wrap">
            <label className="text-sm">
              {`Altura (cm)`}
              <section className="flex gap-10 mt-1 text-neutral-800">
                <input
                  type="number"
                  value={height}
                  className="p-2 rounded border border-neutral-400 w-20"
                  onChange={(event) => {
                    const value = Number(event.target.value);
                    if (value >= 0) {
                      setHeight(value);
                    }
                  }}
                />
              </section>
            </label>
            <label className="text-sm">
              {`Peso (kg)`}
              <section className="flex gap-10 mt-1 text-neutral-800">
                <input
                  type="number"
                  value={weight}
                  className="p-2 rounded border border-neutral-400 w-20"
                  onChange={(event) => {
                    const value = Number(event.target.value);
                    if (value >= 0) {
                      setWeight(value);
                    }
                  }}
                />
              </section>
            </label>
            <label className="text-sm">
              {`Idade`}
              <section className="flex gap-10 mt-1 text-neutral-800">
                <input
                  type="number"
                  value={age}
                  className="p-2 rounded border border-neutral-400 w-20"
                  onChange={(event) => {
                    const value = Number(event.target.value);
                    if (value >= 0) {
                      setAge(value);
                    }
                  }}
                />
              </section>
            </label>
          </section>
          <button
            onClick={handleClick}
            className="rounded-lg border border-neutral-700 disabled:border-red-400 hover:bg-neutral-300 disabled:hover:bg-red-200 text-gray-900 text-sm w-fit px-5 py-3"
            disabled={!height || !weight || !age}
          >
            Calcular
          </button>
        </form>
      </main>
      <section className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-2xl bold text-neutral-700">
          Taxa de Metabolismo Basal
        </h2>
        <p className="text-4xl bold text-neutral-800">
          {result.toFixed(2)} kcal
        </p>
      </section>
      <p className="text-xs text-neutral-500 w-96 mx-auto mt-10">
        <span className="text-neutral-700">*</span>Taxa de Metabolismo Basal é a
        quantidade de energia que o seu corpo consome quando está em repouso
        absoluto.
      </p>
    </main>
  );
}
