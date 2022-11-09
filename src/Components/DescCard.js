export default function DescCard(props) {
  return (
    <section className="mb-8 flex items-center justify-start gap-24 basis-2 p-20 rounded-xl border-1 shadow-lg bg-blue-100">
      <img src={props.img} alt={props.alt} className="rounded-md h-64" />
      <div className="text-left">
        <h3 className="text-4xl text-slate-700 mb-4">{props.header}</h3>
        <p className="text-xl text-slate-500">{props.para}</p>
      </div>
    </section>
  );
}
