import imagen from "../../assets/imagen.webp"
import { FaLaptopFile } from "react-icons/fa6";

const Cursos = () => {
  return (
    <main>
      <section className="flex flex-row items-center justify-center pb-8 gap-3">
        <FaLaptopFile className="text-6xl" />
        <h1 className="text-6xl font-bold">Cursos</h1>
      </section>
      <section className="flex flex-col items-center gap-6 ">
        <article className="flex flex-row bg-tertiary w-4/5 items-center rounded-3xl">
          <div className="w-3/4">
            <img src={imagen} alt="" className="w-full" />
          </div>
          <div className="p-3">
            <h2 className="text-2xl font-semibold">Debates</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed ac libero vel purus semper pharetra. Integer vel velit vel felis semper eleifend. Nullam non eros non justo lobortis bibendum. Sed nec velit et nulla dapibus ultricies vel sed nibh.</p>
            <button className="bg-secondary px-4 py-2 rounded-full text-white">Ingresar</button>
          </div>
        </article>
        <article className="flex flex-row bg-tertiary w-4/5 items-center rounded-3xl">
          <div className="w-3/4">
            <img src={imagen} alt="" className="w-full" />
          </div>
          <div className="p-3">
            <h2 className="text-2xl font-semibold">Oratorias</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed ac libero vel purus semper pharetra. Integer vel velit vel felis semper eleifend. Nullam non eros non justo lobortis bibendum. Sed nec velit et nulla dapibus ultricies vel sed nibh.</p>
            <button className="bg-secondary px-4 py-2 rounded-full text-white">Ingresar</button>
          </div>
        </article>
        <article className="flex flex-row bg-tertiary w-4/5 items-center rounded-3xl">
          <div className="w-3/4">
            <img src={imagen} alt="" className="w-full" />
          </div>
          <div className="p-3">
            <h2 className="text-2xl font-semibold">Conversatorios</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed ac libero vel purus semper pharetra. Integer vel velit vel felis semper eleifend. Nullam non eros non justo lobortis bibendum. Sed nec velit et nulla dapibus ultricies vel sed nibh.</p>
            <button className="bg-secondary px-4 py-2 rounded-full text-white">Ingresar</button>
          </div>
        </article>
        <article className="flex flex-row bg-tertiary w-4/5 items-center rounded-3xl">
          <div className="w-3/4">
            <img src={imagen} alt="" className="w-full" />
          </div>
          <div className="p-3">
            <h2 className="text-2xl font-semibold">Hablar en público</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed ac libero vel purus semper pharetra. Integer vel velit vel felis semper eleifend. Nullam non eros non justo lobortis bibendum. Sed nec velit et nulla dapibus ultricies vel sed nibh.</p>
            <button className="bg-secondary px-4 py-2 rounded-full text-white">Ingresar</button>
          </div>
        </article>
      </section>
    </main>
  )
}

export default Cursos