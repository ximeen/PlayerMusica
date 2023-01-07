import ImageMusic from "/art-music.png";
import arrowLeft from "/arrow-left.svg";
import arrowRight from "/arrow-right.svg";
import play from "/play.svg";

import * as Slider from "@radix-ui/react-slider";

export function App() {
  return (
    <main className="w-full h-full items-center justify-center flex">
      <div className="items-center justify-center bg-cardBackground w-fit px-9 py-9 rounded-lg">
        <div className="w-48 h-48">
          <img src={ImageMusic} alt="Image de capa de uma suposta musica" />
        </div>

        <div className="pt-7">
          <div>
            <h1 className="font-bold text-2xl text-white">Acorda Devinho</h1>
            <h3 className="text-lg text-[#E1E1E6] opacity-60">
              Banda Rocketseat
            </h3>
          </div>

          <div className="pt-7 flex justify-between">
            <button>
              <img src={arrowLeft} alt="Botão de voltar a musica anterior" />
            </button>

            <button>
              <img src={play} alt="botão de play" />
            </button>

            <button>
              <img
                src={arrowRight}
                alt="Botão de pular para a proxima musica"
              />
            </button>
          </div>
        </div>
        <div>
        <Slider.Root
          defaultValue={[80]}
          max={100}
          step={1}
          aria-label="Volume"
          className="relative flex items-center w-[200px] data-[orientation=horizontal]:h-5 data-[orientation=vertical]:flex-col data-[orientation=vertical]:h-[100px] data-[orientation=vertical]:w-5 pt-7"
        >
          <Slider.Track className="bg-slate-500 relative grow rounded-full data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:w-2">
            <Slider.Range className="absolute bg-gray-50 opacity-100 rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb className="block w-5 h-5 bg-gray-50 shadow-md shadow-gray-900 rounded-xl hover:bg-background focus:outline-none" />
        </Slider.Root>
        <div className="flex justify-between pt-3">
          <p className="text-[#C4C4CC]">03:20</p>
          <p className="text-[#C4C4CC]">00:30</p>
      
        </div>
        </div>
      </div>

      <div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
}
