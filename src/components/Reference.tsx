export default function Reference({ item, idx }) {
  return (
    <div className="flex h-full w-auto flex-col items-start justify-start gap-3">
      <p className="text-md text-left">{item.text}</p>
      <a
        href={item.url}
        target="_blank"
        className="group flex w-full flex-row items-start justify-end gap-2 transition hover:underline"
      >
        <p className="text-md flex w-full flex-col items-end justify-end font-thin">
          {item.name}
          <span className="text-sm italic">
            {item.role} at {item.company}
          </span>
        </p>
        <img
          className="w-auto rounded-full border border-transparent transition group-hover:border-gray-50"
          style={{ height: '60px' }}
          src={item.image_url}
          alt={`LinkedIn Profile Image of ${item.name}`}
        />
      </a>
    </div>
  );
}
