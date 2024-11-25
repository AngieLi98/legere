import { FaLaptopFile } from "react-icons/fa6";
import imagen from "../../assets/imagen.webp"

const Clubs = () => {
  return (
    <main>
      <section className="flex flex-row items-center justify-center pb-8 gap-3">
        <FaLaptopFile className="text-6xl" />
        <h1 className="text-6xl font-bold">Clubs</h1>
      </section>
      <section className="flex flex-col items-center gap-3">
        <article className="flex flex-row bg-secondary w-4/5 items-center rounded-3xl p-4">
          <h2>1</h2>
          <div className="w-1/3">
            <img src={imagen} alt="" className="w-full" />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed ac libero vel purus semper pharetra. Integer vel velit vel felis semper eleifend. Nullam non eros non justo lobortis bibendum. Sed nec velit et nulla dapibus ultricies vel sed nibh.</p>
        </article>
        <article className="flex flex-row bg-secondary w-4/5 items-center rounded-3xl p-4">
          <h2 className="top-0">2</h2>
          <div className="w-1/3">
            <img src={imagen} alt="" className="w-full" />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed ac libero vel purus semper pharetra. Integer vel velit vel felis semper eleifend. Nullam non eros non justo lobortis bibendum. Sed nec velit et nulla dapibus ultricies vel sed nibh.</p>
        </article>
      </section>
    </main>
  )
}

export default Clubs